import { Switch, Route } from 'react-router-dom'

import './App.scss'
import HomePage from './components/home-page'
import NotFound from './components/NotFound'
import Shop from './components/pages/shop/Shop'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
