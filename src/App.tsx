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

  useEffect(() => {
    const $ul = document.querySelector('.App ul') as HTMLUListElement
    const $li = $ul.querySelectorAll('li') as NodeListOf<HTMLLIElement>
    $li.forEach(($el, i) =>
      $el.style.setProperty('--animation-delay', `${Math.min(i * 0.1, 2.25)}s`),
    )
    $ul.style.display = ''

    return () => {}
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Useful</h1>
        <p>Useful websites of image resource, tools, free api, blogs etc...</p>
        <p>
          Use <b>Ctrl + F</b> to search.
        </p>
      </header>
      <ul style={{ display: 'none' }}>
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
