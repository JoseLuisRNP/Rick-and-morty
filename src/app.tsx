import * as React from "react";
import { getCharacters } from './model/character.api'
import { CharacterVM } from './model/character.vm'
import { charactersCollectionApiToVM } from './model/character.mapper';
import Logo from './assets/img/rick-morty.png'
export const App: React.FunctionComponent = () => {

  const [characters, setCharacters] = React.useState<CharacterVM[]>([]);
  const [filter, setFilter] = React.useState<string>('');
  const [nextPage, setNextPage] = React.useState<string>('');
  const [prevPage, setPrevPage] = React.useState<string>('');


  React.useEffect(() => {
    getCharacters(filter).then(({ info, results }) => {
      setCharacters(charactersCollectionApiToVM(results))
      setNextPage(info.next);
      setPrevPage(info.prev);
    })
  }, [filter])

 

  return (
    <>
      <img src=""/>
      <h2>My app</h2>
      <input onChange={e => setFilter(e.target.value)} />
      <p>Filter:{filter}</p>

      {characters.map(character => (
        <h5 key={character.id}>{character.name}</h5>
      ))}
    </>
  )
};
