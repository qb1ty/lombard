export type PlayStationNames =
    | ""
    | "Playstation 4 Fatt 500GB"
    | "Playstation 4 Slim 500GB"
    | "Playstation 4 Slim 1000GB"
    | "Playstation 4 Pro 500GB"
    | "Playstation 4 Pro 1000GB"
    | "PlayStation® 5 (c дисководом)"
    | "PlayStation®5 Digital edition (без дисковода)"

export type PlayStationSubNames = 
    | "Playstation_4"
    | "Playstation_5"

export type PlayStationTypes = {
    id: number
    price: number
    name: PlayStationNames
    subName: PlayStationSubNames
    equipment: PlayStationEquipment
    defects: PlayStationDefects
}

export type PlayStationEquipment = {
    originalBox: number
    secondJoystick: number
    wirelessHeadset: number
    multimedia: number
    HDCamera: number
    HDMI: number
    notJoystick: number
}

export type PlayStationDefects = {
    deepScratches: number
    chipBody: number
    floppyDrive: number
    tornRubber: number
}