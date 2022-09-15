#!/usr/bin/env sh

# 忽略错误
set -e

# 进入待发布的目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy page'

git pull --rebase origin main

# 如果部署到 https://<USERNAME>.github.io
git push -f git@github.com:YolandaKisses/YolandaKisses.github.io.git main

cd -
