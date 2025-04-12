import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-[var(--header-bg)] text-white text-center font-bold shadow px-4 py-2 sm:py-3 md:py-4 text-sm sm:text-lg md:text-xl">
          🧰 消防工具搜尋
        </header>

        {/* Main */}
        <main className="flex-1 overflow-y-auto px-4 py-6 bg-gray-50 text-center">
          <div className="max-w-4xl w-full">
            <input
              type="text"
              placeholder="請輸入工具名稱（中或英文）..."
              className="border p-2 mb-6 w-full rounded text-base"
              inputMode="text"
              autoComplete="off"
              style={{ fontSize: '16px' }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((tool, idx) => (
                  <div key={idx} className="bg-white border border-gray-300 rounded-xl p-4 shadow hover:shadow-md transition text-left">
                    {tool.image && (
                      <div className="mb-3">
                        <Image
                          src={tool.image}
                          alt={tool.name}
                          width={600}
                          height={400}
                          className="rounded object-cover w-full h-48"
                        />
                      </div>
                    )}
                    <h2 className="text-lg font-bold text-[var(--primary)] mb-2">{tool.name}</h2>
                    <div className="space-y-1">
                      {tool.description.split('\n').map((line, i) => (
                        <p key={i} className="text-sm text-gray-700 leading-snug">• {line}</p>
                      ))}
                    </div>
                    {tool.link && (
                      <div className="mt-3">
                        <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 underline">
                          🔗 查看更多
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">請輸入工具名稱以搜尋相關內容。</p>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white text-sm w-full grid grid-cols-3">
          <Link href="/quiz">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">📘 問答</a>
          </Link>
          <Link href="/">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">🔙 返回</a>
          </Link>
          <Link href="/about">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">👤 關於</a>
          </Link>
        </footer>
      </div>
    </>
  )
}

export default ToolsPage
