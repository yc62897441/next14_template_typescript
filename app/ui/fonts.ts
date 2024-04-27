// Next.js automatically optimizes fonts in the application when you use the next/font module.
// https://nextjs.org/learn/dashboard-app/optimizing-fonts-images#why-optimize-fonts
import { Inter, Lusitana } from 'next/font/google'
export const inter = Inter({ subsets: ['latin'] })

// Practice: Adding a secondary font
// https://nextjs.org/learn/dashboard-app/optimizing-fonts-images#practice-adding-a-secondary-font
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
})
