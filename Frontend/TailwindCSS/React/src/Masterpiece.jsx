const object = [
    {name:"禪院 直哉", url:"https://i.pinimg.com/736x/b5/40/46/b540460b3c17c9f1e24cbb8c08c5cfdf.jpg",email:"naoyaaurafarming@gmail.com"},
    {name:"日車 寛見", url:"https://i.pinimg.com/1200x/31/25/10/312510d433b3bdd29f6b12ffcab62557.jpg",email:"wallahiwearecooked@gmail.com"},
    {name:"岸辺", url:"https://i.pinimg.com/1200x/49/79/e2/4979e242e7c833e0857a363c613a13b5.jpg",email:"kishibe@gmail.com"},
    {name:"早川 アキ", url:"https://i.pinimg.com/736x/e2/5f/56/e25f56669d190f8cb67255d79951fe4d.jpg",email:"akihayakawa@gmail.com"}
]

export default function UserAccount() {
    return <>
    <div class="border-1 border-solid border-gray-200">
        {object.map(character => (
        <div class="flex border-b-1 last:border-none border-solid border-gray-200 w-100 p-4">
            <div style={{backgroundImage:`url(${character.url})`}} class="size-15 bg-cover rounded-full"/>
            <div class="ml-3 mt-2">
                <p class="font-medium text-m text-gray-900">{character.name}</p>
                <p class="truncate text-m text-gray-500">{character.email}</p>
            </div>
        </div>
    ))}
    </div>
    </>
}