import React, {Suspense} from 'react';

import './App.css';

const LazyComponent =React.lazy(()=> {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(import('./components/LazyComponent'));
		}, 1000);
	});
});


function App() {

  return (
    <div >
      <Suspense fallback={<div>Loading...</div>}>
				<LazyComponent />
			</Suspense>
    </div>
  );
}

export default App;
