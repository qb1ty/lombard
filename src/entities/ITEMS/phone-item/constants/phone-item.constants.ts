import type { PhoneDefects, PhoneEquipment, PhoneSubNames } from "@/entities/ITEMS/phone-item/types/phone-item.types"

export const PHONE_MODES: PhoneSubNames[] = ["Apple", "OPPO", "OnePlus", "Realme", "Samsung", "Xiaomi"]

export const PHONE_EQUIPMENT_TITLE: Record<keyof PhoneEquipment, string> = {
    ref: "Ref",
    fullEquipment: "Полная комплектация",
    withoutEquipment: "Без комплектации",
    originalBox: "Нет коробки",
    emptyBox: "Пустая коробка",
    "eSIM(noPhysicalSIMslot)": "Только eSIM (нет физической SIM слота)",
    "noStylus(suppliedFactory)": "Нет стилуса (если поставляется с завода)",
    isCharger: "Есть З/У",
    isHeadphones: "Есть Наушники",
    isCover: "Есть Чехол"
}

export const PHONE_DEFECTS_TITLE: Record<keyof PhoneDefects, string> = {
    caseWasOpened: "Корпус - вскрывался",
    caseReplacedCase: "Корпус - менянный корпус",
    bodyHasStrongDentCracks: "Корпус - сильная вмятина, трещины",
    bodyHasDentChips: "Корпус - вмятина, сколы",
    caseScratchesBackCover: "Корпус - царапины на задней крышке",
    "TouchID(home)": "Touch id(тач, дом)",
    "FaceID(broken)": "Face id (не работает)",
    displayHasDeepScratches: "Дисплей - глубокие царапины",
    displaySpotStripes: "Дисплей -  пятна, полоски",
    "displayCrack(replacementRequired)": "Дисплей - трещины (на замену)",
    displayReplaced: "Дисплей - менянный",
    cameraSpotShooting: "Камера - пятно при съемке",
    cameraReplaceable: "Камера - менянная",
    cameraCrackGlass: "Камера - трещина на стекле",
    cameraNotWorking: "Камера - не работает",
    "speakerTop(auditory)": "Динамик - верхний (слуховой)",
    "speakerLower(conversational)": "Динамик - нижний (разговорный)",
    "sideButtons(replacement)": "Боковые кнопки(на замену)",
    vibrationDoesntWork: "Вибрация не работат",
    flashlightDoesntWork: "Фонарик не работает"
}

export const PHONE_EQUIPMENT_CHECKED: Record<keyof PhoneEquipment, boolean> = {
    ref: false,
    fullEquipment: false,
    withoutEquipment: false,
    originalBox: false,
    emptyBox: false,
    "eSIM(noPhysicalSIMslot)": false,
    "noStylus(suppliedFactory)": false,
    isCharger: false,
    isHeadphones: false,
    isCover: false
}

export const PHONE_DEFECTS_CHECKED: Record<keyof PhoneDefects, boolean> = {
    caseWasOpened: false,
    caseReplacedCase: false,
    bodyHasStrongDentCracks: false,
    bodyHasDentChips: false,
    caseScratchesBackCover: false,
    "TouchID(home)": false,
    "FaceID(broken)": false,
    displayHasDeepScratches: false,
    displaySpotStripes: false,
    "displayCrack(replacementRequired)": false,
    displayReplaced: false,
    cameraSpotShooting: false,
    cameraReplaceable: false,
    cameraCrackGlass: false,
    cameraNotWorking: false,
    "speakerTop(auditory)": false,
    "speakerLower(conversational)": false,
    "sideButtons(replacement)": false,
    vibrationDoesntWork: false,
    flashlightDoesntWork: false
}