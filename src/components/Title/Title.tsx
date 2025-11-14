interface ITitle {
    title: string
    className: string
}

export default function Title({ title, className }: ITitle) {
    return (
        <h1 className={className}>{title}</h1>
    )
}