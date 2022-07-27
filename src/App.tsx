import TodosBlock from "./components/TodosBlock"

const App = () => {
  return (
    <div className="wrapper">
      <div className="_container">
        <h1 className="title">todos</h1>
        <TodosBlock />
      </div>
    </div>
  )
}

export default App