let users = [
      { handle: 'user1', avatarUrl: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', email: "example@gmail.com" },
      { handle: 'user2', avatarUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', email: "example@gmail.com" },
      { handle: 'user3', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80', email: "example@gmail.com" },
      { handle: 'user4', avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', email: "example@gmail.com" },
      { handle: 'user5', avatarUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', email: "example@gmail.com" }
    ];

export function UI() {
    return (<>
    <ul role="list" class=" outline-gray-200 outline-1 outline-offset-15 w-70 mx-auto">
    {users.map((user) => (
    <li class='flex py-4 first:pt-0 last:pb-0 not-last:border-b-1 border-solid border-gray-200'>
      <img class="h-10 w-10 rounded-full" src={user.avatarUrl} alt="" />
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-gray-900 ">{user.handle}</p>
        <p class="truncate text-sm text-gray-500 ">{user.email}</p>
      </div>
    </li>)
        )}
    </ul>
    </>)
}

// also can even: and odd:

export function First() {
    return (<>
    <ul class="first:bg-red-300">
    <li>First</li>
    <li>not first</li>
    </ul>
    </>)
}

// instead

export function FirstFixed() {
    return (<>
    <ul class="[&>:first-child]:bg-red-300">
    <li>First</li>
    <li>not first</li>
    </ul>
    </>)
}

// or

export function FirstFixed0() {
    return (<>
    <ul>
        <li class="first:bg-red-300">first0</li>
        <li class="first:bg-red-300">not first</li>
    </ul>
    </>)
}

export function Last() {
    return (<>
    <ul>
    <li class="last:bg-red-300">not last</li>
    <li class="last:bg-red-300">Last</li>
    </ul>
    {/* 
    or 
    <ul class="[&>:last-child]:bg-red-300">
        <li>not last</li>
        <li>Last</li>
    <ul/>
    */}
    </>)
}

function Head( { children }) {
    return <p class="bg-gray-100 w-15 px-1 flex items-center text-nowrap">{ children }</p>
}

export function Even() {
    return (<>
    <Head>even</Head>
    <ul class="[&>:nth-child(even)]:bg-red-300">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
    {/* 
    or
    <ul>
        <li class="even:bg-red-300">1</li>
        <li class="even:bg-red-300">2</li>
        <li class="even:bg-red-300">3</li>
        <li class="even:bg-red-300">4</li>
     */}
    </>)
}

export function Odd() {
    return (<>
    <Head>odd</Head>
    <ul class="[&>:nth-child(odd)]:bg-red-300">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
    {/* 
    or
    <ul>
        <li class="odd:bg-red-300">1</li>
        <li class="odd:bg-red-300">2</li>
        <li class="odd:bg-red-300">3</li>
        <li class="odd:bg-red-300">4</li>
     */}
    </>)
}

export function Nth() {
    return (<>
    <Head>nth</Head>
    <ol class="[&>:nth-child(3)]:bg-red-300">
        <li>1</li>
        <li>2</li>
        <li class="nth-3:bg-red-300">3</li>
        <li>4</li>
    </ol>
    </>)
}

export function NthArbitrary() {
    return (<>
    <Head>nth arbitrary</Head>  
    <ol class="[&>:nth-child(-n+2)]:bg-red-300">
        <li class="nth-[-n+2]:bg-red-300">1</li>
        <li class="nth-[-n+2]:bg-red-300">2</li>
        <li>3</li>
        <li>4</li>
    </ol>
    </>)
}

export function NthArbitrary0() {
    return (<>
    <Head>nth arbitrary0</Head>
    <ol class="[&>:nth-child(-n+2_of_li)]:bg-red-300">
        <li>1</li>
        <li class="nth-[-n+2_of_li]:bg-red-300">2</li>
        <li>3</li>
        <li>4</li>
    </ol>
    </>)
}

export function Invalid() {
    return <input class="outline-1 invalid:bg-red-200"/>
}

export function Has() {
    return <>
    <p class="has-[+p]:bg-yellow-200">lorem</p>
    <p>lorem</p> <br/>

    <div class="has-[_li]:bg-blue-200">
        div
        <li>list</li>
    </div> <br/>

    <div class="has-[:hover]:bg-fuchsia-300">
        trigger hover&nbsp;<span class="hover:bg-green-300">span</span>
    </div> <br/>

    <div class="group">
        div
        <p class="group-has-[p]:bg-lime-300">p</p>
        <p>p</p>
    </div> <br/>

    <label class="peer"><input class="peer" type="checkbox"/></label>&nbsp;
    <span class="peer-has-not-checked:hidden">checked</span>
    <span class="peer-has-checked:hidden">not checked</span> <br/> <br/>

    <div class="group hover:bg-fuchsia-300">
        <span class="group-has-[:hover]:hidden">not hovering</span>
        <span class="group-not-has-[:hover]:hidden">hovering</span>
    </div>
    </>
}

export function Field() {
    return (<>
    <div class="group trigger-block"> {/* remove trigger-block */}
        {/* group-[.should-look or .d] */}
        <div class="hidden group-[.trigger-block]:block">display block triggered</div>
    </div> <br/>

    <input type="email" class="peer border-1 border-gray-300"></input>
    <p class="invisible peer-invalid:visible">type the correct email</p>
    {/* peer-focus, peer-required, and peer-disabled also possible */}
    <br></br>

    <p class="bg-indigo-600 hover:not-focus:bg-indigo-700">real</p>
    {/* button indeed goods by the server */}
    <button class="bg-indigo-600! hover:not-focus:bg-indigo-700!">real</button>
    <br/> <br/>
    
    <div>
    <input id="email" name="email" type="email" class="is-dirty d peer border-1" required />
    {/* peer-[.is-dirty or .d] */}
    <div class="peer-[.is-dirty]:peer-required:block hidden">This field is required.</div>
    </div> <br/>

    <p class="
    after:content-['_wow'] after:text-yellow-300
    before:content-['wow_'] before:text-yellow-300
    ">real</p> <br/>

    <input placeholder="wow" class="border-1 border-gray-300
    placeholder:text-red-300 placeholder:italic"/> <br/><br/>

    <input type="file" class="text-gray-400 file:rounded-2xl file:text-purple-500 file:bg-purple-50"/>
    {/* go back to html 1 */}
    </>)
}

export function W_reference() {
    return (<>
    <blockquote class="text-center text-2xl font-semibold text-gray-900 italic ">
  When you look
  <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
    <span class="relative text-white ">annoyed</span>
  </span>
  all the time, people think that you're busy.
</blockquote>

{/*                     tailwind recomends this way
<blockquote class="text-center text-2xl font-semibold text-gray-900 italic">
  When you look
  <span class="relative">
    <span class="absolute -inset-1 block -skew-y-3 bg-pink-500" aria-hidden="true"></span>
    <span class="relative text-white">annoyed</span>
  </span>
  all the time, people think that you're busy.
</blockquote>
*/}
    </>)
}

export default function HoverFocusOthers() {
  return (<>
    
  </>)
}