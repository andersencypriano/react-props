export function List({ title, list }) {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {
          list.map((element, i) => (
            <li key={i}>{element}</li>
          ))
        }
      </ul>
    </>
  );
}
