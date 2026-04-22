import Masonry from 'masonry-layout'
import { useEffect } from 'react'
import Card from './components/Card/Card'
import websites from './websites'
import './App.less'

function App() {
  useEffect(() => {
    const $ul = document.querySelector('.App ul') as HTMLUListElement
    const $li = $ul.querySelectorAll('li') as NodeListOf<HTMLLIElement>
    $li.forEach(($el, i) => {
      $el.style.setProperty('--animation-delay', `${Math.min(i * 0.1, 2.25)}s`)
    })
    $ul.style.display = ''

    return () => {}
  }, [])

  useEffect(() => {
    const masonry = new Masonry('.App ul', {
      itemSelector: '.App ul li',
      gutter: 32,
    })

    return () => masonry.destroy?.()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Useful</h1>
        <p>收录常用的网站资源，涵盖图片、工具、免费 API、博客等内容。</p>
        <p>
          使用 <b>Ctrl + F</b> 快速搜索。
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
