import React from 'react'

function Tile(props) {

    const tile = props.element;

    console.log(typeof tile.name)
    return (
        <div className={tile.name} id={tile.id}>
            <h1> test</h1>
            { tile.image.length > 0 ?? <img src={tile.img}/> }
            
        </div>
    )
}

export default Tile
