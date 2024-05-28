import { useState } from "react";

import './AutomaticBatchingTest.css'

const AutomaticBatchingTest = () => {
	const [counter, setCounter] = useState(0);
	console.log('Render')

	return (
		<div className="container--automatic-batching">
			<h3>Updated with automatic barching {counter}</h3>
			<div>
				<button onClick={() => {

					setCounter(0);
					console.clear()

					setTimeout(() => {
						setCounter(0);
						setCounter(prevStatus => prevStatus += 1);
						setCounter(prevStatus => prevStatus += 1);
						setCounter(prevStatus => prevStatus += 1);
						setCounter(prevStatus => prevStatus += 1);
						setCounter(prevStatus => prevStatus += 1);
					}, 1000)
				}}>
					Test automatic batching
				</button>
			</div>
		</div>
	)
};

export default AutomaticBatchingTest;
