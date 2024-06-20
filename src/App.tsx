import { BrowserRouter, Route, Routes } from "react-router-dom"
import ExplanationPage from "./pages/ExplanationPage"
import PlaygroundPage from "./pages/PlaygroundPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExplanationPage />} />
        <Route path="/play" element={<PlaygroundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
