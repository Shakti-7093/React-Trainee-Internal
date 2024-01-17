import { ErrorBoundaries } from './Components/ErrorBoundaries'
import Component from './Components/Component'

const App = () => {
  return (
    <div>
      <ErrorBoundaries>
        <Component />
      </ErrorBoundaries>
    </div>
  )
}

export default App;