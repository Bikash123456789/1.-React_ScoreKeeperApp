let score = 0;
let wicket = 0;

const addOne = () => {
  score += 1;
  root.render(<App />);
  console.log(score);
};

const App = () => {
  return (
    <>
      <h1>Score Keeper App</h1>
      <h2>
        SCORE : {score}/{wicket}{" "}
      </h2>
      <div>
        <button onClick={addOne}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
