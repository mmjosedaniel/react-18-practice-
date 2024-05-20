import React, {Suspense} from 'react';

import './App.css';

const LazyComponent =React.lazy(()=> import('./components/LazyComponent'))


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
