console.log("✅ Background service worker запущен")

// Пример: слушаем сообщения от popup или content-script
chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  console.log("📩 Message received in background:", msg)

  if (msg.type === "PING") {
    sendResponse({ ok: true, message: "ЗАКАЗ" })
  }

  return true // позволяет использовать async sendResponse
})
