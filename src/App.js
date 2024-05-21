import React, {Suspense} from 'react';

import './App.css';
import useGetData from './api/useGetData';

const LazyComponent = React.lazy(()=> {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(import('./components/LazyComponent'));
		}, 1000);
	});
});

const CardsContainer = React.lazy(() => import('./components/CardsContainer'))


function App() {
	const data = useGetData('https://rickandmortyapi.com/api/character')

  return (
    <div className='app' >
      <Suspense fallback={<div>Loading...</div>}>
				<LazyComponent />
				{data && <CardsContainer data={data} />}
			</Suspense>
    </div>
  );
}

export default App;
