import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🔥 消防知識學習平台</h1>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <Link href="/quiz" className="text-blue-600 underline">
            進行消防問答（單題模式）
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
