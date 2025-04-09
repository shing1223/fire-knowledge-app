import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-6 text-red-600">🔥 消防知識學習平台</h1>
      <div className="space-y-4">
        <Link href="/quiz">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-orange-600">
            進行消防問答（單題模式）
          </button>
        </Link>
        <Link href="/tools">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-600">
            查看消防工具知識
          </button>
        </Link>
        <Link href="/about">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-purple-700">
            關於我
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage