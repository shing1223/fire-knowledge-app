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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center bg-gray-50">
      <div className="max-w-xl w-full flex flex-col gap-8 items-center">
        <h1 className="text-5xl font-extrabold text-red-600 leading-tight">🔥 消防天書</h1>

        {/* 公告欄 */}
        <div className="w-full bg-white border border-gray-300 rounded-lg p-4 shadow-sm text-sm text-gray-700 text-left">
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

        {/* 功能選單 */}
        <div className="w-full space-y-4">
          <Link href="/quiz">
            <button className="w-full bg-orange-500 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-orange-600 transition transform hover:scale-105">
              📘 進行消防問答（單題模式）
            </button>
          </Link>
          <Link href="/tools">
            <button className="w-full bg-blue-500 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-600 transition transform hover:scale-105">
              🧰 查看消防工具知識
            </button>
          </Link>
          <Link href="/about">
            <button className="w-full bg-purple-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-purple-700 transition transform hover:scale-105">
              👤 關於我
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
