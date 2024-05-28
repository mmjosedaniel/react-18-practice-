import React, {Suspense,useState, useEffect, useTransition, lazy} from 'react';

import './App.css';
import useGetData from './api/useGetData';

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
	const [_isPending, startTransition] = useTransition();
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

				<AutomaticBatchingTest />

				{<CardsContainer data={data} />}
			</Suspense>
    </div>
  );
}

export default App;
