import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const {name, hp, sprites} = pokemon

  const [isToggle, seIsToggle] = useState(false)

  // handle toggle image when card is clicked
  function handleToggleImage() {
    seIsToggle(prevToggle => !prevToggle)
  }

  return (
    <Card>
      <div onClick={handleToggleImage}>
        <div className="image">
          <img alt="oh no!" src={ isToggle ? sprites.back : sprites.front}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
