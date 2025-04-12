import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Header */}
      <header className="py-6 text-center bg-gradient-to-r from-red-500 to-orange-400 text-white shadow">
        <h1 className="text-4xl font-extrabold flex items-center justify-center gap-2">
          <span role="img" aria-label="icon">👤</span> 關於我
        </h1>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 bg-gray-50 text-center">
        <div className="max-w-md w-full bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
          <Image
            src="/author.png"
            alt="作者 ICON"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-4 border-4 border-[var(--accent)]"
          />
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-2">消防學習平台開發者</h2>
          <p className="text-[var(--foreground)] text-base leading-relaxed mb-6">
            嗨！我是這個平台的開發者，希望讓防火教育變得簡單、有趣、易於接觸，
            提升社會對消防安全的認識與應變能力。
          </p>
        </div>
      </main>

      {/* Footer */}
        <footer className="bg-black text-white text-sm w-full grid grid-cols-3">
          <Link href="/quiz">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">📘 問答</a>
          </Link>
          <Link href="/tools">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">🧰 工具</a>
          </Link>
          <Link href="/">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">🔙 返回</a>
          </Link>
        </footer>
    </div>
  )
}

export default AboutPage
