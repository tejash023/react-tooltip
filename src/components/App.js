import Tooltip from "./Tooltip";

function App() {
  return (
    <div className="App">
      <h1>React Tooltip</h1>

      <div className="example-wrapper">
        <Tooltip direction="right">
          <p>RIGHT</p>
        </Tooltip>
      </div>

      <div className="example-wrapper">
        <Tooltip direction="top">
          <p>TOP</p>
        </Tooltip>
      </div>

      <div className="example-wrapper">
        <Tooltip direction="bottom">
          <p>BOTTOM</p>
        </Tooltip>
      </div>

      <div className="example-wrapper">
        <Tooltip direction="left" delay="0">
          <p>LEFT</p>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
