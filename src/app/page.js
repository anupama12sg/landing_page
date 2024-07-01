import Image from "next/image";
import Twitter from "./assets/twitter.jpg"
import LinkedIn from "./assets/lin.png"
import GitHub from "./assets/github-mark-white.png"
import Medium from "./assets/medium.png"

export default function Home() {
    return (

        <div className="m-12">

            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22><text y=%2226%22 font-size=%2226%22>✨</text></svg>"></link>
            <p className="text-3xl underline underline-offset-8  "><center><span className="italic">Hello!</span> It is me, <span class="text-orange-400">Anu</span>.</center></p>
            <br></br>
            <p><center><span className="text-purple-400">Welcome </span> to this little corner of my world.</center></p>
            <br></br>
            <p><center>I am a <span class="text-orange-400">Software Developer</span>. <br></br> <br></br> I like teaching and my true passion lies in coding. <br></br> <br></br> I also like crafting technical articles and am an ardent reader, a wordsmith in the making. <br></br><br></br>My dream is to fill my days with the joy of coding, tackling real-life challenges via code and sharing my knowledge through written insights.</center></p>
            <br></br>
            <p><center>My interests span across <span class="text-orange-400">Software (Full-Stack) Development, Web2, Web3, petting cats</span> and my eclectic hobbies include exploring <span class="text-blue-400">International Relations</span>, indulging in culinary delights and expressing myself through the art of painting.</center></p>
            <div>
                <br></br>
                <br></br>
                <div class="flex justify-center">
                    <div class="flex flex-row ... gap-10 grid-cols-4">
                        <div><a href="https://x.com/Anu31415" target="_blank" rel="noopener noreferrer">
                            <Image
                                src={Twitter}
                                width={30}
                                height={30}
                                alt="Twitter icon"
                            /></a></div>
                        <div><a href="https://www.linkedin.com/in/anupama1208/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src={LinkedIn}
                                width={45}
                                height={45}
                                alt="LinkedIn icon"
                            />
                        </a></div>
                        <div><a href="https://github.com/anupama12sg" target="_blank" rel="noopener noreferrer">
                            <Image
                                src={GitHub}
                                width={30}
                                height={30}
                                alt="GitHub icon"
                            />
                        </a></div>
                        <div>
                            <a href="https://medium.com/@anupama12sg/the-start-of-something-something-great-b3865db86881" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={Medium}
                                    width={30}
                                    height={30}
                                    alt="Medium icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}