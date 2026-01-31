---
description: 部署福岡旅遊 Web App 到 GitHub Pages
---

# 部署到 GitHub Pages

// turbo-all

## 步驟

1. 進入專案目錄
```bash
cd /Users/feng/Desktop/jp_fuk
```

2. 檢查 Git 狀態
```bash
git status
```

3. 添加所有變更
```bash
git add index.html styles.css app.js manifest.json
```

4. 提交變更
```bash
git commit -m "更新福岡旅遊 Web App"
```

5. 推送到 GitHub
```bash
git push origin main
```

6. 開啟 GitHub Pages 設定頁面確認部署
```bash
open "https://github.com/bylmdada/fukuoka-trip/settings/pages"
```

7. 開啟網站確認
```bash
open "https://bylmdada.github.io/fukuoka-trip/"
```

## 完成！

網站會在 1-2 分鐘內更新。

## 備註

- 網址：https://bylmdada.github.io/fukuoka-trip/
- Repository：https://github.com/bylmdada/fukuoka-trip
