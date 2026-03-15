import Image from "next/image";

export default function Grid() {
    return (
        <div className="bg-gray-300 min-h-screen flex justify-center items-center">
            <div className="w-[35vw] bg-white rounded-xl">
                <div className="relative bg-blue-600 h-40 overflow-visible rounded-t-xl">
                    <Image className="rounded-full absolute -bottom-8 left-1/2 -translate-x-1/2 border-4 border-blue-200" src={"https://img.freepik.com/free-vector/fashionable-avatar-girl_24877-81624.jpg?semt=ais_rp_progressive&w=740&q=80"} width={150} height={150} alt="image" />
                </div>
                <div className="text-center py-12">
                    <h1>Coding Lab</h1>
                    <p>Youtuber</p>
                </div>
            </div>
        </div>
    );
}