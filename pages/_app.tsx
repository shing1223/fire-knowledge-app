import "../styles/globals.css" // ✅ 全域 CSS 放在這裡
import { Noto_Sans_TC } from 'next/font/google'

const noto = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
