import Image from "next/image";


export default function Home() {
    return (
        <div className="m-12">

            <p className="text-3xl underline underline-offset-8 "><span className="italic">Hello!</span> It's me, <span class="text-orange-400">Anu</span>.</p>
            <br></br>
            <p><span className="text-purple-400">Welcome </span> to this little corner of my world.</p>
            <br></br>
            <p>I'm a <span class="text-orange-400">Software Developer</span>. <br></br> <br></br> I like teaching and my true passion lies in coding. <br></br> <br></br> I also like crafting technical articles and am an ardent reader, a wordsmith in the making. <br></br><br></br>My dream is to fill my days with the joy of coding, tackling real-life challenges via code and sharing my knowledge through written insights.  </p>
            <br></br>
            <p>My interests span across <span class="text-orange-400">Software (Full-Stack) Development, Web2, Web3, petting cats</span> and my eclectic hobbies include exploring <span class="text-blue-400">International Relations</span>, indulging in culinary delights and expressing myself through the art of painting.</p>
            <div>
                <br></br>
                <ul>
                    <li>
                        <a href="https://x.com/Anu31415" target="_blank" rel="noopener noreferrer">
                            <u>Twitter</u>
                        </a>
                    </li>
                    <br></br>
                    <li>
                        <a href="https://www.linkedin.com/in/anupama1208/" target="_blank" rel="noopener noreferrer">
                           <u>LinkedIn</u> 
                        </a>
                    </li>
                    <br></br>
                    <li>
                        <a href="https://github.com/anupama12sg" target="_blank" rel="noopener noreferrer">
                           <u>GitHub</u> 
                        </a>
                    </li>
                    <br></br>
                    <li>
                        <a href="https://medium.com/@anupama12sg/the-start-of-something-something-great-b3865db86881" target="_blank" rel="noopener noreferrer">
                           <u>Blog</u> 
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
