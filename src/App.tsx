import { Fragment } from 'react'
import Card from './components/Card/Card'
import data from './data'
import './App.less'

function App() {
  return (
    <div className="App">
      <h1>Useful</h1>
      {data.map(collection => (
        <Fragment key={collection.name}>
          <h2>{collection.name}</h2>
          <ul>
            {collection.websites.map(site => (
              <li key={site.address}>
                <Card {...site} />
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  )
}

export default App
