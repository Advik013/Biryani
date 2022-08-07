import "./App.css";
import Navbar from "./component/Navigation";
import Contact from "./component/Contact";
import Crousel from "./component/Crousel";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Menu from "./component/Menu";
import Team from "./component/Team";
import Topselling from "./component/Topselling";
import UserResponse from "./component/UserResponse";
import Loading from "./component/Loading";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <>
                <Loading />
                <Crousel />
                <Topselling />
                <About />
                <UserResponse />
              </>
            }
          />
          <Route
            path="/index.html"
            element={
              <>
                <Loading />
                <Crousel />
                <Topselling />
                <About />
                <UserResponse />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Loading />
                <Crousel />
                <Topselling />
                <About />
                <UserResponse />
              </>
            }
          />
          <Route
            path="/menu"
            element={
              <>
                <Loading />

                <Menu />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Loading />
                <About />
                <Team />
              </>
            }
          />
          <Route
          path="/contact"
            element={
              <>
                <Loading />
                <Contact />
              </>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
