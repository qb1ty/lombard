import type { HeadphoneDefects, HeadphoneEquipment, HeadphoneSubNames } from "@/entities/ITEMS/headphone-item/types/headphone-item.types";

export const HEADPHONE_MODES: HeadphoneSubNames[] = ["Headphone_Apple", "Headphone_Samsung"]

export const HEADPHONE_EQUIPMENT_TITLE: Record<keyof HeadphoneEquipment, string> = {
    originalBox: "Есть коробка (есть / нету)",
    noiseReduction: "Есть Шумоподавление (есть / нету)",
    USBCord: "USB шнур (оригинал) (есть / нету)"
}

export const HEADPHONE_DEFECTS_TITLE: Record<keyof HeadphoneDefects, string> = {
    dirtEaten: "Грязь въелась (да, въелась / нет, не въелась)",
    deepScratchesCase: "Глубокие царапины на кейсе (есть / нету)",
    oneEarphone: "1 наушник плохо работает (да / нет)",
    oneEarphoneDoesntWork: "1 наушник НЕ работает (да / нет)"
}

export const HEADPHONE_EQUIPMENT_CHECKED: Record<keyof HeadphoneEquipment, boolean> = {
    originalBox: false,
    noiseReduction: false,
    USBCord: false
}

export const HEADPHONE_DEFECTS_CHECKED: Record<keyof HeadphoneDefects, boolean> = {
    dirtEaten: false,
    deepScratchesCase: false,
    oneEarphone: false,
    oneEarphoneDoesntWork: false
}