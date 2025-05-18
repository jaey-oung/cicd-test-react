import { useState } from "react"
import axios from "axios"

function Test() {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    try {
      setLoading(true)
      const response = await axios.get("http://localhost:8080/test")
      alert(`SpringBoot 응답: ${response.data}`)
    } catch (error) {
      alert("요청 실패: " + (error as any).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>SpringBoot API 연동 테스트</h2>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "요청 중..." : "SpringBoot에 요청하기"}
      </button>
    </div>
  )
}

export default Test