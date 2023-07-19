import { Fragment } from 'react'
import data from './data'

function App() {
  return (
    <div>
      <h1>Useful</h1>
      {data.map(collection => (
        <Fragment key={collection.name}>
          <h2>{collection.name}</h2>
          <ul>
            {collection.websites.map(site => (
              <li key={site.address}>
                <a href={site.address} target="__blank" rel="external nofollow noopener noreferrer">
                  {site.title}
                </a>
                {site.description && (
                  <>
                    &nbsp;--&nbsp;<span>{site.description}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  )
}

export default App
