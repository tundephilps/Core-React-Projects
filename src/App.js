import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Password from "./Projects/PasswordMeter/Password";
import LoginForm from "./Projects/Login/src/LoginForm";
import Checkbox from "./Projects/Checkbox/Checkbox";
import Inputtags from "./Projects/InputTags/Inputtags";
import InputMap from "./Projects/InputMap/InputMap";
import FlagApp from "./Projects/FlagApp/FlagApp";
import Clock from "./Projects/Clock/Clock";
import Generator from "./Projects/QR Code/Generator";

import Markdown from "./Projects/Markdown/Markdown";
import PwGenerator from "./Projects/PasswordGenerator/PwGenerator";
import BookList from "./Projects/BookListApp/BookList";
import FormValidation from "./Projects/FormValidation/FormValidation";
//import Home from "./pages/Home";
//import Video from "./pages/Video";
//import SignIn from "./pages/SignIn";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Router>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                
                <Route path="/" element={<Clock />} />
                <Route path="/Password" element={<Password />} />
                
                <Route path="/Checkbox" element={<Checkbox />} />
                <Route path="/Login" element={<LoginForm />} />
                
                <Route path="/Inputtags" element={<Inputtags />} />
                
                <Route path="/Inputmap" element={<InputMap />} />
                
                <Route path="/FormValidation" element={<FormValidation />} />
              
                <Route path="/FlagApp" element={<FlagApp />} />
                
                <Route path="/Generator" element={<Generator />} />
                
                <Route path="/PasswordGenerator" element={<PwGenerator />} />
                
                <Route path="/BookList" element={<BookList />} />
                <Route path="/Documentation" element={<Markdown />} />
              </Routes>
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;