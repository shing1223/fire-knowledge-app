import { useState } from 'react'

const quizData = [
  {
    question: '火警時應該第一時間做什麼？',
    options: ['打開窗戶', '使用電梯逃生', '通知消防', '躲進廁所'],
    answer: 2,
  },
  {
    question: '下列哪一項是滅火器的正確使用步驟？',
    options: ['拔插梢，瞄準火源，按壓噴射', '直接對人噴射', '扔進火堆', '搖晃後使用'],
    answer: 0,
  },
]

const QuizPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.length).fill(null))

  const handleSelect = (questionIndex, optionIndex) => {
    const updated = [...selectedAnswers]
    updated[questionIndex] = optionIndex
    setSelectedAnswers(updated)
  }

  return (
    <div className="p-6">
      <h1>🧠 消防問答（即時顯示答案）</h1>
      {quizData.map((q, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="font-semibold">{idx + 1}. {q.question}</h2>
          <ul>
            {q.options.map((opt, optIdx) => {
              const selected = selectedAnswers[idx]
              const isCorrect = q.answer === optIdx
              const isSelected = selected === optIdx
              let color = ''
              if (selected !== null) {
                if (isSelected && isCorrect) color = 'text-green-600'
                else if (isSelected && !isCorrect) color = 'text-red-600'
                else if (isCorrect) color = 'text-green-600'
              }
              return (
                <li key={optIdx} className={color}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${idx}`}
                      value={optIdx}
                      checked={isSelected}
                      onChange={() => handleSelect(idx, optIdx)}
                    />{' '}{opt}
                  </label>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default QuizPage
