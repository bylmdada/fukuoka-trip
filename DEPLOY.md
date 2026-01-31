# 🚀 福岡旅遊 Web App 部署指南

## 方案一：GitHub Pages（推薦）

### 步驟

1. **建立 GitHub 帳號**（如果沒有）
   https://github.com/signup

2. **建立新的 Repository**
   - 前往 https://github.com/new
   - Repository name: `fukuoka-trip`
   - 選擇 **Public**
   - 點擊 **Create repository**

3. **上傳檔案**
   - 在 Repository 頁面點擊 **uploading an existing file**
   - 拖曳以下檔案：
     - `index.html`
     - `styles.css`
     - `app.js`
     - `manifest.json`
   - 點擊 **Commit changes**

4. **啟用 GitHub Pages**
   - 進入 Repository → **Settings** → **Pages**
   - Source 選擇 **Deploy from a branch**
   - Branch 選擇 **main** / **(root)**
   - 點擊 **Save**

5. **完成！**
   - 等待 1-2 分鐘
   - 網址：`https://你的用戶名.github.io/fukuoka-trip/`

---

## 方案二：Vercel（一鍵部署）

### 步驟

1. 前往 https://vercel.com/signup（使用 GitHub 登入）

2. 點擊 **Add New** → **Project**

3. **Import** 你的 GitHub Repository

4. 點擊 **Deploy**

5. 完成！會自動獲得 `https://fukuoka-trip.vercel.app` 網址

---

## 方案三：Netlify

### 步驟（無需 GitHub）

1. 前往 https://app.netlify.com/drop

2. 建立一個資料夾，把所有檔案放進去

3. 直接拖曳資料夾到網頁

4. 完成！自動獲得網址

---

## 分享給旅伴

部署完成後，把網址分享給旅伴：

```
https://你的用戶名.github.io/fukuoka-trip/
```

旅伴可以：
- ✅ 查看完整行程
- ✅ 點擊導航前往景點
- ✅ 個人打卡標記完成項目
- ✅ 各自記帳（資料存在各自手機）
- ✅ 加到手機主畫面當 App 用

---

## 加到手機主畫面

### iPhone
1. 用 Safari 開啟網址
2. 點擊分享按鈕 ⬆️
3. 選擇「加入主畫面」

### Android
1. 用 Chrome 開啟網址
2. 點擊右上角 ⋮ 選單
3. 選擇「新增至主畫面」

---

## 更新行程

如需更新行程：
1. 修改本地檔案
2. 重新上傳到 GitHub
3. 網站會自動更新

---

祝旅途愉快！🇯🇵✨
