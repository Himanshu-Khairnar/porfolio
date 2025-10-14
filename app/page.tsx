"use client";
import { useState, useEffect, useRef, FC, FormEvent } from "react";
import * as info from "@/Constant/Constant";
import { useRouter } from "next/navigation";

interface HistoryItem {
  cmd: string;
  res: string | string[];
}

interface Commands {
  [key: string]: string | string[];
}

const commands: Commands = {
  help: info.help,
  aboutme: info.aboutme,
  experience: info.experience,
  education: info.education,
  skills: info.skills,
  contact: info.social,
  projects: info.projects,
  banner: info.banner,
  github: info.github,
  resume: info.resume,
  clear: "clear",
  normal: "Navigating to portfolio...",
};

const App: FC = () => {
  const router = useRouter();

  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { cmd: "himanshu@portfolio:~$ <br>", res: commands.banner },
  ]);
  const [isExiting, setIsExiting] = useState<boolean>(false); 
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const command = input.toLowerCase().trim();

    if (!command) {
      setHistory([...history, { cmd: "himanshu@portfolio:~$ " + input, res: "" }]);
      setInput("");
      return;
    }

    if (command === "normal") {
      setHistory([
        ...history,
        { cmd: "himanshu@portfolio:~$ " + input, res: commands.portfolio },
      ]);
      setInput("");
      setIsExiting(true); 
      setTimeout(() => {
        router.push("/normal");
      }, 500); 
      return; 
    }

    const output = commands[command] || `Command not found: ${input}. Try 'help'.`;

    if (command === "clear") {
      setHistory([{ cmd: "himanshu@portfolio:~$ ", res: commands["banner"] }]);
    } else {
      setHistory([
        ...history,
        { cmd: "himanshu@portfolio:~$ " + input, res: output },
      ]);
    }

    setInput("");
  };

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="circleButton">
        <span className="roundCircle circleColorRed "></span>
        <span className="roundCircle circleColorYellow"></span>
        <span className="roundCircle circleColorGreen"></span>
      </div>
      <div>
        <div>
          {history.map((h, i) => (
            <div key={i}>
              <p
                className="textColor"
                dangerouslySetInnerHTML={{ __html: h.cmd }}
              ></p>
              {Array.isArray(h.res) ? (
                h.res.map((line, idx) => (
                  <div key={idx} dangerouslySetInnerHTML={{ __html: line }}></div>
                ))
              ) : (
                <div dangerouslySetInnerHTML={{ __html: h.res }}></div>
              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="form">
          <span className="prompt">{"himanshu@portfolio:~$  "}</span>
          <div className="form-flex">
            <div className="input-wrapper">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ref={inputRef}
                className="input"
                autoFocus
                style={{ width: `${input.length + 1}ch` }}
              />
              <span className="cursor"></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;