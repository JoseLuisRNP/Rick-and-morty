import * as React from 'react';
import { CharacterVM } from '../model/character.vm';

interface Props {
  character: CharacterVM;
  onSeeInfo: (character: CharacterVM) => void;
}

export const CardCharacter: React.FC<Props> = (props) => {
  const { character,onSeeInfo } = props;
  const {image, name, species, } = character;

  const handleSeeInfo = () => onSeeInfo(character)

  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="text-center">
        <h2 className="card--title">{name}</h2>
        <h3 className="card--subtitle">{species}</h3>
        <button className="btn btn--primary" onClick={handleSeeInfo}>
          See info
        </button>
      </div>
    </div>
  )
}