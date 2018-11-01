# Udemy 課程: Create a 3D Car Racing Game with THREE.js and CANNON.js
## 心得報告
### 這門課的範例是一個 RC Car (也就是遙控車) 的 3D 遊戲, 由 Three.js 和 Cannon.js 兩種開發工具完成的. 講師並沒有手把手的教學, 純粹說明解釋程式碼.
### 對於網頁開發員要理解並不困難. 我主要是拿來做漸進式網頁的練習, 加入 manifest.json 和 sw.js 讓我更加熟悉這項技術. 
## 注意事項
manifest.json

  start_url: 設定啟動網頁, 也就是 index.html 的路徑

sw.js

  navigator.serviceWorker.register(path_1, {scope: path_2})

    path_1: service worker 的路徑

    path_2: service worker 工作範圍

    注意!!! 如果要儲存到 cache 的檔案路徑錯/名字拼錯, 會無法 install.

Github

  manifest.json: start_url 要加入 Repository name: '/rccar/'

  sw.js: path_1: '/rccar/sw.js'
         path_2: '/rccar/'
         
         要安裝到 cache 的檔案路徑要加上 /rccar/


