import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1 className="text-4xl font-extrabold text-red-600">👤 關於我1</h1>
      </header>

      {/* Main */}
      <main>
        <div>
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
            <footer>
        <div>
          <Link href="/quiz" legacyBehavior>
            <a className="block text-white">📘 問答</a>
          </Link>
          <Link href="/tools" legacyBehavior>
            <a>🧰 工具</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a>🔙 返回</a>
          </Link>
        </div>
            </footer>
    </div>
  )
}

export default AboutPage
