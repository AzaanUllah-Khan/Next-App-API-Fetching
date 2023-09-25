import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-center mt-10">Hello World !</h1>
      <Link href={'/Product'}>
        <div className="flex justify-center">
        <button className="mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Fetch Api</button>
        </div>
      </Link>
    </>
  )
}
