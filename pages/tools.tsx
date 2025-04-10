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
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">🔥 消防工具搜尋</h1>
      <input
        type="text"
        placeholder="請輸入工具名稱（中或英文）..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.length > 0 ? (
        <ul className="mb-6">
          {filtered.map((tool, idx) => (
            <li key={idx} className="mb-2">
              <h2 className="text-lg font-semibold">{tool.name}</h2>
              <p>{tool.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">請輸入工具名稱以搜尋相關內容。</p>
      )}
      <Link href="/">
        <button className="px-4 py-2 bg-gray-500 text-white rounded mt-4">
          返回主頁
        </button>
      </Link>
    </div>
  )
}

export default ToolsPage