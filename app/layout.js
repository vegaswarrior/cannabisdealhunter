import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cannabis Deal Hunter',
  description: 'The best Marijuana Deals, and delivery service for Las Vegas NV',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
