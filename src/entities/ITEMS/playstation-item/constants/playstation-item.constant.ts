import type { PlayStationDefects, PlayStationEquipment, PlayStationSubNames } from "@/entities/ITEMS/playstation-item/types/playstation-item.types";

export const PLAYSTATION_MODELS: PlayStationSubNames[] = ["Playstation_4", "Playstation_5"]

export const PLAYSTATION_EQUIPMENT_TITLE: Record<keyof PlayStationEquipment, string> = {
    originalBox: "Коробка родная (есть / нету)",
    secondJoystick: "Второй джойстик (есть / нету)",
    wirelessHeadset: "Беспроводная гарнитура PULSE 3D™(наушник) (есть / нету)",
    multimedia: "ПДУ мультимедиа для PS5™(пульт) (есть / нету)",
    HDCamera: "HD-Камера для PS5™(камера) (есть / нету)",
    HDMI: "Нет HDMI // питание (да, нету / нет, есть)",
    notJoystick: "Без джойстиков (да, без джойстиков / нет, с джойстиками)"
}

export const PLAYSTATION_DEFECTS_TITLE: Record<keyof PlayStationDefects, string> = {
    deepScratches: "Глубокие царапины (есть / нету)",
    chipBody: "Скол по корпусу (есть / нету)",
    floppyDrive: "Не работает дисковод (есть / нету)",
    tornRubber: "Резинки на джойстике порванны (дефекты на джойстике) (есть / нету)"
}

export const PLAYSTATION_EQUIPMENT_CHECKED: Record<keyof PlayStationEquipment, boolean> = {
    originalBox: false,
    secondJoystick: false,
    wirelessHeadset: false,
    multimedia: false,
    HDCamera: false,
    HDMI: false,
    notJoystick: false
}

export const PLAYSTATION_DEFECTS_CHECKED: Record<keyof PlayStationDefects, boolean> = {
    deepScratches: false,
    chipBody: false,
    floppyDrive: false,
    tornRubber: false
}