// src/app/page.tsx
"use client";
import { useState, useEffect, useRef, FC, FormEvent } from "react";
import * as info from "@/lib/constants"; // Adjust path if needed
import { useRouter } from "next/navigation";
// Make sure you are importing your global CSS file in your layout.tsx or here
// import "./globals.css";

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
  achievements: info.achievements,
  clear: "clear",
};

const App: FC = () => {
  const router = useRouter();

  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { cmd: "himanshu@portfolio:~$ <br>", res: commands.banner },
  ]);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const command = input.toLowerCase().trim();

    if (!command) {
      setHistory([
        ...history,
        { cmd: "himanshu@portfolio:~$ " + input, res: "" },
      ]);
      setInput("");
      return;
    }

    const output =
      commands[command] || `Command not found: ${input}. Try 'help'.`;

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
    <div className={`wrapper ${isExiting ? "opacity-0" : "opacity-100"}`}>
      <div className="circleButton">
        <span className="roundCircle circleColorRed "></span>
        <span className="roundCircle circleColorYellow"></span>
        <span className="roundCircle circleColorGreen"></span>
      </div>
      <div>
        {" "}
        {/* Main content container */}
        {history.map((h, i) => (
          // ADDED SPACING TO THIS DIV
          <div key={i} style={{ marginBottom: "0.5rem" }}>
            <p
              className="textColor"
              style={{ marginBottom: "0.25rem" }} // This adds space between cmd and output
              dangerouslySetInnerHTML={{ __html: h.cmd }}
            ></p>
            {Array.isArray(h.res) ? (
              h.res.map((line, idx) => (
                <div
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: line }}
                  className="output-pre"
                ></div>
              ))
            ) : (
              <div
                dangerouslySetInnerHTML={{ __html: h.res }}
                className="output-pre"
              ></div>
            )}
          </div>
        ))}
        <div ref={scrollRef}></div>
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
