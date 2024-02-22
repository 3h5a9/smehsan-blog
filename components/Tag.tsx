import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-xs font-medium border px-2 bg-light hover:bg-black hover:text-white"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
