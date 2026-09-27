import { createContext } from "react";
const LevelContext = createContext(1)

function Section({level, children}) {
    return (
    <section>
        <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
    )
}

import { useContext } from "react";
function Heading({children}) {
    const level = useContext(LevelContext)
    switch(level) {
        case "anjass":
            return <h1>{children}</h1>
        case 2:
            return <h2>{children}</h2>
        default:
            throw Error("wutt")
    }
}

export default function() {
    return <Section level={"anjass"}>
        <Heading>wow</Heading>
        <Section level={2}>
            <Heading>real</Heading>
        </Section>
    </Section>
}