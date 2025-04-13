import { useEffect, useState } from 'react'
import Link from 'next/link'

type Question = {
  question: string
  options: string[]
  answer: number
}

const QuizPage = () => {
  const [question, setQuestion] = useState<Question | null>(null)
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    fetch('/data/quiz.json')
      .then(res => res.json())
      .then((data: Question[]) => {
        const randomIndex = Math.floor(Math.random() * data.length)
        setQuestion(data[randomIndex])
      })
  }, [])

  const handleSelect = (index: number) => {
    setSelected(index)
  }

  if (!question) return <div className="p-6">載入中...</div>

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Header */}
      <header className="py-6 text-center bg-white shadow">
        <h1 className="text-4xl font-extrabold text-red-600">🧠 消防問答</h1>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 bg-gray-50 text-center">
        <div className="max-w-xl w-full bg-white border border-gray-300 rounded-xl p-6 shadow-md text-left">
          <h2 className="text-lg font-bold mb-4">{question.question}</h2>
          <ul className="space-y-2">
            {question.options.map((opt, idx) => {
              const isCorrect = idx === question.answer
              const isSelected = selected === idx

              let textColor = ''
              let feedback = ''

              if (selected !== null) {
                if (isSelected && isCorrect) {
                  textColor = 'text-green-600'
                  feedback = '（正確） ✅'
                } else if (isSelected && !isCorrect) {
                  textColor = 'text-red-600'
                  feedback = '（錯誤） ❌'
                } else if (!isSelected && isCorrect) {
                  feedback = '✅'
                }
              }

              return (
                <li key={idx} className={`my-1 ${textColor}`}>
                  <label>
                    <input
                      type="radio"
                      name="answer"
                      value={idx}
                      disabled={selected !== null}
                      checked={selected === idx}
                      onChange={() => handleSelect(idx)}
                    />{' '}{opt} {feedback}
                  </label>
                </li>
              )
            })}
          </ul>

          {selected !== null && (
            <div className="space-x-4 pt-6 text-center">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => window.location.reload()}
              >
                <h4>下一題</h4>
              </button>
              <Link href="/">
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                  返回主頁
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
        <footer className="bg-black text-white text-sm w-full grid grid-cols-3">
          <Link href="/">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">🔙 返回</a>
          </Link>
          <Link href="/tools">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">🧰 工具</a>
          </Link>
          <Link href="/about">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">👤 關於</a>
          </Link>
        </footer>
    </div>
  )
}

export default QuizPage
