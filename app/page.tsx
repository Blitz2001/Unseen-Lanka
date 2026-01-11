import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Unseen Lanka</h1>
      <p className="text-xl mb-8">Curated journeys beyond the obvious.</p>
      <Link 
        href="/plan-your-trip" 
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        Plan Your Journey
      </Link>
    </main>
  );
}
