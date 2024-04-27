import Image from 'next/image'

// 次要字體(主要字體在 layout.tsx 引入)
import { lusitana } from '@/app/ui/fonts'

// 自定義 components
import SpanComponent from './ui/SpanComponent'
import SpanComponent2 from './ui/SpanComponent2'

import { sql } from '@vercel/postgres'

export default async function Home({ params }: { params: { user: string } }): Promise<JSX.Element> {
    const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`
    console.log('rows', rows)

    return (
        <main>
            <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
            <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />

            <div>
                rows start:
                {rows.map((row) => (
                    <div key={row.id}>
                        {row.id} - {row.quantity}
                    </div>
                ))}
                rows end:
            </div>

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
