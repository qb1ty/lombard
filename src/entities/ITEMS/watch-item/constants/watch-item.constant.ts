import type { WatchSubNames, WatchEquipment, WatchDefects } from "@/entities/ITEMS/watch-item/types/watch-item.types";

export const WATCH_MODES: WatchSubNames[] = ["Watch_Apple", "Watch_Samsung"]

export const WATCH_EQUIPMENT_TITLE: Record<keyof WatchEquipment, string> = {
    "nikeInscription": "Если есть надпись Nike (есть / нету)",
    "noCharger": "Нет Зарядного устройства (есть / нету)",
    "originalBox": "Есть коробка (есть / нету)",
    "75": "Батарея 75%",
    "85": "Батарея 85%",
    "90": "Батарея 90%",
    "99": "Батарея 99%"
}

export const WATCH_DEFECTS_TITLE: Record<keyof WatchDefects, string> = {
    "deepChips(display)": "Глубокие царапины, сколы (дисплей) (есть / нету)",
    "deepChips(frame)": "Глубокие царапины, сколы (корпус) (есть / нету)",
    "smallChips(display)": "Мелкие царапины, сколы (дисплей) (есть / нету)",
    "smallChips(frame)": "Мелкие царапины, сколы (корпус) (есть / нету)",
    "displayBroken": "Разбит Дисплей (есть / нету)",
    "withoutStraps(notOriginal)": "Без ремешков (или не родной) (есть / нету)"
}

export const WATCH_EQUIPMENT_CHECKED: Record<keyof WatchEquipment, boolean> = {
    "nikeInscription": false,
    "noCharger": false,
    "originalBox": false,
    "75": false,
    "85": false,
    "90": false,
    "99": false
}

export const WATCH_DEFECTS_CHECKED: Record<keyof WatchDefects, boolean> = {
    "deepChips(display)": false,
    "deepChips(frame)": false,
    "displayBroken": false,
    "smallChips(display)": false,
    "smallChips(frame)": false,
    "withoutStraps(notOriginal)": false
}