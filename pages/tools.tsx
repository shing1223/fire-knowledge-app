import { useEffect, useState } from 'react'
import Link from 'next/link'

const ToolsPage = () => {
  const [tools, setTools] = useState([])
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    fetch('/data/tools.json')
      .then(res => res.json())
      .then((data) => {
        setTools(data)
        setFiltered([])
      })
  }, [])

  useEffect(() => {
    if (search.trim() === '') {
      setFiltered([])
    } else {
      const result = tools.filter(tool =>
        tool.keywords.some((kw: string) =>
          kw.toLowerCase().includes(search.trim().toLowerCase())
        )
      )
      setFiltered(result)
    }
  }, [search, tools])

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Header */}
      <header className="py-6 text-center bg-white shadow">
        <h1 className="text-4xl font-extrabold text-red-600">🧰 消防工具搜尋</h1>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 bg-gray-50 text-center">
        <div className="max-w-xl w-full bg-white border border-gray-300 rounded-xl p-6 shadow-md text-left">
          <input
            type="text"
            placeholder="請輸入工具名稱（中或英文）..."
            className="border p-2 mb-4 w-full rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {filtered.length > 0 ? (
            <ul className="mb-6 space-y-3">
              {filtered.map((tool, idx) => (
                <li key={idx} className="mb-2">
                  <h2 className="text-lg font-semibold">{tool.name}</h2>
                  <p className="text-sm text-gray-700">{tool.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">請輸入工具名稱以搜尋相關內容。</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner border-t text-sm py-4 w-full">
        <div className="grid grid-cols-3 w-full text-center">
          <Link href="/quiz">
            <button className="w-full bg-orange-500 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-orange-600 transition transform hover:scale-105">
              📘 進行消防問答
            </button>
          </Link>
          <Link href="/tools">
            <button className="w-full bg-blue-500 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-600 transition transform hover:scale-105">
              🧰 查看消防工具
            </button>
          </Link>
          <Link href="/about">
            <button className="w-full bg-purple-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-purple-700 transition transform hover:scale-105">
              👤 關於我
            </button>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default ToolsPage
