import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title">猜數字</div>
      <div className="wrapper">
        <div className="ansbar"></div>
        <div className="action-wrapper">
          <button className="start">開始</button>
          <button className="reset">重新</button>
        </div>
        <div className="input-wrapper">
          <div className="enter-wrapper">
            <input type="text" className="input-bar"></input>
            <button className="enter-btn">輸入</button>
          </div>
          <div className="num-btn-wrapper">
            <button className="num-btn">1</button>
            <button className="num-btn">2</button>
            <button className="num-btn">3</button>
            <button className="num-btn">4</button>
            <button className="num-btn">5</button>
            <button className="num-btn">6</button>
            <button className="num-btn">7</button>
            <button className="num-btn">8</button>
            <button className="num-btn">9</button>
            <button className="num-btn">0</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
