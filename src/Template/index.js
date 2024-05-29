import { Link } from "react-router-dom";

import './Template.css';

const Template = ({children}) => {
	return (
		<div className="container--template">
			<header>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/automatic-batching">Automatic Batching</Link>
				</nav>
			</header>

			{children}
		</div>

	)

}

export default Template;
