
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
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-900">
      {/* 主標題區塊 */}
      <header className="bg-rose-400 text-white text-center py-6">
        <h1 className="text-4xl font-extrabold">消防天書</h1>
        <p className="text-sm mt-1">（非官方、非專業、僅供專業人士使用）</p>
      </header>

      {/* 訊息區塊 */}
      <main className="flex-grow px-6 py-8 max-w-xl mx-auto w-full">
        <h2 className="text-xl font-bold mb-2">訊息</h2>
        {notice && (
          <div className={`space-y-2 text-base ${noticeColor[notice.type] || 'text-black'}`}>
            {Array.isArray(notice.message)
              ? notice.message.map((msg, idx) => <p key={idx}>{msg}</p>)
              : <p>{notice.message}</p>
            }
          </div>
        )}
      </main>

      {/* 底部導航 */}
      <footer className="bg-maroon text-white py-4 px-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
        <Link href="/quiz">
          <div className="bg-white text-maroon py-3 rounded shadow font-semibold">進行消防問答</div>
        </Link>
        <Link href="/tools">
          <div className="bg-white text-maroon py-3 rounded shadow font-semibold">查看<br />消防工具知識</div>
        </Link>
        <Link href="/about">
          <div className="bg-white text-maroon py-3 rounded shadow font-semibold">關於我</div>
        </Link>
      </footer>
    </div>
  )
}

export default HomePage
