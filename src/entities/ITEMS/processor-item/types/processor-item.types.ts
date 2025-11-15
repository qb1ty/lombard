export type ProcessorUniversalNames = 
    | ""
    | "Core i3/5-пок"
    | "Core i3/6-пок"
    | "Core i3/7-пок"
    | "Core i3/8-пок"
    | "Core i3/9-пок"
    | "Core i3/10-пок"
    | "Core i3/11-пок"
    | "Core i3/12-пок"
    | "Core i3/13-пок"
    | "Core i5/5 пок"
    | "Core i5/6 пок"
    | "Core i5/7 пок"
    | "Core i5/8 пок"
    | "Core i5/9 пок"
    | "Core i5/10 пок"
    | "Core i5/11 пок"
    | "Core i5/12 пок"
    | "Core i5/13 пок"
    | "Core i7/5 пок"
    | "Core i7/6 пок"
    | "Core i7/7 пок"
    | "Core i7/8 пок"
    | "Core i7/9 пок"
    | "Core i7/10 пок"
    | "Core i7/11 пок"
    | "Core i7/12 пок"
    | "Core i7/13 пок"
    | "Core i9/5 пок"
    | "Core i9/6 пок"
    | "Core i9/7 пок"
    | "Core i9/8 пок"
    | "Core i9/9 пок"
    | "Core i9/10 пок"
    | "Core i9/11 пок"
    | "Core i9/12 пок"
    | "Core i9/13 пок"
    | "Ryzen 3 (4-е поколение) 2020-2022 (4 ядер / 8 потоков)"
    | "Ryzen 3 (5-е поколение) 2023-2024 (4 ядер / 8 потоков)"
    | "Ryzen 5 (4-е поколение) 2020-2022 (6 ядер / 12 потоков)"
    | "Ryzen 5 (5-е поколение) 2023 (6 ядер / 12 потоков)"
    | "Ryzen 7 (1-е поколение) 2017 (8 ядер / 16 потоков)"
    | "Ryzen 7 (2-е поколение) 2018 (8 ядер / 16 потоков)"
    | "Ryzen 7 (3-е поколение) 2019 (8 ядер / 16 потоков)"
    | "Ryzen 7 (4-е поколение) 2020-2022 (8 ядер / 16 потоков)"
    | "Ryzen 7 (5-е поколение) 2023 (8 ядер / 16 потоков)"
    | "Ryzen 9 (1-е поколение) 2019 (12 ядер / 24 потоков)"
    | "Ryzen 9 (2-е поколение) 2020 (12 ядер / 24 потоков)"
    | "Ryzen 9 (3-е поколение) 2022-2023 (12 ядер / 24 потоков)"
    | "Ryzen 9 (4-е поколение) 2023 (12 ядер / 24 потоков)"
    | "Threadripper (1-е поколение) 2017 (8 ядер / 16 потоков)"
    | "Threadripper (2-е поколение) 2018 (12 ядер / 24 потоков)"
    | "Threadripper (3-е поколение) 2019 (24 ядер / 48 потоков)"
    | "Threadripper (4-е поколение) 2023 (24 ядер / 48 потоков)"


export type ProcessorTypes = {
    id: number
    name: ProcessorUniversalNames
    subName: ProcessorUniversalNames
    price: number
    equipment: ProcessorEquipment
    brand: ProcessorBrand
    gamingLaptop: ProcessorGamingLaptop
    memory: ProcessorMemory
    additionalMemory: ProcessorAdditionalMemory
    RAM: ProcessorRAM
    videoCard: ProcessorVideoCard
    additionalVideoCard: ProcessorAdditionalVideoCard
    core: ProcessorCore
    defects: ProcessorDefects
}

export type ProcessorEquipment = {
    originalBox: number
    mouse: number
    documents: number
    bag: number
    oldDesign: number
    chargerOriginal: number
    chargerNotOriginal: number
    chargerNot: number
}

export type ProcessorBrand = {
    Acer: number
    Asus: number
    Dell: number
    HP: number
    Lenovo: number
    Samsung: number
    Другие: number
}

export type ProcessorGamingLaptop = {
    "Acer Nitro 5": number
    "Acer Predator": number
    "ASUS ROG": number
    "ASUS TUF GAMING F15": number
    "Lenovo Legion": number
    "HP Omen": number
}

export type ProcessorMemory = {
    "250GbHDD": number
    "500GbHDD": number
    "750GbHDD": number
    "1TbHDD": number
    "2ТbHDD": number
    "64GbSSD": number
    "128GbSSD": number
    "240GbSSD": number
    "256GbSSD": number
    "500GbSSD": number
    "512GbSSD": number
    "1000GbSSD": number
    "1500GbSSD": number
    "2000GbSSD": number
}

export type ProcessorAdditionalMemory = {
    "500GbHDD": number
    "750GbHDD": number
    "1TbHDD": number
    "2ТbHDD": number
    "128GbSSD": number
    "240GbSSD": number
    "256GbSSD": number
    "500GbSSD": number
    "512GbSSD": number
    "1000GbSSD": number
    "1500GbSSD": number
    "2000GbSSD": number
}

export type ProcessorRAM = {
    "2GB": number
    "4GB": number
    "6GB": number
    "8GB": number
    "12GB": number
    "16GB": number
    "24GB": number
    "32GB": number
}

export type ProcessorVideoCard = {
    "GeForce GTX 1030": number
    "GeForce GTX 1040": number
    "GeForce GTX 1050": number
    "GeForce GTX 1050Ti": number
    "GeForce GTX 1060": number
    "GeForce GTX 1070": number
    "GeForce GTX 1080": number
    "GeForce GTX 1650": number
    "GeForce GTX 1650 Ti": number
    "GeForce GTX 1650 Max-Q": number
    "GeForce GTX 1660 Ti": number
    "GeForce GTX 1660 Ti Max-Q": number
    "GeForce RTX 2060": number
    "GeForce RTX 2060Max-Q": number
    "GeForce RTX 2070": number
    "GeForce RTX 2070 Max-Q": number
    "GeForce RTX 2070 Super": number
    "GeForce RTX 2080": number
    "GeForce RTX 2080 Ti": number
    "GeForce RTX 2080 Super": number
    "GeForce RTX 2080 Max-Q": number
    "GeForce RTX 2080 Super Max-Q": number
    "GeForce RTX 3000": number
    "GeForce RTX 3050": number
    "GeForce RTX 3060": number
    "GeForce RTX 3060 Ti": number
    "GeForce RTX 3070": number
    "GeForce RTX 3070 Ti": number
    "GeForce RTX 3080": number
    "GeForce RTX 3080 Ti": number
    "GeForce RTX 3090": number
    "GeForce RTX 3090 Ti": number
    "GeForce RTX 4060": number
    "GeForce RTX 4060 Ti": number
    "GeForce RTX 4070": number
    "GeForce RTX 4070 Ti": number
    "GeForce RTX 4080": number
    "GeForce RTX 4080 Ti": number
    "GeForce RTX 5000": number
    "GeForce RTX 5000 Ti": number
    "AMD Radeon Vega 8": number
    "AMD Radeon Vega 10": number
    "AMD Radeon Vega 11": number
}

export type ProcessorAdditionalVideoCard = {
    "GeForce GTX M серии": number
    "GeForce GTX MX серии": number
    "GeForce GTX 1030": number
    "GeForce GTX 1040": number
    "GeForce GTX 1050": number
    "GeForce GTX 1050Ti": number
    "GeForce GTX 1060": number
    "GeForce GTX 1070": number
    "GeForce GTX 1080": number
    "GeForce GTX 1650": number
    "GeForce GTX 1650 Ti": number
    "GeForce GTX 1650 Max-Q": number
    "GeForce GTX 1660 Ti": number
    "GeForce GTX 1660 Ti Max-Q": number
    "GeForce RTX 2060": number
    "GeForce RTX 2060Max-Q": number
    "GeForce RTX 2070": number
    "GeForce RTX 2070 Max-Q": number
    "GeForce RTX 2070 Super": number
    "GeForce RTX 2080": number
    "GeForce RTX 2080 Ti": number
    "GeForce RTX 2080 Super": number
    "GeForce RTX 2080 Max-Q": number
    "GeForce RTX 2080 Super Max-Q": number
    "GeForce RTX 3000": number
    "GeForce RTX 3060": number
    "GeForce RTX 3060 Ti": number
    "GeForce RTX 3070": number
    "GeForce RTX 3070 Ti": number
    "GeForce RTX 3080": number
    "GeForce RTX 3080 Ti": number
    "GeForce RTX 3090": number
    "GeForce RTX 3090 Ti": number
    "GeForce RTX 4060": number
    "GeForce RTX 4060 Ti": number
    "GeForce RTX 4070": number
    "GeForce RTX 4070 Ti": number
    "GeForce RTX 4080": number
    "GeForce RTX 4080 Ti": number
    "GeForce RTX 5000": number
    "GeForce RTX 5000 Ti": number
    "AMD Radeon Vega 3": number
    "AMD Radeon Vega 6": number
    "AMD Radeon Vega 8": number
    "AMD Radeon Vega 10": number
    "AMD Radeon Vega 11": number
}

export type ProcessorCore = {
    "1-core": number
    "2-core": number
    "4-core": number
    "6-core": number
    "8-core": number
    "16-core": number
}

export type ProcessorDefects = {
    videoCardWithIcon: number
    crackLowerPart: number
    "crackTopPart(whereKeyboard)": number
    crackScreenFrame: number
    "crackOuter(displayCover)": number
    mountingBolts: number
    smallScratches: number
    strongScratches: number
    "displayCoverDoesntStay(45Degrees)": number
    "openingCase(partKeyboardMonitor)RisesDoesntHold": number
    "noKeys(1 to 10 pcs)": number
    wornLettersKeyboard: number
    someKeysDontWork: number
    keysDontWork: number
    touchPadDontWork: number
    "needHoldPressDown(chargeFlows)": number
    dontCharge: number
    stopsChargingCoupleMinutes: number
    worksNetwork: number
    crackDisplay: number
    colorStripes: number
    colorPoints: number
    flickeringBlinkingScreen: number
    coolerNoisy: number
    driveNoisy: number
    driveBroken: number
    turnsOffItself: number
    doesntWorkWifi: number
    dynamicDoesntWork: number
}