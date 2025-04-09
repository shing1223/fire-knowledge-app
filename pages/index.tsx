import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🔥 消防知識學習平台</h1>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <Link href="/tools" className="text-blue-600 underline">
            查看消防工具知識
          </Link>
        </li>
        <li>
          <Link href="/quiz" className="text-blue-600 underline">
            進行消防問答測驗
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
