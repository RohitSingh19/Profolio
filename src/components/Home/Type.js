import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer","Open Source Enthusiast","Blogger"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 72,
      }}
    />
  );
}

export default Type;
