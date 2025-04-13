import Link from 'next/link'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [notices, setNotices] = useState<string[]>([])

  useEffect(() => {
    fetch('/data/notice.json')
      .then(res => res.json())
      .then(data => setNotices(data?.message || []))
      .catch(() => setNotices([]))
  }, [])

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Header */}
      <header className="py-6 text-center bg-white shadow">
        <h1 className="text-4xl font-extrabold text-red-600">🔥 天書</h1>
        <h6 className="text-4xl font-extrabold text-red-600">非官方、非專業·僅供專業人士使用</h6>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 bg-gray-50 text-center">
        <div className="max-w-xl w-full flex flex-col gap-6 items-center">
          <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm text-sm text-gray-700 text-left w-full">
            <h2 className="font-bold text-base mb-2">📢 最新公告</h2>
            {notices.length > 0 ? (
              <ul className="list-disc list-inside space-y-1">
                {notices.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 italic">目前沒有公告</p>
            )}
          </div>
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
          <Link href="/about">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">👤 關於</a>
          </Link>
        </footer>
    </div>
  )
}


export default HomePage
