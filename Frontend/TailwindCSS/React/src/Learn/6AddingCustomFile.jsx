export default function Main() {
    return (<>
    <div class={String.raw`after:content-['\_re']`}>real</div>

    {/* what the different? */}
    <div class="after:content-['\_re']">real</div>
    </>)
}

// back to html