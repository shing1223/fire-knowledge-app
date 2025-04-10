
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-maroon text-white py-3 px-6 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold tracking-wide">消防天書</Link>
        <div className="space-x-4 text-sm">
          <Link href="/quiz" className="hover:underline">問答</Link>
          <Link href="/tools" className="hover:underline">工具</Link>
          <Link href="/about" className="hover:underline">關於</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
