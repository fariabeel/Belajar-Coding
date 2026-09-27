import { useEffect, useRef, useState } from "react";

export default function App() {
  return (
    <>
      <Screen />
    </>
  );
}

function Screen() {
  const [playing, setPlaying] = useState(false);
  const [intp, setIntp] = useState("");
  return (
    <>
      <input
        value={intp}
        onChange={(e) => {
          setIntp(e.target.value);
        }}
      />{" "}
      <br />
      <button
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {playing ? "playing" : " pause "}
      </button>
      <VideoPlayer
        playing={playing}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
  
function VideoPlayer({ src, playing }) {
  const ref = useRef(null);

  useEffect(() => {
    if (playing) {
      ref.current.play();
      console.log("wow");
    } else {
      ref.current.pause();
    }
  }, [playing]);

  return <video ref={ref} src={src} loop playsInline />;
}

function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>welcome to the Chat!</h1>;
}

function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log("✅ Connecting...");
    },
    disconnect() {
      console.log("❌ Disconnected.");
    },
  };
}

function Playground() {
  const [text, setText] = useState("a");

  useEffect(() => {
    function onTimeout() {
      console.log("⏰ " + text);
    }

    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log('🟡 Cancel "' + text + '" log');
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        What to log:{" "}
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <h1>{text}</h1>
    </>
  );
}

function Screen0() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "Mount"} the component
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
}
