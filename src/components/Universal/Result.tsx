interface IResult<T> {
    datas: T[]
    fieldKey: keyof T
    idKey: keyof T
    isEnabled: boolean
    totalEquipment: number
    totalDefects: number
    countGameDiscs: number
    isSell: boolean
    precents?: number[]
}

export default function Result<T extends {}>({ datas, fieldKey, idKey, isEnabled, totalEquipment, totalDefects, countGameDiscs, isSell, precents = [0] }: IResult<T>) {
    if (!isEnabled) return <></>

    return (
        <div className="fixed left-4 bottom-4 w-full py-2">
            <div className="flex flex-row justify-between items-center w-full">
                {datas.map(item => {
                    const price: number = isSell ? Math.round(+item[fieldKey] * 1.10) : +item[fieldKey]
                    const sum: number = (+totalEquipment + +totalDefects + price) + (3000 * +countGameDiscs)
                    const allSum = precents.filter(val => val !== 0).reduce((acc, val) => {
                        if (val > 0 && val < 2) {
                            return acc * val
                        }

                        return acc += val
                    }, sum)
                    const result = Math.round(allSum)

                    const isNegative = sum < 0

                    console.log("PRICE: ", price, "SUM: ", sum, result)

                    return (
                        <span key={`SUM-ALL-${item[idKey]}`} className="font-medium text-white text-base bg-black rounded-md py-2 px-4">Цена: {isNegative ? "Не принимаем" : result}</span>
                    )
                })}

                <p className="text-black text-md">{isSell && "Продажа +10%"}</p>
            </div>
        </div>
    )
}