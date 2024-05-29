import { useParams } from "react-router-dom";

import "./Character.css"

const Character = ({data}) => {
	const params = useParams();

	const character = data.results.find(element => element.id === +params.characterId);

	console.log(character);
	return (
		<div className="container--character">
			<img className="portrait" src={character.image} alt={character.name}/>
			<div>
				<h2>{character.name || "N/A"}</h2>
				<p>Status: {character.status || "N/A"}</p>
				<p>Species: {character.species || "N/A"}</p>
				<p>Type: {character.type || "N/A"}</p>
				<p>Gender: {character.gender || "N/A"}</p>
			</div>
		</div>
	);
};

export default Character;
