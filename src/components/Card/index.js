import { useNavigate } from 'react-router-dom';

import './Card.css'

const Card = ({character}) => {
	const navigate = useNavigate();
	return (
		<div className='card' onClick={() => navigate(`/${character.id}`)}>
			<img src={character.image} alt={'image of' + character.name}/>

			<h2>{character.name}</h2>
		</div>
	);
};

export default Card;
