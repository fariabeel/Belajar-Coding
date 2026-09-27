export function Word() {
  return "wow";
}
export default function ({content, background}) {
  return (<>
    <h1
    style={{background: background}}
    >
      {content}
    </h1>
    </>
  );
}
