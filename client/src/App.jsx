import { useState } from "react";
import Nav from "./components/Nav";
import ProjCard from "./components/ProjCard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <main className="main">
        <blockquote className="intro-quote">
          Destinee is an imaginative software engineer + excellent dancer and
          dinner host!
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
      <ProjCard />

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  );
}

export default App;
