import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Actualities from "./pages/Actualities";
import Amenagement from "./pages/Amenagement";
import Comment from "./pages/Comment";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Meubles from "./pages/Meubles";
import NotFound from "./pages/NotFound";
import PetitsObjets from "./pages/PetitsObjets";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/amenagement" element={<Amenagement />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/meubles" element={<Meubles />} />
                <Route path="/petitsObjets" element={<PetitsObjets />} />
                <Route path="/apropos" element={<About />} />
                <Route path="/actualites" element={<Actualities />} />
                <Route path="/comment" element={<Comment />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
