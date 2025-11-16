import { useState } from "react"
import type { ModesID } from "@/entities/modes/types/modes.types"
import type { SubNames } from "@/entities/subcategories/types/subcategories.types"
import { PLAYSTATION_MODELS } from "@/entities/ITEMS/playstation-item/constants/playstation-item.constant"
import { HEADPHONE_MODES } from "@/entities/ITEMS/headphone-item/constants/headphone-item.constant"
import { WATCH_MODES } from "@/entities/ITEMS/watch-item/constants/watch-item.constant"
import { TV_MODES } from "@/entities/ITEMS/TV-item/constants/TV-item.constant"
import { Subcategories } from "@/components/Subcategories"
import { Categories } from "@/components/Categories"
import { PlayStationItem } from "@/components/ITEMS/PlayStationItem"
import { HeadphoneItem } from "@/components/ITEMS/HeadphoneItem"
import { WatchItem } from "@/components/ITEMS/WatchItem"
import { GoldItem } from "@/components/ITEMS/GoldItem"
import { TvItem } from "@/components/ITEMS/TV"
import { Modes } from "@/components/Modes"
import { Title } from "@/components/Title"
import { MACBOOK_MODES } from "@/entities/ITEMS/macbook-item/constants/macbook-item.constant"
import { MacbookItem } from "@/components/ITEMS/MacbookItem"
import { PROCESSOR_MODES } from "@/entities/ITEMS/processor-item/constants/processor-item.constant"
import { ProcessorItem } from "@/components/ITEMS/ProcessorItem"
import { PHONE_MODES } from "@/entities/ITEMS/phone-item/constants/phone-item.constants"
import { PhoneItem } from "@/components/ITEMS/PhoneItem"

export default function App() {
  const [categoryId, setCategoryId] = useState<string>("")
  const [subName, setSubName] = useState<SubNames>("")
  const [modesId, setModesId] = useState<ModesID>("")

  const resetSubcategories = () => {
    setModesId("")
    setSubName("")
  }

  return (
    <div className="p-4 w-[700px] pb-32 font-montserrat bg-[#F3F3F3]">
      <div className="flex flex-row justify-between items-center gap-2 w-full">
        <Categories setDataId={setCategoryId} />
        <Subcategories categoryId={categoryId} setDataId={setSubName} resetSubcategories={resetSubcategories}  />
      </div>
      <Modes setDataId={setModesId} />
      { subName === "" && <Title className="text-black text-lg text-center py-2" title="Выберите подкатегорию" /> }
      { (modesId === "" && subName !== "") && <Title className="text-black text-lg text-center py-2" title="Выберите тип продажи" /> }

      { subName === "Gold" && <GoldItem modesID={modesId} /> }
      { PLAYSTATION_MODELS.includes(subName as any) && <PlayStationItem subName={subName} modesID={modesId} /> }
      { HEADPHONE_MODES.includes(subName as any) && <HeadphoneItem subName={subName} modesID={modesId} /> }
      { WATCH_MODES.includes(subName as any) && <WatchItem subName={subName} modesID={modesId} /> }
      { TV_MODES.includes(subName as any) && <TvItem subName={subName} modesID={modesId} /> }
      { MACBOOK_MODES.includes(subName as any) && <MacbookItem subName={subName} modesID={modesId} /> }
      { PROCESSOR_MODES.includes(subName as any) && <ProcessorItem subName={subName} modesID={modesId} /> }
      { PHONE_MODES.includes(subName as any) && <PhoneItem subName={subName} modesID={modesId} />}
    </div>
  )
}
