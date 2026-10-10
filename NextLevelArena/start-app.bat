@echo off
title Next Level Gaming & Esports Arena

cd /d "C:\Users\Olwethu Mdima\NextLevelArena"

echo.
echo ==========================================
echo   NEXT LEVEL GAMING & ESPORTS ARENA
echo ==========================================
echo.
echo Cleaning Expo/Metro cache...
echo.

if exist ".expo" (
    rmdir /s /q ".expo"
)

echo.
echo Starting Expo with a clean Metro cache...
echo.

call npx.cmd expo start --clear

echo.
echo ==========================================
echo   Expo has stopped.
echo ==========================================
echo.
pause