import { useNavigate } from 'react-router-dom';

function Secondquestion() {
    const navigate=useNavigate();
  return (
    <div>
      <h1>Just a small game</h1>
      <button onClick={()=>navigate("/game")}>
        Game
      </button>
      <button>No Game</button>
    </div>
  );
}

export default Secondquestion;