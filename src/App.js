import React, {Suspense} from 'react';

import './App.css';
import useGetData from './api/useGetData';

const LazyComponent =React.lazy(()=> {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(import('./components/LazyComponent'));
		}, 1000);
	});
});


function App() {
	const data = useGetData('https://rickandmortyapi.com/api/character')

	console.log(data)

  return (
    <div >
      <Suspense fallback={<div>Loading...</div>}>
				<LazyComponent />
				<div>
					{data && data.results.map(character => (<p key={character.id}>{character.name}</p>))}
				</div>
			</Suspense>
    </div>
  );
}

export default App;
