@echo off

set /p fileName=������ű����ƣ�

if "%fileName%"=="" goto inputError

set title=%fileName%

set /p fileDesc=������ű���飺

if "%fileDesc%"=="" goto inputError

:set /p fileAuth=������ű����ߣ�
set fileAuth=wangquanyou

if "%fileAuth%"=="" goto inputError

pause

echo=>%fileName%.js

echo /*>%fileName%.js
echo *	title: %title%>>%fileName%.js
echo *	desc: %fileDesc%>>%fileName%.js
echo *	auth: %fileAuth%>>%fileName%.js
echo *	date: %date%>>%fileName%.js
echo */>>%fileName%.js

exit

:inputError

@echo ����Ϊ�գ�  

pause