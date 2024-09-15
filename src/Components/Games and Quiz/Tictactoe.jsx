import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Tictactoe(){
    const [vis,setVis]=useState(false);
    const [winner,setWinner]=useState("")
    const navigate=useNavigate();
    const [inputval,setInputval]=useState("X");
    const [count,setCount]=useState(0);
    const [board,setboard]=useState(Array(9).fill(""));
    function handle(index){
       
        if(board[index] ===""){
        if(count%2==0)
        {
            setInputval("O");  
        }
        else{
            setInputval("X");
        }
        const newBoard = [...board];
      newBoard[index] = inputval;
      setboard(newBoard);
       const newwinner=checkwinner(newBoard);
       if(newwinner)
       {
        setWinner(newwinner);
        setVis(true);
            return 
       }
       
        setCount(prev=>prev+1);
    }
    }
    function checkwinner(board){
        const winningcombinations=[
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
        for(let comb=0;comb<winningcombinations.length;comb++)
        {
            const [a,b,c]=winningcombinations[comb];
            if(board[a]===board[b]&&board[a]===board[c]&&board[b]===board[c])
            {
                return board[a];
            }
        }
        return null;
    }
    return(
    <div className="tic">
        <h1 id="tic-head">Tic-Tac-Toe</h1>
        <div className="tic-1">
            <div onClick={()=>handle(0)} className="div11">{board[0]}</div>
            <div onClick={()=>handle(1)} className="div11">{board[1]}</div>
            <div onClick={()=>handle(2)} className="div11">{board[2]}</div>
        </div>
        <div className="tic-1"> 
            <div onClick={()=>handle(3)} className="div11">{board[3]}</div>
            <div onClick={()=>handle(4)} className="div11">{board[4]}</div>
            <div onClick={()=>handle(5)} className="div11">{board[5]}</div>
        </div>
        <div className="tic-1">
            <div onClick={()=>handle(6)} className="div11">{board[6]}</div>
            <div onClick={()=>handle(7)} className="div11">{board[7]}</div>
            <div onClick={()=>handle(8)} className="div11">{board[8]}</div>
        </div>
        {(count===9||vis) && <p className="tick-win">{winner==="X"||winner==="O"?`${winner} won the game`:"Draw game"}</p>}
        <div className="tic-back">
        <button className="tic-back" onClick={()=>navigate("/game")}>Back</button>
        <button onClick={()=>window.location.reload()}>Restart</button>
        </div>
    </div>
    )
}