@echo off
title Push Portfolio to GitHub
echo ===================================================
echo   Pushing Portfolio to GitHub Repository
echo ===================================================
echo.

:: Change directory to make sure we are in the portfolio root
cd /d "%~dp0"

echo 1. Staging files...
git add .

echo 2. Committing files...
git commit -m "refactor: portfolio UI enhancements, interactive resume dashboard, and CampusSphere link update" 2>nul

echo 3. Setting remote repository URL...
git remote set-url origin https://github.com/adi0tya/adityadash_portfolio.git 2>nul
if %errorlevel% neq 0 (
    git remote add origin https://github.com/adi0tya/adityadash_portfolio.git 2>nul
)

echo 4. Pushing to GitHub (main branch)...
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo Main branch push failed, trying master branch...
    git push -u origin master
)

echo.
echo ===================================================
echo ✅ Done! Script will close automatically.
echo ===================================================
timeout /t 5
