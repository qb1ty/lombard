console.log("✅ Content script injected")

// Пример: создаём небольшой баннер на странице
const el = document.createElement("div")
el.textContent = "Расширение активно ✅"
el.style.position = "fixed"
el.style.bottom = "20px"
el.style.right = "0px"
el.style.background = "#F3F3F3"
el.style.color = "white"
el.style.padding = "6px 10px"
el.style.borderRadius = "6px"
el.style.zIndex = "999999"
document.body.appendChild(el)

// Пример отправки сообщения в background
chrome.runtime.sendMessage(
  { type: "PING" },
  (response) => {
    console.log("📩 BG response:", response)
  }
)
