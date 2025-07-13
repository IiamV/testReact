export default function TestingMain() {
    return (
        <section>
            <E1text />
            <E2img />
        </section>
    );
}

function E1text() {
    return (
        <div>
            <h1>Testing parapharph 1</h1>
            <hr/>
            <br/>
        </div>
    );
}

function E2img() {
    return (
        <div>
            <a>
                <img src="nothing.png" alt="Image broken"/>
            </a>
        </div>
    );
}