export type MacbookNames =
    | ""
    | "MacBook Air 2018"
    | "MacBook Pro 2018"
    | "MacBook Air 2019"
    | "MacBook Pro 2019"
    | "MacBook Air 2020"
    | "MacBook Pro 2020"
    | "MacBook Pro 2021"
    | "MacBook Air 2022"
    | "MacBook Pro 2022"
    | "MacBook Air 2023"
    | "MacBook Pro 2023"
    | "MacBook Air 2024"
    | "MacBook Pro 2024"

export type MacbookSubNames =
    | ""
    | "Air_2018"
    | "Pro_2018"
    | "Air_2019"
    | "Pro_2019"
    | "Air_2020"
    | "Pro_2020"
    | "Pro_2021"
    | "Air_2022"
    | "Pro_2022"
    | "Air_2023"
    | "Pro_2023"
    | "Air_2024"
    | "Pro_2024"

export type MacbookTypes = {
    id: number
    name: string
    subName: string
    price: number
    processors: MacbookProcessors
    inch: MacbookInch
    SSD: MacbookSSD
    RAM: MacbookRam
    rechargeСycles: MacbookRechargeСycles
    equipment: MacbookEquipment
    defects: MacbookDefects
}

export type MacbookProcessors = {
    "Core i3": number
    "Core i5": number
    "Core i7": number
    "Core i9": number
    "M1": number
    "M2": number
    "M3": number
    "M4": number
    "M1 MAX": number
    "M1 PRO": number
    "M2 PRO": number
    "M3 MAX": number
    "M3 PRO": number
    "M4 MAX": number
    "M4 PRO": number
}

export type MacbookInch = {
    "11-inch": number
    "13-inch": number
    "13.3-inch": number
    "13.4-inch": number
    "13.6-inch": number
    "14-inch": number
    "14.2-inch": number
    "15-inch": number
    "15.3-inch": number
    "15.4-inch": number
    "16-inch": number
    "16.2-inch": number
    "17-inch": number
}

export type MacbookSSD = {
    "128GB": number
    "256GB": number
    "512GB": number
    "1000GB": number
    "2000GB": number
}

export type MacbookRam = {
    "6GB": number
    "8GB": number
    "16GB": number
    "18GB": number
    "24GB": number
    "32GB": number
    "48GB": number
    "64GB": number
}

export type MacbookRechargeСycles = {
    "99": number
    "100": number
    "300": number
    "500": number
    "700": number
    "1000": number
}

export type MacbookEquipment = {
    touchBar: number
    originalBox: number
}

export type MacbookDefects = {
    mountingBolts: number
    "scratches/chips/small": number
    "noKeys(1 to 10 pcs)": number
    wornLettersKeyboard: number
    someKeysDontWork: number
    keysDontWork: number
    touchPadDontWork: number
    noCharger: number
    "needHoldPressDown(chargeFlows)": number
    dontCharge: number
    stopsChargingCoupleMinutes: number
    worksNetwork: number
    crackDisplay: number
    colorStripes: number
    colorPoints: number
    flickeringBlinkingScreen: number
    coolerNoisy: number
    turnsOffItself: number
    doesntWorkWifi: number
}