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
            <div>
        <div>
          <Link href="/quiz" legacyBehavior>
            <a className="bg-[var(--primary-light)] hover:bg-[var(--primary-dark)] text-white py-3 font-semibold block rounded border border-red-400">📘 問答</a>
          </Link>
          <Link href="/tools" legacyBehavior>
            <a className="bg-[var(--primary-light)] hover:bg-[var(--primary-dark)] text-white py-3 font-semibold block rounded border border-red-400">🧰 工具</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="bg-[var(--primary-light)] hover:bg-[var(--primary-dark)] text-white py-3 font-semibold block rounded border border-red-400">🔙 返回</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
