import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MasterComponent from "./components/MasterComponent/masterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog/blog";
import NotFound from "./components/Notfound/notFound";

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route index element={<MasterComponent />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
