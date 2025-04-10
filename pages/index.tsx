import Link from 'next/link'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [notice, setNotice] = useState(null)

  useEffect(() => {
    fetch('/data/notice.json')
      .then(res => res.json())
      .then(setNotice)
      .catch(() => setNotice(null))
  }, [])

  const noticeColor = {
    info: 'border-blue-300 text-blue-700',
    warning: 'border-yellow-400 text-yellow-800',
    error: 'border-red-400 text-red-700',
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-red-50 to-orange-100 text-gray-900">
      {/* 頂部主題 */}
      <header className="bg-gradient-to-r from-red-700 to-orange-600 text-white py-8 px-4 shadow-md">
        <h1 className="text-5xl font-extrabold tracking-wide text-center">消防天書</h1>
        <p className="text-sm text-center italic opacity-90">非官方 · 一起學消防</p>
      </header>

      {/* 中間內容（訊息欄） */}
      <main className="flex-grow px-6 py-10 max-w-3xl mx-auto w-full">
        {notice && (
          <section
            className={\`bg-white/90 border shadow-md p-5 mb-8 rounded-xl \${noticeColor[notice.type] || 'border-gray-300 text-gray-700'}\`}
          >
            <p className="font-medium">📢 {notice.message}</p>
          </section>
        )}
        <div className="text-center text-gray-700 text-lg">
          <p>這裡是你學習消防知識的最佳起點，實用、互動、無壓力。</p>
        </div>
      </main>

      {/* 底部導覽 */}
      <footer className="bg-white border-t border-gray-200 py-6 px-4">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around gap-4">
          <Link href="/quiz">
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl w-full shadow">
              📘 問答頁面
            </button>
          </Link>
          <Link href="/tools">
            <button className="bg-rose-500 hover:bg-rose-600 transition text-white px-6 py-3 rounded-xl w-full shadow">
              🧰 工具查詢
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-gray-800 hover:bg-gray-900 transition text-white px-6 py-3 rounded-xl w-full shadow">
              👤 關於我
            </button>
          </Link>
        </div>
        <p className="mt-4 text-xs text-center text-gray-400">© 2025 消防天書 FireBook. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default HomePage