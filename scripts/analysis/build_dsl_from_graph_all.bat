@echo off
setlocal
cmd /V:ON /C "%~dp0build_dsl_from_graph_for_list.bat" "config\suts_and_rw.txt" both
endlocal
