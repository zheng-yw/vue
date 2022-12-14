@echo off
title compiling %1

if "%1" == "" goto noname
if not exist .\src\components\%1\%1.vue goto noten
if not exist .\src\components\%1\%1Panel.vue goto notenp

goto build

:noname
echo The component name cannot be empty, Should be like this: build Hello
goto end

:noten
echo The component name: "%1"  does not exist
goto end

:notenp
echo The component panel name: "%1Panel"  does not exist
goto end

:build
call .\node_modules\.bin\vue-cli-service build --target lib --name %1 ./src/components/%1/%1.vue
cd dist
"C:\Program Files (x86)\7-Zip\7z.exe" a %1.zip * "-xr!demo*" "-xr!*umd.js*" "-xr!*common.js*" > nul
move %1.zip ../ > nul
cd ../
call .\node_modules\.bin\vue-cli-service build --target lib --name %1Panel ./src/components/%1/%1Panel.vue
cd dist
"C:\Program Files (x86)\7-Zip\7z.exe" u ../%1.zip * "-xr!demo*" "-xr!*umd.js*" "-xr!*common.js*" > nul
cd ../
rd /S /Q dist
cd .\src\components\%1
"C:\Program Files (x86)\7-Zip\7z.exe" u ../../../%1.zip config.json > nul
cd ../../../
echo All Compiled successfully
goto end

:end
