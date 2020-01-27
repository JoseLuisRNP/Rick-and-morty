interface Location {
  name: string;
  url: string
}

export interface CharacterApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface ApiResult{
  info: Info;
  results: CharacterApi[];
} 

export const getCharacters = (name = ''): Promise<ApiResult> => (
  fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(res => res.json())
    .then(data => data)
  )