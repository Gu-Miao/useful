import Card from './components/Card/Card'
import websites from './websites'
import './App.less'

function App() {
  return (
    <div className="App">
      <h1>Useful</h1>
      <p>Useful websites of image resource, tools, free api, blogs etc...</p>
      <ul>
        {websites.map(site => (
          <li key={site.address}>
            <Card {...site} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
