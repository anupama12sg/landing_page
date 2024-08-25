"use client";

import Image from "next/image";
import Twitter from "./assets/twitter.jpg";
import LinkedIn from "./assets/lin.png";
import GitHub from "./assets/github.png";
import Medium from "./assets/medium.png";
import Vine from "./assets/vine.png";
import Bright from "./assets/brightness.png";
import Dark from "./assets/night-mode.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    // Read theme from local storage on component mount
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === '') {
      setTheme("Dark");
      localStorage.setItem("theme", "Dark");
    } else {
      setTheme('');
      localStorage.setItem("theme", "");
    }
  };

  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const typeWriter = async () => {
      setIsTyping(true); // Start displaying the cursor
      const introText = "Hello! It is me, Anu.";
      for (let i = 0; i < introText.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 175)); // Adjust typing speed here
        setText(introText.substring(0, i + 1));
      }
      setIsTyping(false); // Stop displaying the cursor (optional)
    };

    typeWriter(); // Call the typing function
  }, []); // Run the effect only once on component mount

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme == "" ? "content-body" : "dark content-body-dark"}`}>
      <div>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22><text y=%2226%22 font-size=%2226%22>✨</text></svg>"
        />
      </div>

      <Image
        className="absolute top-6 right-10"
        onClick={toggleTheme}
        src={theme === '' ? Dark : Bright}
        width={40}
        height={40}
        alt={theme === '' ? "Dark Mode" : "Light Mode"}
      />
      <br></br>
      <nav className="flex justify-center space-x-10 text-lg font-semibold">
        <a href="http://localhost:3000/milestones" className="hover:underline">Milestones</a>
        <a href="http://localhost:3000/projects" className="hover:underline">Projects</a>
        
      </nav>

      <div className="text-container">
        <br></br>
        <p className="text-3xl underline underline-offset-8">
          <center><span className="italic">{isTyping ? '' : ''}</span> {text}</center>
        </p>

        <br></br>
        <p><center><span className="text-fuchsia-700 dark:text-purple-400">Welcome</span> to this little corner of my world.</center></p>
        <br />
        <p><center>I am a <span className="text-fuchsia-700 dark:text-green-400">Software Developer</span>. <br /><br />
          I like teaching and my true passion lies in coding. <br /><br />
          I also like crafting technical articles and am an ardent reader, a wordsmith in the making. <br /><br />
          My dream is to fill my days with the joy of coding, tackling real-life challenges via code and sharing my knowledge through written insights.</center></p>
        <br />
        <p><center>My interests span across <span className="text-fuchsia-700 dark:text-green-400">Software (Full-Stack) Development, Web2, Web3, petting cats</span> and my eclectic hobbies include exploring <span className="text-fuchsia-700 dark:text-green-400">International Relations</span>, indulging in culinary delights and expressing myself through the art of painting.</center></p>

        <div>
          <br />
          <center>
            <Image
              src={Vine}
              width={150}
              height={500}
              alt="Vine icon"
            />
          </center>
          <br />
          <div className="flex justify-center">
            <div className="flex flex-row gap-10 grid-cols-4">
              <div>
                <a href="https://x.com/Anu31415" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={Twitter}
                    width={50}
                    height={50}
                    alt="Twitter icon"
                  />
                </a>
              </div>

              <div>
                <a href="https://www.linkedin.com/in/anupama1208/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={LinkedIn}
                    width={70}
                    height={70}
                    alt="LinkedIn icon"
                  />
                </a>
              </div>

              <div>
                <a href="https://github.com/anupama12sg" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={GitHub}
                    width={50}
                    height={50}
                    alt="GitHub icon"
                  />
                </a>
              </div>

              <div>
                <a href="https://medium.com/@anupama12sg/the-start-of-something-something-great-b3865db86881" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={Medium}
                    width={50}
                    height={50}
                    alt="Medium icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <p><center><span className="text-green-250 italic">© 2024 Anupama Singh</span></center></p>
      </div>
    </div>
  );
}
