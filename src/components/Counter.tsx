import { useState } from "react"
function Counter() {
  const [count, setCount] = useState(0)
  return
  ;<>
    <h1>count is {count}</h1>
    <button onClick={() => setCount((count) => count + 1)}>+</button>
    <button onClick={() => setCount((count) => count - 1)}>-</button>
  </>
}

export default Counter
