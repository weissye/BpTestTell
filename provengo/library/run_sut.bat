@echo off
:: Use >> to append logs so you keep history from all 20 tests
python -u library_sut_buggy.py >> sut1.log 2>&1