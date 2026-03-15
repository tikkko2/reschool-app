import Image from "next/image";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <Image src={"/globe.svg"} alt="globe" width={100} height={100} />
            <Image src={"https://i.pinimg.com/736x/cb/fd/55/cbfd55ffbd0e2b086c3f77e4559852c5.jpg"} alt="globe" width={100} height={100} />
        </div>
    );
}