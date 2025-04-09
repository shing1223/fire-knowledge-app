import { useEffect, useState } from "react"

const ToolsPage = () => {
  const [tools, setTools] = useState([])

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

  return (
    <div className="p-6">
      <h1>🔥 消防工具知識</h1>
      {tools.map((tool, idx) => (
        <div key={idx} className="mb-4">
          <h2>{tool.name}</h2>
          <p>{tool.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ToolsPage
