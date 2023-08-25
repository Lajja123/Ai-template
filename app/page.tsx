import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import Link from 'next/link'
import Image from 'next/image' // Import the Image component
import hero1 from '../public/bg.webp'
import hero2 from '../public/hero-bg-mobile.webp'

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  return (
    <div>
      <Image
        src={hero1}
        alt="Description of hero1 image"
        className="hero1-img"
      />{' '}
      {/* Use the Image component */}
      <Image
        src={hero2}
        alt="Description of another image"
        className="hero2-img"
      />{' '}
      <div className="pb-6 md:pb-0 pt-24 xl:pt-[160px] lg:pb-6">
        <div className="relative z-10">
          <h1 className="text-5xl font-light sm:leading-none leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik lg:text-center invisible opacity-0">
            ChainQ
          </h1>
        </div>
      </div>
    </div>
    /* <Link href="/test">
      <button>hello</button>
    </Link> */
  )
}
