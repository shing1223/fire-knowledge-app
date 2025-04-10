
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const HomePage = () => {
  const [notice, setNotice] = useState(null)
  const router = useRouter()
  const path = router.pathname

  useEffect(() => {
    fetch('/data/notice.json')
      .then(res => res.json())
      .then(setNotice)
      .catch(() => setNotice(null))
  }, [])

  const navClass = (route: string) => `py-3 transition-all duration-200 hover-raise hover:bg-gray-100 ${
    path === route ? 'bg-gray-100 font-bold' : ''}`

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pb-20 relative">
      <div className="bg-[#ff6666] text-white py-6 px-4 text-center shadow">
        <h1 className="text-3xl font-bold">消防天書</h1>
        <p className="text-sm mt-1">（非官方、非專業、僅供專業人士使用）</p>
      </div>

      <div className="max-w-xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-2 border-b border-gray-300 pb-2">訊息</h2>
        <ul className="space-y-2">
          {notice && Array.isArray(notice.message) && notice.message.map((msg, idx) => (
            <li key={idx} className="text-base text-gray-700">{msg}</li>
          ))}
        </ul>
      </div>

      <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow z-50">
        <div className="grid grid-cols-3 divide-x text-center text-sm">
          <Link href="/quiz">
            <div className={navClass('/quiz')}>
              <p className="text-maroon">🔥 問答</p>
            </div>
          </Link>
          <Link href="/tools">
            <div className={navClass('/tools')}>
              <p className="text-maroon">🧰 工具</p>
            </div>
          </Link>
          <Link href="/about">
            <div className={navClass('/about')}>
              <p className="text-maroon">👤 關於</p>
            </div>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
