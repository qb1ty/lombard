interface IResult<T> {
    datas: T[]
    fieldKey: keyof T
    idKey: keyof T
    isEnabled: boolean
    countGameDiscs: number
    isSell: boolean
    fixed: number[]
    precents: number[]
}

export default function Result<T extends {}>({ datas, fieldKey, idKey, isEnabled, countGameDiscs, isSell, fixed = [], precents = [] }: IResult<T>) {
    if (!isEnabled) return <></>

    return (
        <div className="fixed left-4 bottom-4 w-full">
            <div className="flex flex-row justify-between items-center w-full">
                {datas.map(item => {
                    const basePrice = +item[fieldKey]
                    const priceWithSell = isSell ? Math.round(basePrice * 1.10) : basePrice
                    let sum = priceWithSell + (3000 * countGameDiscs)
                    const formula = []
                    formula.push(sum)

                    const multipliers = precents.map(value => value < 1 ? (1 - value) : value)

                    precents.forEach(value => {
                        if (value === 0) return

                        const percentNum = value < 1 ? Math.round(value * 100) : Math.round((value - 1) * 100)
                        const percentDisplay = value < 1 ? `-${percentNum}%` : `+${percentNum}%`
                        formula.push(percentDisplay)
                    })

                    multipliers.forEach(mul => sum = Math.round(sum * mul))
                    fixed.forEach(value => {
                        if (value !== 0) {
                            formula.push(value > 0 ? `+${value}` : `${value}`);
                        }

                        sum += value
                    })

                    formula.push(`= ${sum}`)

                    const result = formula.join(" ")
                    const isNegative = sum < 0

                    return (
                        <span key={`SUM-ALL-${item[idKey]}`} className="flex flex-wrap items-center font-medium text-white text-base bg-black rounded-md py-2 px-2">Итого: {isNegative ? "Не принимаем" : result}</span>
                    )
                })}

                {isSell && <p className="bg-neutral-300 text-black text-md rounded-md py-2 px-4 mr-10">Продажа +10%</p>}
            </div>
        </div>
    )
}