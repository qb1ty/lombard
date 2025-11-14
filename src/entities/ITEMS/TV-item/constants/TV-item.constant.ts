import type { TVSubNames, TVEquipment, TVDefects } from "@/entities/ITEMS/TV-item/types/TV-item.types"

export const TV_MODES: TVSubNames[] = ["TV_Haier", "TV_LG", "TV_Panasonic", "TV_Philips", "TV_Samsung", "TV_Sony", "TV_Toshiba"]

export const TV_EQUIPMENT_TITLE: Record<keyof TVEquipment, string> = {
    powerCord: "Нет шнура питания (да, нету / нет, есть)",
    remoteController: "Нет пульта (да, нету / нет, есть)",
    originalBox: "Нет коробки (да, нету / нет, есть)"
}

export const TV_DEFECTS_TITLE: Record<keyof TVDefects, string> = {
    scratchesBody: "Царапины по корпусу (есть / нету)",
    scratchesFrame: "Скол по корпусу (есть / нету)",
    brokenButtons: "Сломанны кнопки (есть / нету)",
    crackedChipScreen: "Трещина, скол на экране (есть / нету)",
    coloredWhiteDotsScreen: "Цветные или белые точки на экране (есть / нету)",
    scratchesDisplay: "Царапина на экране (есть / нету)",
    doesntConnectWifi: "Не подключается к wi-fi (да / нет)",
    notCleatSound: "Динамики шумят (Звук не четкий) (да / нет)",
    dontWorkSpeakers: "Динамики не работают (Нет звука) (да / нет)",
    turnsOffItself: "Сам по себе отключается (да / нет)"
}

export const TV_EQUIPMENT_CHECKED: Record<keyof TVEquipment, boolean> = {
    powerCord: false,
    remoteController: false,
    originalBox: false
}

export const TV_DEFECTS_CHECKED: Record<keyof TVDefects, boolean> = {
    scratchesBody: false,
    scratchesFrame: false,
    brokenButtons: false,
    crackedChipScreen: false,
    coloredWhiteDotsScreen: false,
    scratchesDisplay: false,
    doesntConnectWifi: false,
    notCleatSound: false,
    dontWorkSpeakers: false,
    turnsOffItself: false
}