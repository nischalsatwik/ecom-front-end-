import { useNavigate } from 'react-router-dom';

function Secondquestion() {
    const navigate=useNavigate();
  return (
    <div>
      <h1>Just a small game</h1>
      <button className="sec-game" onClick={()=>navigate("/game")}>
        Game
      </button>
      <button className='sec-no' onClick={()=>navigate('/game')}>No Game</button>
    </div>
  );
}

export default Secondquestion;