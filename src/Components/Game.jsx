import { useNavigate } from "react-router-dom";
import {useRef} from "react";
function Game() {
    const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);
  const navigate = useNavigate();
  const inputRef = useRef(0);
  const handleInputChange = (event) => {
    inputRef.current.value = event.target.value;
  };
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let count = 0;
  
  let v3 = [];

  function calculate() {    
    if (count == 5) {
      p2Ref.current.innerHTML = "You lost";
      p3Ref.current.innerHTML = "Gameover";
      count = 0;
      v3 = [];
    } else if (inputRef.current.value === randomNumber) {
      p1Ref.current.innerHTML = "Your guess is right. The random number chosen is: " + randomNumber;
      p2Ref.current.innerHTML = "you have guessed in " + v3.length + " chances";
      p3Ref.current.innerHTML = "Gameover";
      count = 0;
      v3 = [];
    } else if (inputRef.current.value > randomNumber) {
      p1Ref.current.innerHTML = "your guess is high";
      v3[count] = inputRef.current.value;
      count = count + 1;
      p2Ref.current.innerHTML = "your guesses: " + v3.join(", ");
    } else {
      p1Ref.current.innerHTML = "your guess is low";
      v3[count] = inputRef.current.value;
      count = count + 1;
      p2Ref.current.innerHTML = "your guesses: " + v3.join(", ");
    }

    if (p3Ref.current.innerHTML === "Gameover") {
        console.log("im inside")
      return (
        <div>
          <button>
            Yes
          </button>
          <button onClick={() => navigate("/next")}>
            No
          </button>
        </div>
      );
    }
  }

  return (
    <div className="mad">
      <h1><b>Number guessing game</b></h1>
      <pre>
        <p id="p4">
          We have selected a random number between 1 and 100. See if you can guess it in 6 turns or fewer.
          <br />
          We&apos;ll tell you if your guess was too high or too low.
        </p>
      </pre>
      <div className="prompt1">
        Enter the prompt: <input type="number" required min="1" max="100" id="input1"  ref={inputRef} onChange={handleInputChange}></input>
        <button id="done" onClick={calculate}>submit</button>
      </div>
      <p ref={p1Ref}></p>
      <p ref={p2Ref}></p>
      <p ref={p3Ref}></p>
    </div>
  );
}

export default Game;