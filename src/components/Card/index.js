import './Card.css'

const Card = ({character}) => {
	return (
		<div className='card'>
			<img src={character.image} alt={'image of' + character.name}/>

			<h2>{character.name}</h2>
		</div>
	);
};

export default Card;
