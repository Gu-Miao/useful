import { PropsWithChildren } from 'react'

type ExLinkProps = PropsWithChildren<{ href: string; className: string }>

function Exlink({ className, href, children }: ExLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target="__blank"
      rel="external nofollow noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default Exlink
