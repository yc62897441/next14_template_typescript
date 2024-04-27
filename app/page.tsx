import Image from 'next/image'

// 次要字體(主要字體在 layout.tsx 引入)
import { lusitana } from '@/app/ui/fonts'

// 自定義 components
import SpanComponent from './ui/SpanComponent'
import SpanComponent2 from './ui/SpanComponent2'

export default function Home() {
    return (
        <main>
            <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
            <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />

            <p>
                主要字體 Inter：
                <strong>Welcome to Acme.</strong> This is the example for the <a href="https://nextjs.org/learn/">Next.js Learn Course</a>
                , brought to you by Vercel.
                <SpanComponent />
                <SpanComponent2 />
            </p>

            <p className={`${lusitana.className}`}>
                次要字體 Lusitana：
                <strong>Welcome to Acme.</strong> This is the example for the <a href="https://nextjs.org/learn/">Next.js Learn Course</a>
                , brought to you by Vercel.
                <SpanComponent />
            </p>
        </main>
    )
}
