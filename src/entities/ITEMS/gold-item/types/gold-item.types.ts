export type GoldSampleId = 
    | ""
    | "LOM"
    | "IZDELIE"
    | "IZDELIE_REGULAR"
    | "IZDELIE_WITHOUT_BIDS"
    | "IZDELIE_WITH_BRILLIANT"
    | "IZDELIE_SHYM_REGULAR"

export type GoldPriceId =
    | ""
    | "LOM_375"
    | "LOM_500"
    | "LOM_585"
    | "LOM_750"
    | "LOM_900"
    | "LOM_999"
    | "IZDELIE_585"
    | "IZDELIE_750"
    | "IZDELIE_REGULAR_585"
    | "IZDELIE_REGULAR_750"
    | "IZDELIE_WITHOUT_BIDS_585"
    | "IZDELIE_WITHOUT_BIDS_750"
    | "IZDELIE_WITH_BRILLIANT_585"
    | "IZDELIE_WITH_BRILLIANT_750"

export type GoldItemTypes = {
    id: number
    name: string
    sampleId: string
    modeId: string
}

export type GoldItemInfoTypes = {
    id: number
    sampleId: GoldSampleId
    priceId: GoldPriceId
    sample: number
}

export type GoldItemResultTypes = {
    priceId: GoldPriceId
    price: number
    plus_installment: number
}