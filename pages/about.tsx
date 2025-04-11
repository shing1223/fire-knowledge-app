import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Header */}
      <header className="py-6 text-center bg-white shadow">
        <h1 className="text-4xl font-extrabold text-red-600">👤 關於我</h1>
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
      <footer className="bg-white shadow-inner border-t text-sm py-4 w-full">
        <div className="grid grid-cols-3 w-full text-center gap-px">
          <Link href="/quiz" legacyBehavior>
            <a className="bg-[var(--primary-light)] hover:bg-[var(--primary-dark)] text-white py-3 font-semibold block">📘 問答</a>
          </Link>
          <Link href="/tools" legacyBehavior>
            <a className="bg-[var(--primary-light)] hover:bg-[var(--primary-dark)] text-white py-3 font-semibold block">🧰 工具</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="bg-[var(--primary-light)] hover:bg-[var(--primary-dark)] text-white py-3 font-semibold block">🔙 返回</a>
          </Link>
        </div>
      </footer>

    </div>
  )
}

export default AboutPage
