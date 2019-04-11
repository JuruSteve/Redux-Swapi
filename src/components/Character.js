import React from 'react';
import './CharacterList.css'

const Character = props => {
  return <li>{props.character.name}</li>
};

export default Character
