import { useEffect, useState } from "react"

const ToolsPage = () => {
  const [tools, setTools] = useState([])
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    const loadTools = async () => {
      try {
        const res = await fetch('/data/tools.json')
        if (!res.ok) throw new Error('Network response was not ok')
        const data = await res.json()
        setTools(data)
      } catch (error) {
        console.error('無法載入工具資料：', error)
      }
    }
    loadTools()
  }, [])

  useEffect(() => {
    const result = tools.filter(tool =>
      tool.name.includes(search.trim())
    )
    setFiltered(result)
  }, [search, tools])

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">🔥 搜尋消防工具</h1>
      <input
        type="text"
        placeholder="輸入工具名稱..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.map((tool, idx) => (
        <div key={idx} className="mb-4">
          <h2 className="text-lg font-semibold">{tool.name}</h2>
          <p>{tool.description}</p>
        </div>
      ))}
      {search && filtered.length === 0 && (
        <p className="text-red-600">未找到相關工具。</p>
      )}
    </div>
  )
}

export default ToolsPage
