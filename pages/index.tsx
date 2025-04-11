import Link from 'next/link'
import "../styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const HomePage = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">🔥 消防天書</h1>
        <p className="text-gray-600 mb-10">學習消防知識、工具用途與測驗平台</p>

        <div className="space-y-4">
          <Link href="/quiz">
            <button className="w-full bg-orange-500 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-orange-600 transition transform hover:scale-105">
              📘 進行消防問答（單題模式）
            </button>
          </Link>
          <Link href="/tools">
            <button className="w-full bg-blue-500 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-600 transition transform hover:scale-105">
              🧰 查看消防工具知識
            </button>
          </Link>
          <Link href="/about">
            <button className="w-full bg-purple-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-purple-700 transition transform hover:scale-105">
              👤 關於我
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
