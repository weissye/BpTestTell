param(
  [string]$List      = "config\suts_and_rw.txt",
  # Comma-separated roots so spaces aren’t ambiguous
  [string]$Roots     = "artifacts\det_checked,artifacts\nondet_checked",
  [string]$Patterns  = "*_llm_gold*.json,*_lle*_gold*.json",
  [int]$SeedDet      = 42,
  [int]$SeedNonDet   = 142
)

$ErrorActionPreference = 'Stop'
$rootArr = $Roots.Split(',')       | ForEach-Object { $_.Trim() } | Where-Object { $_ }
$patArr  = $Patterns.Split(',')    | ForEach-Object { $_.Trim() } | Where-Object { $_ }

Write-Host ""
Write-Host "Using LIST: $List"
Write-Host "Searching ROOTS: $($rootArr -join ', ')"
Write-Host "Patterns: $($patArr -join ', ')" 
Write-Host ""

# Load system names, skipping blanks / commented lines
$names = Get-Content -LiteralPath $List | Where-Object { $_ -and -not $_.Trim().StartsWith(';') } `
         | ForEach-Object { $_.Trim() }

foreach ($name in $names) {
  Write-Host "============================================"
  Write-Host "Processing $name"
  Write-Host "============================================"

  $nameHyphen = $name -replace '_','-'
  $gold = $null
  $rootHit = $null

  foreach ($root in $rootArr) {
    if ($gold) { break }
    foreach ($pat in $patArr) {
      if ($gold) { break }

      # PowerShell quirk: -Include only matches when -Recurse and the -Path has a wildcard.
      $hits1 = Get-ChildItem -Path (Join-Path $root '*') -Recurse -File -Include $pat -ErrorAction SilentlyContinue |
               Where-Object { $_.FullName -like "*\${name}\*" }

      $hits2 = $null
      if (-not $hits1) {
        $hits2 = Get-ChildItem -Path (Join-Path $root '*') -Recurse -File -Include $pat -ErrorAction SilentlyContinue |
                 Where-Object { $_.FullName -like "*\${nameHyphen}\*" }
      }

      $hit = @($hits1 + $hits2) | Where-Object { $_ } | Select-Object -First 1
      if ($hit) {
        $gold = $hit.FullName
        $rootHit = $root
        break
      }
    }
  }

  if (-not $gold) {
    Write-Host "[SKIP] No LLE or LLM gold found for $name"
    Write-Host ""
    continue
  }

  Write-Host "[FOUND] $gold"

  # Provider = first segment after the matching root (provider-agnostic)
  $rootAbs = (Resolve-Path -LiteralPath $rootHit).Path.TrimEnd('\')
  $fullAbs = (Resolve-Path -LiteralPath $gold).Path
  $rel     = $fullAbs.Substring($rootAbs.Length).TrimStart('\')
  $provider = $rel.Split('\')[0]
  if (-not $provider) { $provider = 'unknown_provider' }

  $hlsDetDir  = Join-Path "artifacts\hls_det\$provider"    $name
  $hlsNonDir  = Join-Path "artifacts\hls_nondet\$provider" $name
  $storiesDir = Join-Path $hlsNonDir "readable"

  $hlsDet  = Join-Path $hlsDetDir  "hls_det_gold.json"
  $hlsNon  = Join-Path $hlsNonDir  "hls_nondet_gold.json"
  $stories = Join-Path $storiesDir "stories_hls.js"

  New-Item $hlsDetDir  -ItemType Directory -Force | Out-Null
  New-Item $hlsNonDir  -ItemType Directory -Force | Out-Null
  New-Item $storiesDir -ItemType Directory -Force | Out-Null

  Write-Host "[RUN] gen_hls_det"
  & scripts\hls\gen_hls_det.bat $name $gold $hlsDet $SeedDet

  if (Test-Path $hlsDet) {
    Write-Host "[RUN] train_hls_llm"
    & scripts\hls\train_hls_llm.bat $name $hlsDet

    Write-Host "[RUN] gen_hls_nondet"
    & scripts\hls\gen_hls_nondet.bat $name $hlsDet $hlsNon $SeedNonDet

    if (Test-Path $hlsNon) {
      Write-Host "[RUN] emit_hls_all_in_one"
      & scripts\readable\emit_hls_all_in_one.bat $hlsNon "" $stories --name $name
    } else {
      Write-Host "[WARN] NONDET json not found: $hlsNon"
    }
  } else {
    Write-Host "[WARN] HLS-DET json not found: $hlsDet"
  }
  Write-Host ""
}

Write-Host "ALL DONE."
