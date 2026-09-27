function Elements( {color, children } ) {
    const colorVariants = {
        blue: "bg-blue-300 hover:bg-blue-400",
        fuchsia: "bg-fuchsia-300 hover:bg-fuchsia-400"
    }
    return (<div class={`${colorVariants[color]}`}> { children } </div>)
}

export default function Main() {
    return (<>
    <div class="{{ error ? 'text-red-600' : text-green-600 }}">class</div>
    <Elements color="blue">real</Elements>
    </>)
}