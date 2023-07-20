import { type Website } from '@/data'
import ExLink from '@/components/ExLink'
import './Card.less'

function Card(props: Website) {
  return (
    <ExLink className="Card" href={props.address}>
      <div className="thum"></div>
      <div className="title">{props.title}</div>
      <div className="desc">{props.description}</div>
    </ExLink>
  )
}

export default Card
