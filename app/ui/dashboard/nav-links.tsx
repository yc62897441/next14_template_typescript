// Since usePathname() is a hook, you'll need to turn nav-links.tsx into a Client Component. Add React's "use client" directive to the top of the file, then import usePathname() from next/navigation:
// https://nextjs.org/learn/dashboard-app/navigating-between-pages#pattern-showing-active-links
'use client'

// import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// ...
const links = [
    {
        icon: '',
        name: '/dashboard',
        href: '/dashboard',
    },
    {
        icon: '',
        name: '/dashboard/customers',
        href: '/dashboard/customers',
    },
    {
        icon: '',
        name: '/dashboard/invoices',
        href: '/dashboard/invoices',
    },
]

export default function NavLinks() {
    const pathname = usePathname()
    console.log('pathname', pathname) // 在不同路由會印出不同內容 ，如 '/dashboard/invoices'、'/dashboard/customers'

    return (
        <>
            {links.map((link) => {
                // const LinkIcon = link.icon
                return (
                    <Link key={link.name} href={link.href} className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        {/* <LinkIcon className="w-6" /> */}
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}
