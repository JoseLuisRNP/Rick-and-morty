import {CharacterApi} from './character.api';
import {CharacterVM} from './character.vm';

export const characterApiToVM = ({id, name, status, species, type, gender, origin,location, image}: CharacterApi): CharacterVM => ({
  id: id,
  name: name,
  status: status,
  species: species,
  type: type,
  gender: gender,
  origin: origin.name,
  location: location.name,
  image: image
})

export const charactersCollectionApiToVM = (characters: CharacterApi[]): CharacterVM[] => (
  characters.map(character => characterApiToVM(character))
)