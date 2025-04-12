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
        tool.name.toLowerCase().includes(search.trim().toLowerCase()) ||
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
      <header className="py-6 text-center bg-gradient-to-r from-red-500 to-orange-400 text-white shadow">
        <h1 className="text-4xl font-extrabold">🧰 消防工具搜尋</h1>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 bg-gray-50 text-center">
        <div className="max-w-xl w-full bg-white border border-gray-300 rounded-xl p-6 shadow-md text-left">
          <input
            type="text"
            placeholder="請輸入工具名稱（中或英文）..."
            className="border p-2 mb-4 w-full rounded text-base"
            inputMode="text"
            autoComplete="off"
            style={{ fontSize: '16px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {filtered.length > 0 ? (
            <ul className="mb-6 space-y-3">
              {filtered.map((tool, idx) => (
                <li key={idx} className="mb-4 border-b pb-3">
                  <h2 className="text-lg font-semibold text-[var(--primary)]">{tool.name}</h2>
                  {tool.description.split('\\n').map((line: string, i: number) => (
                    <p key={i} className="text-sm text-gray-700">{line}</p>
                  ))}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">請輸入工具名稱以搜尋相關內容。</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-sm w-full grid grid-cols-3">
        <Link href="/quiz">
          <a className="text-center text-xl font-bold py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] transition">📘 問答</a>
        </Link>
        <Link href="/">
          <a className="text-center text-xl font-bold py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] transition">🔙 返回</a>
        </Link>
        <Link href="/about">
          <a className="text-center text-xl font-bold py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] transition">👤 關於</a>
        </Link>
      </footer>
    </div>
  )
}

export default ToolsPage
