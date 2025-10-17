import React from "react";
import LetterGlitch from "../LetterGlitch";

export function ProjectsSection() {
  return (
    <div>
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
    </div>
  );
}
