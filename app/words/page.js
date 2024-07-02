import words from "../../data/words.json";
import {FiArrowLeft} from "react-icons/fi";
import Link from "next/link";


const Words = () => {
    return (
        <div className="flex justify-center items-center p-6">
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center border-b pb-2.5">
                    <Link href="/">
                        <FiArrowLeft className="text-2xl" />
                    </Link>
                    <h1 className="text-2xl font-semibold">Words</h1>
                </div>

                {words?.map((word, index) => (
                    <div key={index} className="text-2xl">
                        {word['Japanese']} - {word['English']}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Words;