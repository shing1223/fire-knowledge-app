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
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">🧠 消防問答（單題模式）</h1>
      <h2 className="text-lg">{question.question}</h2>
      <ul>
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
        <div className="space-x-4 pt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => window.location.reload()}
          >
            下一題
          </button>
          <Link href="/">
            <button className="px-4 py-2 bg-gray-500 text-white rounded">
              返回主頁
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default QuizPage
