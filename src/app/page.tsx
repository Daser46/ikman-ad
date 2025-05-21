import Image from "next/image";
import background from "../app/image/backgroundimg.png";
import word from "../app/image/word.png";
import button from "../app/image/button.png";


export default function Home() {
  return (
    <div className="w-[300px] h-[250px] relative flex items-center justify-center ">
      <Image
        src={background}
        alt="background"
        fill
        className="object-cover "
      />
      <Image
        src={word}
        alt="word"
        width={150}
        height={70}
        className="absolute bottom-3 left-2 animate-bounce hover:scale-110 transition-all duration-300"
      />
      <Image
        src={button}
        alt="button"
        width={100}
        height={100}
        className="absolute bottom-2 right-3 animate-pulse hover:brightness-110 transition-all duration-50"
      />
    </div>
  );
}