import React from "react";
import FaultyTerminal from "@/components/FaultyTerminal";
import Shuffle from "@/components/Shuffle";

export function AboutSection() {
  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Terminal Effect */}
      <div className="absolute inset-0 opacity-60">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#05ce91"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12 max-w-5xl drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
          👋 <Shuffle
            text="Hey, I'm Himanshu"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
        </h2>

        {/* Introduction */}
        <p className="text-lg text-gray-200 leading-relaxed mb-12">
          I'm a{" "}
          <span className="text-[#05ce91] font-semibold inline-block hover:scale-110 hover:text-[#06ffad] transition-all duration-300 cursor-default">
            Full Stack Developer
          </span>{" "}
          and{" "}
          <span className="text-[#b1ffff] font-semibold inline-block hover:scale-110 hover:text-white transition-all duration-300 cursor-default">
            AI/ML Enthusiast
          </span>{" "}
          passionate about building fast, interactive, and scalable web
          experiences that combine creativity with technical precision.
        </p>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-10">
          {/* Frontend */}
          <div className="group bg-black/40 p-6 rounded-2xl border border-[#05ce91]/30 hover:border-[#05ce91] hover:shadow-[0_0_30px_rgba(5,206,145,0.3)] hover:bg-black/60 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <h3 className="text-xl font-semibold text-[#05ce91] mb-4 group-hover:text-[#06ffad] transition-colors duration-300">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → React.js
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → Next.js
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → Tailwind CSS
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → JavaScript (ES6+)
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → HTML5 / CSS3
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="group bg-black/40 p-6 rounded-2xl border border-[#05ce91]/30 hover:border-[#05ce91] hover:shadow-[0_0_30px_rgba(5,206,145,0.3)] hover:bg-black/60 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <h3 className="text-xl font-semibold text-[#05ce91] mb-4 group-hover:text-[#06ffad] transition-colors duration-300">
              Backend
            </h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → Node.js
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → Express.js
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → REST APIs
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → Authentication (JWT)
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → Appwrite / Firebase
              </li>
            </ul>
          </div>

          {/* Full Stack */}
          <div className="group bg-black/40 p-6 rounded-2xl border border-[#05ce91]/30 hover:border-[#05ce91] hover:shadow-[0_0_30px_rgba(5,206,145,0.3)] hover:bg-black/60 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <h3 className="text-xl font-semibold text-[#05ce91] mb-4 group-hover:text-[#06ffad] transition-colors duration-300">
              Full Stack
            </h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → MERN Stack
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → API Integration
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → Deployment (Vercel / Render)
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → Version Control (Git/GitHub)
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → UI/UX Collaboration
              </li>
            </ul>
          </div>

          {/* AI / ML */}
          <div className="group bg-black/40 p-6 rounded-2xl border border-[#05ce91]/30 hover:border-[#05ce91] hover:shadow-[0_0_30px_rgba(5,206,145,0.3)] hover:bg-black/60 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <h3 className="text-xl font-semibold text-[#05ce91] mb-4 group-hover:text-[#06ffad] transition-colors duration-300">
              AI / ML
            </h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → Python
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → NumPy / Pandas
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → TensorFlow / Scikit-learn
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → Data Visualization
              </li>
              <li className="hover:text-[#05ce91] hover:translate-x-2 transition-all duration-200 cursor-default">
                → AI Integration in Web Apps
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}