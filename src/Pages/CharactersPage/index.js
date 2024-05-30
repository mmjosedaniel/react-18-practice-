import { useDeferredValue, useState } from 'react';
import Card from '../../components/Card'

const CharactersPage = ({data}) => {
	const [characterName, setCharacterName] = useState('')

	const deferedValue = useDeferredValue(characterName)

	const handleSetCharacterName = event => {
		setCharacterName(event.target.value);
	}

	const filteredData = data
	? data.results.filter((character) =>
			character.name.toLowerCase().includes(deferedValue.toLowerCase())
		)
	: [];

	return (
		<div>
			<div>
				<input
					type='text'
					placeholder='Search character by name'
					value={characterName}
					onChange={handleSetCharacterName}
				/>
			</div>
			{filteredData.map(character => (<Card key={character.id} character={character}/>))}
		</div>
	);
};

export default CharactersPage;
