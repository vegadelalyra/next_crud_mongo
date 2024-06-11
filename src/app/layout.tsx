import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'CRUD MONGO NEXT',
    description: 'Learning NEXT!'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className='mx-auto max-w-3xl'>
                    <Navbar />
                    <div className='mt-8'>{children}</div>
                </div>
            </body>
        </html>
    )
}
