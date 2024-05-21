import Card from '../Card'

const CardsContainer = ({data}) => {
	return (
		<div>
			{data && data.results.map(character => (<Card key={character.id} character={character}/>))}
		</div>
	);
};

export default CardsContainer;
