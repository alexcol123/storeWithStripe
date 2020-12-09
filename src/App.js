import { Switch, Route } from 'react-router-dom'

import './App.scss'
import HomePage from './components/home-page'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
