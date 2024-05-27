import { useState } from "react"
import Heading from "./components/Heading"
import Section from "./components/Section"
function App() {
  const [count, setCount] = useState(0)

  return
  ;<>
    ;<Section title={"Hello"}>world</Section>
    ;<Heading title={"Hello"} />;
    <Counter setCount={setCount} count={count}></Counter>
  </>
}

export default App
