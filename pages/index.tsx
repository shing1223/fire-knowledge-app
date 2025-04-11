import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HomePage() {
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
        <h1 className="text-4xl font-extrabold text-red-600">🔥 消防天書</h1>
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
      <footer className="bg-white shadow-inner border-t text-sm py-4">
        <div className="flex justify-around max-w-md mx-auto">
          <Link href="/quiz" className="text-orange-600 hover:underline">📘 問答</Link>
          <Link href="/tools" className="text-blue-600 hover:underline">🧰 工具</Link>
          <Link href="/about" className="text-purple-600 hover:underline">👤 關於</Link>
        </div>
      </footer>
    </div>
  )
}
