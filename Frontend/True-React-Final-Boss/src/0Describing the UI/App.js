import A from "./Photo";
import { getImageUrl } from "./utils";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Photo /> <Photo /> <Photo /> <br />
      <A /> <A /> <A />
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>{" "}
      <br />
      <TodoList />
      <Card>
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
      </Card>
    </div>
  );
}

function Photo() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

let person = {
  name: "Gregorio Y. Zara",
  theme: { backgroundColor: "black", color: "pink" },
};

function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="av4tar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size} //if you pass size={null} or size={0},
      //the default value will not be used.
      height={size}
    />
  );
}
function Card({ children }) {
  return <div className="card">{children}</div>;
}
