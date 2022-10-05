import { createContext, useState } from "react";
import Header from "./Header";
import Post from "./Post";
import "./Markdown.scss";

// Create Context
export const ThemeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark, setIsDark
  }

  return (
    <ThemeContext.Provider value={value}>
        <div className="Markbody">
      <Header />
      <Post />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;