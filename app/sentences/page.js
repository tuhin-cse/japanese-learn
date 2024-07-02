import Link from "next/link";
import {FiArrowLeft} from "react-icons/fi";
import sentences from '../../data/sentences.json'

const Sentences = () => {
    return (
        <div className="flex justify-center items-center py-4">
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center border-b pb-2.5">
                    <Link href="/">
                        <FiArrowLeft className="text-2xl"/>
                    </Link>
                    <h1 className="text-2xl font-semibold">Sentences</h1>
                </div>

                {sentences?.map((word, index) => (
                    <div key={index} className="text-2xl">
                        {word['Japanese']} - {word['English']}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sentences;