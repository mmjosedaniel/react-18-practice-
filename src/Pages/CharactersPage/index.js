import Card from '../../components/Card'

const CharactersPage = ({data}) => {
	return (
		<div>
			{data && data.results.map(character => (<Card key={character.id} character={character}/>))}
		</div>
	);
};

export default CharactersPage;
