export type HeadphoneNames =
    | ""
    | "AirPods 1 series"
    | "AirPods 2 series"
    | "AirPods 3 series"
    | "AirPods 4 series"
    | "AirPods Pro"
    | "AirPods Pro 2"
    | "AirPods Max"
    | "Samsung Buds"
    | "Samsung Buds Plus"
    | "Samsung Buds Live"
    | "Samsung Buds Pro"
    | "Samsung Buds 2"
    | "Samsung Buds 2 Pro"
    | "Samsung Buds 3"
    | "Samsung Buds 3 Pro"
    | "Samsung Buds 4"
    | "Samsung Buds 4 Pro"

export type HeadphoneSubNames =
    | "Headphone_Apple"
    | "Headphone_Samsung"

export type HeadphoneTypes = {
    id: number
    price: number
    name: HeadphoneNames
    subName: HeadphoneSubNames
    equipment: HeadphoneEquipment
    defects: HeadphoneDefects
}

export type HeadphoneEquipment = {
    originalBox: number
    noiseReduction: number
    USBCord: number
}

export type HeadphoneDefects = {
    dirtEaten: number
    deepScratchesCase: number
    oneEarphone: number
    oneEarphoneDoesntWork: number
}