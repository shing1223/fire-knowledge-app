import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-8 flex flex-col items-center text-center">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-md w-full">
        <Image
          src="/author.png"
          alt="作者 ICON"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4 border-4 border-pink-300"
        />
        <h1 className="text-2xl font-bold text-pink-600 mb-2">👨‍🚒 關於我</h1>
        <p className="text-gray-700 mb-4">
          嗨！我是這個消防學習平台的開發者。我的目標是讓防火教育變得簡單、有趣、易於接觸，提升社會對消防安全的意識。希望你在這裡學到一些實用的知識！
        </p>
        <Link href="/">
          <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            返回主頁
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AboutPage