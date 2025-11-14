export type SubNames = 
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
    | "Phones"
    | "Gold"
    | "Laptops"
    | "Headphone_Apple"
    | "Headphone_Samsung"
    | "Tablets"
    | "Playstation_4"
    | "Playstation_5"
    | "TV_Haier"
    | "TV_LG"
    | "TV_Panasonic"
    | "TV_Philips"
    | "TV_Samsung"
    | "TV_Sony"
    | "TV_Toshiba"
    | "Watch_Apple"
    | "Watch_Samsung"

export type Subcategories = {
    id: number
    subcategoryId: number
    categoryId: number
    subName: SubNames
    name: string
}