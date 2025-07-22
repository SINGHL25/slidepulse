**`routes.jsx`**
```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Host from "./pages/Host";
import Join from "./pages/Join";
import Poll from "./pages/Poll";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/host/:sessionId" element={<Host />} />
        <Route path="/join/:sessionId" element={<Join />} />
        <Route path="/poll/:sessionId" element={<Poll />} />
      </Routes>
    </Router>
  );
}
```
