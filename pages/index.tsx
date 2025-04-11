<div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center bg-gray-50">
  <div className="max-w-xl w-full flex flex-col gap-8 items-center">
    <h1 className="text-5xl font-extrabold text-red-600 leading-tight">🔥 消防天書</h1>
    <p className="text-gray-600 text-lg leading-relaxed">學習消防知識、工具用途與測驗平台</p>

    <div className="w-full space-y-4">
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
