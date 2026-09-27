const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export function Today() {
  return <h1>{formatDate(today)}</h1>;
}

function Item({ name, isPacked }) {
  if (isPacked) {
    return (
      <li className="item">
        <del>{name} ✅</del>
      </li>
    );
  }
  return <li className="item">{name}</li>;
}

export function Screen2() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

function Item0({ name, isPacked }) {
  return isPacked ? <li>{name} ✅</li> : null;
}

export function Screen3() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item0 isPacked={true} name="Space suit" />
        <Item0 isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export function List() {
  const listItems = people.map((person) => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />); // local mutation
  }
  return cups;
}
