
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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* 主標題區塊 */}
      <div className="bg-[#ff6666] text-white py-6 px-4 text-center shadow">
        <h1 className="text-3xl font-bold">消防天書</h1>
        <p className="text-sm mt-1">（非官方、非專業、僅供專業人士使用）</p>
      </div>

      {/* 訊息清單區塊 */}
      <div className="max-w-xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-2 border-b border-gray-300 pb-2">訊息</h2>
        <ul className="space-y-2">
          {notice && Array.isArray(notice.message) && notice.message.map((msg, idx) => (
            <li key={idx} className="text-base text-gray-700">{msg}</li>
          ))}
        </ul>
      </div>

      {/* 功能卡片區塊（改為一排三格） */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
        <Link href="/quiz">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer">
            <h3 className="text-lg font-semibold text-maroon">🔥 進行消防問答</h3>
            <p className="text-sm text-gray-500 mt-1">透過互動問答增進知識</p>
          </div>
        </Link>
        <Link href="/tools">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer">
            <h3 className="text-lg font-semibold text-maroon">🧰 消防工具知識</h3>
            <p className="text-sm text-gray-500 mt-1">快速查閱常見工具用途</p>
          </div>
        </Link>
        <Link href="/about">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer">
            <h3 className="text-lg font-semibold text-maroon">👤 關於我</h3>
            <p className="text-sm text-gray-500 mt-1">創作理念與作者介紹</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
