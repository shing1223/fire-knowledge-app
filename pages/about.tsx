import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] p-8 flex flex-col items-center justify-center text-center">
      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg rounded-xl p-6 max-w-md w-full">
        <Image
          src="/author.png"
          alt="作者 ICON"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4 border-4 border-[var(--accent)]"
        />
        <h1 className="text-2xl font-bold text-[var(--primary)] mb-2">👨‍🚒 關於我</h1>
        <p className="text-[var(--foreground)] text-base leading-relaxed mb-6">
          嗨！我是這個消防學習平台的開發者。我的目標是讓防火教育變得簡單、有趣、易於接觸，提升社會對消防安全的意識。
          希望你在這裡學到一些實用的知識！
        </p>
        <Link href="/">
          <button className="px-5 py-2 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 transition">
            返回主頁
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AboutPage
