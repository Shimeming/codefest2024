// 定義一個函數，用於向 App 發送命令並等待回應
function fetchUserInfoFromApp(command_str: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // 檢查 window 是否已經存在與 App 溝通的物件
    if (typeof (window as any).appObject !== "undefined" && (window as any).appObject.postMessage) {
      
      // 使用 addEventListener 來監聽 App 的回應
      const messageListener = (event: MessageEvent) => {
        // 檢查事件的來源是否來自 App
        if (event.origin === window.location.origin && event.data) {
          // 解除監聽，防止後續重複觸發
          window.removeEventListener("message", messageListener);
          
          // 回應是字串，直接解析並解決 Promise
          resolve(event.data);
        }
      };

      // 綁定事件監聽
      window.addEventListener("message", messageListener);

      // 透過 appObject.postMessage 發送命令給 App
      (window as any).appObject.postMessage(command_str);
      
    } else {
      reject("App 通訊物件未定義");
    }
  });
}

// 例如，當使用者進入網頁後執行這個函數
fetchUserInfoFromApp("getUserInfo")
  .then(userInfo => {
    console.log("從 App 收到的使用者資訊:", userInfo);
    // 在這裡可以繼續處理來自 App 的資料
  })
  .catch(error => {
    console.error("無法從 App 獲取資料:", error);
  });
// 假設 flutterObject 是一個在網頁全域範圍中可用的物件


const flutterObject = window.flutterObject;

// 定義一個 event handler，處理來自 flutterObject 的訊息
function handleFlutterMessage(event: MessageEvent) {
  // 取得並處理來自 flutterObject 的資料
  const messageData = event.data; // 資料以字串形式存在於 event.data 中
  console.log("接收到來自 Flutter 的訊息：", messageData);

  // 可以在這裡根據 messageData 做進一步的處理
  // 例如解析 JSON 或執行其他邏輯
  try {
    const parsedData = JSON.parse(messageData);
    // 根據 parsedData 的內容進行操作
    console.log("解析後的資料:", parsedData);
  } catch (error) {
    console.error("無法解析訊息，可能不是 JSON 格式:", error);
  }
}

// 使用 addEventListener 來設置長時間存在的事件監聽器
flutterObject.addEventListener("message", handleFlutterMessage);
