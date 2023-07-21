import { type Website } from '@/websites'
import ExLink from '@/components/ExLink'
import './Card.less'

function Card(props: Website) {
  return (
    <ExLink className="Card" href={props.address}>
      <div className="thum">
        <img src={`/${props.title}.webp`} alt={props.title} />
      </div>
      <div className="title">{props.title}</div>
      <div className="desc">{props.description}</div>
      <div className="keywords">
        {props.keywords.map(keyword => (
          <span key={keyword}>{keyword}</span>
        ))}
      </div>
    </ExLink>
  )
}

export default Card
