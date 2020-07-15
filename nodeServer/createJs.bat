@echo off

set /p fileName=请输入脚本名称：

if "%fileName%"=="" goto inputError

set title=%fileName%

set /p fileDesc=请输入脚本简介：

if "%fileDesc%"=="" goto inputError

:set /p fileAuth=请输入脚本作者：
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

@echo 不可为空！  

pause