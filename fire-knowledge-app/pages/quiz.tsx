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
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const currentQuestion = quizData[current]

  const handleSubmit = () => {
    if (selected === currentQuestion.answer) {
      setScore(score + 1)
    }
    if (current + 1 < quizData.length) {
      setCurrent(current + 1)
      setSelected(null)
    } else {
      setShowResult(true)
    }
  }

  if (showResult) {
    return (
      <div className="p-6">
        <h1>✅ 完成測驗</h1>
        <p>你的得分：{score} / {quizData.length}</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1>🧠 消防問答</h1>
      <h2>{currentQuestion.question}</h2>
      <ul className="mb-4">
        {currentQuestion.options.map((opt, idx) => (
          <li key={idx}>
            <label>
              <input
                type="radio"
                name="answer"
                value={idx}
                checked={selected === idx}
                onChange={() => setSelected(idx)}
              />{' '}{opt}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={selected === null}>
        提交
      </button>
    </div>
  )
}

export default QuizPage
