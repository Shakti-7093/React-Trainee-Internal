import React, {Suspense, lazy} from 'react'

const LazyModal = lazy(() => import ('./Components/Lazy')) 

const App = () => {
  return (
    <>
      <h1>Main contain</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyModal />
      </Suspense>
    </>
  )
}

export default App;