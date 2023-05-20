import './App.css';
import LoadOnOpen from './LoadOnOpen';
import LoadOnButtonClick from './LoadOnButtonClick';
function App() {
  return (
    <div className="App">
      <div>Load On Open</div>
      <LoadOnOpen></LoadOnOpen>
      <br></br>
      <div>Load On ButtonClick</div>
      <LoadOnButtonClick></LoadOnButtonClick>
    </div>

  )
}

export default App;
