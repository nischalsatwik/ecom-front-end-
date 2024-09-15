import { useNavigate } from "react-router-dom"
export default function Game(){
    const navigate=useNavigate();
    return(<>
    <button onClick={()=>navigate("/game/Numbergame")}>Number Game</button>
    <button onClick={()=>navigate("/game/Tictactoe")}>Tic Tac Toe</button>
    </>)
}