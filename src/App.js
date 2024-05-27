import React, {Suspense,useState, useEffect, useTransition} from 'react';

import './App.css';
import useGetData from './api/useGetData';

// const LazyComponent = React.lazy(()=> {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve(import('./components/LazyComponent'));
// 		}, 1000);
// 	});
// });

const CardsContainer = React.lazy(() => import('./components/CardsContainer'))


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

	console.log(data);

  return (
    <div className='app' >
      <Suspense fallback={<div>Loading...</div>}>
				{/* <LazyComponent /> */}
				{<CardsContainer data={data} />}
			</Suspense>
    </div>
  );
}

export default App;
