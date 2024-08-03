let score = 0;
let wicket = 0;
let ballWiseResult = [];
let hit = 0;

const addScore = (num) => {
  hit = num;
  root.render(<App />);
};

const addWicket = () => {
  hit = "w";
  root.render(<App />);
};

const handleSubmit = (e) => {
  e.preventDefault();

  ballWiseResult.unshift(hit);
  root.render(<App />);
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

// const Result = () => {
//   return (
//     <div>
//       {ballWiseResult.map((res, index) => {
//         return (
//           <>
//             {index % 6 === 0 && <br />}
//             <span>{res === 0 ? <strong>.</strong> : res}</span>
//             <span>&nbsp;&nbsp;</span>
//           </>
//         );
//       })}
//     </div>
//   );
// };

const Form = () => {
  return (
    <form onSubmit={handleSubmit}>
      <input value={hit} />
      <input />
      <button>Submit</button>
    </form>
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
      <br />
      <Form />
      <hr />
      {ballWiseResult.map((res, index) => (
        <p key={index}>{res}</p>
      ))}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
