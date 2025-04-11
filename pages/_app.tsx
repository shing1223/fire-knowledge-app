import "../styles/globals.css" // ✅ 全域 CSS 放在這裡

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
