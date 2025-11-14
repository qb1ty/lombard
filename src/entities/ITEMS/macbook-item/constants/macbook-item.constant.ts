import type { MacbookSubNames, MacbookEquipment, MacbookDefects } from "@/entities/ITEMS/macbook-item/types/macbook-item.types"

export const MACBOOK_MODES: MacbookSubNames[] = [
    "Air_2018",
    "Air_2019",
    "Air_2020",
    "Air_2022",
    "Air_2023",
    "Air_2024",
    "Pro_2018",
    "Pro_2019",
    "Pro_2020",
    "Pro_2021",
    "Pro_2022",
    "Pro_2023",
    "Pro_2024"
]

export const MACBOOK_EQUIPMENT_TITLE: Record<keyof MacbookEquipment, string> = {
    "originalBox": "Коробка (есть / нету)",
    "touchBar": "Наличие Touch-Bar (есть / нету)"
}

export const MACBOOK_DEFECTS_TITLE: Record<keyof MacbookDefects, string> = {
    mountingBolts: "Нет болтиков крепления (да, нету / нет, есть)",
    "scratches/chips/small": "Царапины / сколы / небольшие вмятинки по корпусу (да, есть / нет, нету)",
    "noKeys(1 to 10 pcs)": "Нет клавиш (от 1-10шт) (да, нету / нет, есть)",
    wornLettersKeyboard: "Потертые буквы на клавиатуре (да / нет)",
    someKeysDontWork: "Не работают некоторые из клавиш (да / нет)",
    keysDontWork: "Не работает клавиатура вообще (да / нет)",
    touchPadDontWork: "Не работает TouchPad (да / нет)",
    noCharger: "Нет зарядного устройства вообще (да, нету / нет, есть)",
    "needHoldPressDown(chargeFlows)": "Нужно придерживать, придавливать (чтоб шел заряд) (да / нет)",
    dontCharge: "Не заряжает вообще (да / нет)",
    stopsChargingCoupleMinutes: "Перестает заряжать через пару минут (да / нет)",
    worksNetwork: "Работает от сети (да / нет)",
    crackDisplay: "Трещина на дисплее (есть / нету)",
    colorStripes: "Цветные полоски (есть / нету)",
    colorPoints: "Черные или белые точки, пятна (есть / нету)",
    flickeringBlinkingScreen: "Мерцание, моргание экрана (да / нет)",
    coolerNoisy: "Шумит куллер (да / нет)",
    turnsOffItself: "Сам по себе отключается (экран или сам MacBook) (да / нет)",
    doesntWorkWifi: "Wi-fi не работает? (да / нет)"
}

export const MACBOOK_EQUIPMENT_CHECKED: Record<keyof MacbookEquipment, boolean> = {
    "originalBox": false,
    "touchBar": false
}

export const MACBOOK_DEFECTS_CHECKED: Record<keyof MacbookDefects, boolean> = {
    mountingBolts: false,
    "scratches/chips/small": false,
    "noKeys(1 to 10 pcs)": false,
    wornLettersKeyboard: false,
    someKeysDontWork: false,
    keysDontWork: false,
    touchPadDontWork: false,
    noCharger: false,
    "needHoldPressDown(chargeFlows)": false,
    dontCharge: false,
    stopsChargingCoupleMinutes: false,
    worksNetwork: false,
    crackDisplay: false,
    colorStripes: false,
    colorPoints: false,
    flickeringBlinkingScreen: false,
    coolerNoisy: false,
    turnsOffItself: false,
    doesntWorkWifi: false
}
