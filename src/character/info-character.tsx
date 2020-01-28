import * as React from 'react';
import { CharacterVM } from '../model/character.vm';
interface Props {
  character: CharacterVM
  onClose: () => void;
}

export const InfoCharacter: React.FC<Props> = (props) => {
  const { character, onClose } = props;
  const { name, status, gender, species, origin, location, type, image } = character;
  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  }
  return (
    <div className="modal">

      <div className="modal--window">
        <a className="modal--btn" href="" onClick={handleClose}>X</a>
        <img src={image} alt={name} />
        <div className="modal--info">
          <p>Name: {name}</p>
          <p>Status: {status}</p>
          <p>Gender: {gender}</p>
          <p>Specie: {species}</p>
          <p>Type: {type ? type : 'Normal'}</p>
          <p>Origin: {origin}</p>
          <p>Location: {location}</p>
        </div>
      </div>
    </div>
  )
}