import Image from "next/image";

export default function Home() {
  return (
    <div className="m-12">

      <p className="text-3xl underline underline-offset-8"><span className="italic">Hello!</span> It's me, <span class="text-orange-400">Anu</span>.</p>
      <br></br>
      <p><span className="text-purple-400">Welcome </span> to this little corner of my world.</p>
      <br></br>
      <p>I'm a <span class="text-blue-400">Software Developer</span>. I like teaching and my true passion lies in coding. I also like crafting technical articles and am an ardent reader, a wordsmith in the making. My dream is to fill my days with the joy of coding, tackling real-life challenges via code and sharing my knowledge through written insights.  </p>
      <br></br>
      <p>My interests span across Software Development, Web2, Web3, Full-Stack Development, and my eclectic hobbies include exploring International Relations, indulging in culinary delights and expressing myself through the art of painting.</p>
      <div>
        <br></br>
            <ul>
                <li>
                    <a href="https://x.com/Anu31415" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/anupama1208/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/anupama12sg" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/@anupama12sg/the-start-of-something-something-great-b3865db86881" target="_blank" rel="noopener noreferrer">
                        Blog
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
}
