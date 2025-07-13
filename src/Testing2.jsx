export default function TestingMain2() {
    return (
        <section>
            <P1text/>
            <P2text/>
        </section>
    )
}

function P1text() {
    return (
        <div>
            <h1>This uses main as the middleman</h1>
        </div>
    )
}

function P2text() {
    return (
        <div>
            <h1>
                This uses main as the middleman
            </h1>
        </div>
    )
}