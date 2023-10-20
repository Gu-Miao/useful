import { useEffect } from 'react'
import Card from './components/Card/Card'
import websites from './websites'
import Masonry from 'masonry-layout'
import './App.less'

function App() {
  useEffect(() => {
    const masonry = new Masonry('.App ul', {
      itemSelector: '.App ul li',
      gutter: 32,
    })

    return () => masonry.destroy && masonry.destroy()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Useful</h1>
        <p>Useful websites of image resource, tools, free api, blogs etc...</p>
      </header>
      <ul>
        {websites.map(site => (
          <li key={site.address} className="item">
            <Card {...site} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
