import { useState } from "react";
import Nav from "./components/Nav";
import ProjCard from "./components/ProjCard";

function App() {
  return (
    <>
      <Nav />
      <main className="main">
        <blockquote className="intro-quote">
          Destinee is a visionary software engineer + phenomenal dinner host.
        </blockquote>
        <a
          href="https://www.linkedin.com/in/destinee-valdivia/"
          target="linkedin profile"
        >
          <img
            src="https://media.licdn.com/dms/image/D5603AQHLF7aqTXFMDg/profile-displayphoto-shrink_400_400/0/1692320060386?e=1706140800&v=beta&t=n4YMEpnfyJdB2u9qJOqMwQnvPahsXsUse2gyn5aDzMU"
            className="my-photo"
            alt="my photo"
          />
        </a>
      </main>
      <section className="proj-header">
        <h1 className="proj-title"> Projects</h1>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/destinee-valdivia/"
            target="linkedin profile"
          >
            <img
              src="data:image/png;base64,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"
              className="social-img"
              alt="linkedIn image"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/destinee-valdivia/"
            target="linkedin profile"
          >
            <img
              src="data:image/png;base64,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"
              className="social-img"
              alt="github image"
            />
          </a>
        </div>
      </section>
      <ProjCard
        title="Emohelper"
        proj="https://github.com/destineevaldivia/EmoHelper/raw/complete_mvp/emohelper-demo-screenshot.png"
        blurb="This is where my project pitch and description will go. blah blah blah"
      />

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  );
}

export default App;
