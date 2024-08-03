let score = 0;
let wicket = 0;
let ballWiseResult = [];
console.log(ballWiseResult);

const addScore = (num) => {
  if (wicket < 10) {
    score += num;
    ballWiseResult.push(num);
    console.log(ballWiseResult);
    root.render(<App />);
  }
};

const addWicket = () => {
  if (wicket < 10) {
    wicket += 1;
    ballWiseResult.push("W");
    console.log(ballWiseResult);
    root.render(<App />);
  }
};

const ScoreButtons = () => {
  return (
    <div>
      <button
        onClick={() => {
          addScore(0);
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          addScore(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          addScore(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          addScore(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          addScore(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          addScore(5);
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          addScore(6);
        }}
      >
        6
      </button>
      <button onClick={addWicket}>W</button>
    </div>
  );
};

const Result = () => {
  return (
    <div>
      {ballWiseResult.map((res, index) => {
        return (
          <>
            {index % 6 === 0 && <br />}
            <span>{res === 0 ? <strong>.</strong> : res}</span>
            <span>&nbsp;&nbsp;</span>
          </>
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <>
      <h1>Score Keeper App</h1>
      <h2>
        SCORE : {score}/{wicket}{" "}
      </h2>
      <ScoreButtons />
      <Result />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
