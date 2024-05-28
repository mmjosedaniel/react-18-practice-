import React, {Suspense,useState, useEffect, useTransition, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';

import useGetData from './api/useGetData';

import './App.css';

// const LazyComponent = React.lazy(()=> {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve(import('./components/LazyComponent'));
// 		}, 1000);
// 	});
// });

const CardsContainer = lazy(() => import('./components/CardsContainer'))
const AutomaticBatchingTest = lazy(() => import('./components/AutomaticBatchingTest'))


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
    <div className='app' >
      <Suspense fallback={<div>Loading...</div>}>
				{/* <LazyComponent /> */}
			
				<Routes>
					<Route path='/' element={!isPending && <CardsContainer data={data} />}/>
					<Route path='automatic-batching' element={<AutomaticBatchingTest />}/>
				</Routes>

			</Suspense>
    </div>
  );
}

export default App;
