import { List } from './components/List'

function App() {
  const lista = [1, 2, 3];
  return (
    <div className="App">
      <List title={'Lista'} list={lista}/>
      <List title={'Lista x2'} list={lista.map(element => element * 2)}/>
    </div>
  )
}

export default App
