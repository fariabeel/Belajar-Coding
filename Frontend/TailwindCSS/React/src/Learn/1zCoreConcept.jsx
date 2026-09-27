export function Elem() {
    return <ol class="[&>:nth-child(n_of_div)]:bg-red-300">
        <li>list</li>
        <div class="size-30 bg-red-300"/>
    </ol>
}

export function ElemImplementation() {
    return <ol class="[&>:nth-child(n+2_of_div)]:bg-fuchsia-300">
        <div class="size-30 bg-red-300 border-b"/>
        <div class="size-30 bg-red-300 border-b"/>
        <div class="size-30 bg-red-300"/>
    </ol>
}