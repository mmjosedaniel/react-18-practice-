import React, {Suspense,useState, useEffect, useTransition, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';

import useGetData from './api/useGetData';

import './App.css';
import Template from './Template';

// const LazyComponent = React.lazy(()=> {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve(import('./components/LazyComponent'));
// 		}, 1000);
// 	});
// });

const CharactersPage = lazy(() => import('./Pages/CharactersPage'));
const AutomaticBatchingTest = lazy(() => import('./components/AutomaticBatchingTest'));
const Character = lazy(() => import('./Pages/Character'));


function App() {
	// eslint-disable-next-line no-unused-vars
	const [isPending, startTransition] = useTransition();
	const [data, setData] = useState(null);

	const fetchData = useGetData('https://rickandmortyapi.com/api/character');

	useEffect(() => {
		startTransition(() => {
			setData(fetchData);
		});
	},[fetchData]);



  return (
    <Suspense fallback={<div>Loading...</div>}>
			<Template>
					{/* <LazyComponent /> */}

					<Routes>
						<Route path='/' element={!isPending && <CharactersPage data={data} />}/>
						<Route path='/automatic-batching' element={<AutomaticBatchingTest />}/>
						<Route path='/:characterId' element={<Character data={data} />}/>
					</Routes>
			</Template>
		</Suspense>
  );
}

export default App;
