export type WatchNames = 
    | ""
    | "Apple Watch series 6 40mm"
    | "Apple Watch series 6 44mm"
    | "Apple Watch series 7 41mm"
    | "Apple Watch series 7 45mm"
    | "Apple Watch series 8 41mm"
    | "Apple Watch series 8 45mm"
    | "Apple Watch Ultra 49mm"
    | "Apple Watch Ultra 2 49mm"
    | "Apple Watch SE 40mm (2е поколение)"
    | "Apple Watch SE 44mm (2е поколение)"
    | "Apple Watch Hermes Series 9 GPS 41mm"
    | "Apple Watch Hermes Series 9 GPS 45mm"
    | "Apple Watch Series 9 GPS M/L 41mm"
    | "Apple Watch Series 9 GPS M/L 45mm"
    | "Apple Watch Series 9 GPS S/M 41mm"
    | "Apple Watch Series 9 GPS S/M 45mm"
    | "Apple Watch Series 10 GPS 41mm"
    | "Apple Watch Series 10 GPS 45mm"
    | "Galaxy Watch 3 Titanium 45mm"
    | "Galaxy Watch 4 SM-R870N 44mm"
    | "Galaxy Watch 4 Classic SM-R890"
    | "Galaxy Watch 5 Classic SM-R880"
    | "Galaxy Watch 6 Classic SM-R880"
    | "Galaxy Watch 7 Classic SM-R880"

export type WatchSubNames =
    | "Watch_Apple"
    | "Watch_Samsung"

export type WatchTypes = {
    id: number
    price: number
    name: WatchNames
    subName: WatchSubNames
    equipment: WatchEquipment
    defects: WatchDefects
}

export type WatchEquipment = {
    nikeInscription: number
    noCharger: number
    originalBox: number
    "75": number
    "85": number
    "90": number
    "99": number
}

export type WatchDefects = {
    "deepChips(display)": number
    "deepChips(frame)": number
    "smallChips(display)": number
    "smallChips(frame)": number
    "displayBroken": number
    "withoutStraps(notOriginal)": number
}