import React, { useState } from "react";
import Tile from './Tile'
function Game() {

    const [boardNumber, setBoardNum] = useState(9)
    // const [boardTile, setBoardTile] = useState(boardTile)
    let boardElements = [];
    for (let i = 0; i < boardNumber; i++){
        boardElements.push({ id: i+1, active: false, image:"", name:'mole-hole'})
    }
    

    const board = boardElements.map(element => (<Tile element={element} key={element.id} name={element.name} image={ element.image} />))



    console.log(boardElements)

  
    

    return (
        <div className="container-game-board">
         { board }
        </div>
    )
}

export default Game
