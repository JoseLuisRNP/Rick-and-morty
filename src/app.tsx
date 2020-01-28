import * as React from "react";
import { getCharacters } from './model/character.api'
import { CharacterVM, createEmptyCharacter } from './model/character.vm'
import { charactersCollectionApiToVM } from './model/character.mapper';
import { Header } from './layout/header';
import { CardCharacter } from './character/card-character';
import { InfoCharacter } from './character/info-character';
import './index.css'

export const App: React.FunctionComponent = () => {

  const [characters, setCharacters] = React.useState<CharacterVM[]>([]);
  const [filter, setFilter] = React.useState<string>('');
  const [characterSelected, setCharacterSelected] = React.useState<CharacterVM>(createEmptyCharacter())
  const [nextPage, setNextPage] = React.useState('');
  const [prevPage, setPrevPage] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);


  React.useEffect(() => {
    getCharacters(filter)
      .then(({ info, results }) => {
        setCharacters(charactersCollectionApiToVM(results))
        setNextPage(info.next);
        setPrevPage(info.prev);
      })
      .catch(err => {
        setCharacters([])
      })
  }, [filter])


  const handleSeeInfo = (character: CharacterVM) => {
    setShowModal(true)
    setCharacterSelected(character);
  }

  const handlePagination = (url) => {
    getCharacters(filter, url)
      .then(({ info, results }) => {
        setCharacters(charactersCollectionApiToVM(results))
        setNextPage(info.next);
        setPrevPage(info.prev);
      })
  }


  return (
    <div className="container">
      <Header />
      <input
        onChange={e => setFilter(e.target.value)}
        placeholder="Character's name"
        className="input-search" />
      <div className="cards-container">
        {characters[0] ? characters.map(character => (
          <CardCharacter
            key={character.id}
            character={character}
            onSeeInfo={handleSeeInfo}
          >
            {character.name}
          </CardCharacter>
        ))
          :
          <p>Not characters with {filter}</p>
        }
      </div>
      <div>
        {prevPage && <button className="btn btn--secondary" onClick={() => handlePagination(prevPage)}>Back</button>}
        {nextPage && <button className="btn btn--secondary" onClick={() => handlePagination(nextPage)}>Next</button>}
      </div>
      {showModal && <InfoCharacter character={characterSelected} onClose={() => setShowModal(false)} />}
    </div>

  )
};
