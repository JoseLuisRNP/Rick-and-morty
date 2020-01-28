export interface CharacterVM {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
}

export const createEmptyCharacter = (): CharacterVM => ({
  id: -1,
  name: '',
  gender: '',
  image: '',
  location: '',
  origin: '',
  species: '',
  status: '',
  type: ''
});

