---
description: 當遇到 quota limit 錯誤時繼續執行未完成的工作
---

# 繼續執行工作流程

當用戶遇到以下錯誤訊息時使用此 workflow：
- "Encountered retryable error from model provider"
- "You have reached the quota limit for this model"

## 步驟

1. 檢查最近的對話歷史，確認上一個未完成的任務是什麼
2. 繼續執行該任務，從中斷的地方繼續
3. 如果是程式碼修改，確保完成所有變更並提交

## 注意事項

- 不需要用戶再次說明任務內容
- 直接從上次中斷的地方繼續
- 如果有 git 操作未完成，先完成 commit 和 push
