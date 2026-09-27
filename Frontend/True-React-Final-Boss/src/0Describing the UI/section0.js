function Item({ name, isPacked /* you must "curlybrances"-ing it*/ }) {
  return (
    <li className="item">
      {name} {isPacked && "✅"}
    </li>
  );
}

function fa() {
  return <> wwwwwwww </>;
}

export function ItemScreen() {
  return (
    <>
      <fa /* not read as function cuss first letter not 
        capital. it read as HTML tag */
      />
      <Item name="real" isPacked={true} />
      <Item name="wow" isPacked={false} />
      <Item name="wow" isPacked={true} />
    </>
  );
}

export function Screen0() {
  let listItems = people.map((person) => (
    <li key={person.id} style={{ listStyleType: "none" }}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
      <br />
    </li>
  ));
  return (
    <>
      <article>
        <h1>Scientist</h1>
        <ul>{listItems}</ul>
      </article>
    </>
  );
}

function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

export const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

let guest = 1;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

export function Screen1({ number }) {
  return <h2>Now {number}</h2>;
}
