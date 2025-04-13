import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Header */}
      <header className="py-6 text-center bg-gradient-to-r from-red-500 to-orange-400 text-white shadow">
        <h1 className="text-4xl font-extrabold flex items-center justify-center gap-2">
          <span role="img" aria-label="icon">👤</span> 關於
        </h1>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 bg-gray-50 text-center">
        <div className="max-w-md w-full bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
          <Image
            src="/author.png"
            alt="作者 ICON"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-4 border-4 border-[var(--accent)]"
          />
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-2">重要資料及數據請用腦記住，不要依賴平台。</h2>
          <p className="text-[var(--foreground)] text-base leading-relaxed mb-6">
            <br />
            本平台為免費公開的知識學習工具，僅供個人學習之用。<br /><br />
            所有資料來自公開來源，力求準確，但不保證內容的完整性或最新性。使用者應自行判斷資料的適用性及正確性。<br /><br />
            平台提供之內容不構成任何專業建議或官方指引，不應被視為緊急應變或操作指南。如需專業協助，請聯絡相關機構。<br /><br />
            使用本平台即表示您同意自行承擔使用風險。如平台內容被認為涉及版權、錯誤或不當資訊，請立即聯絡本人，並將儘快處理修改或刪除。<br /><br />
            請合法使用本平台，並遵守當地法律及規範。<br />
            
          </p>
        </div>
      </main>

      {/* Footer */}
        <footer className="bg-black text-white text-sm w-full grid grid-cols-3">
          <Link href="/quiz">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">📘 問答</a>
          </Link>
          <Link href="/tools">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">🧰 工具</a>
          </Link>
          <Link href="/">
            <a className="text-center text-xl font-bold py-4 bg-[var(--foreground)] hover:bg-[var(--primary-dark)] transition">🔙 返回</a>
          </Link>
        </footer>
    </div>
  )
}

export default AboutPage
