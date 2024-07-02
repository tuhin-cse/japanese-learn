import Link from "next/link";


const Home = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="flex flex-col gap-4">
                <Link
                    href="/words"
                    className="bg-blue-500 w-full text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Words</Link>
                <Link href="/sentences" className="bg-blue-500  w-full text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sentences
                </Link>

            </div>
        </div>
    )
}

export default Home;