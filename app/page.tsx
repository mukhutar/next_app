
import Image from 'next/image'
import ProductCard from './components/productCard'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>hello there</h1>
      <Link href="/users">user</Link>
      <ProductCard/>
    </div>
  )
}
