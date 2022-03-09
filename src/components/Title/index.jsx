import "./styles.scss"

export function Title({title}) {
    return (
        <section className="title">
            <h1 className="title__content">{title}</h1>
        </section>
    )
}