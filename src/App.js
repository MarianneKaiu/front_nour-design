import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Realisations from "./pages/Realisations";
// import Actualities from "./pages/Actualities";
// import Amenagement from "./pages/Amenagement";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Meubles from "./pages/Meubles";
import NotFound from "./pages/NotFound";
// import PetitsObjets from "./pages/PetitsObjets";

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <>
            <div>
                <p>{!data ? "Loading..." : data}</p>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<NotFound />} />
                    {/* <Route path="/amenagement" element={<Amenagement />} /> */}
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/realisations" element={<Realisations />} />
                    {/* <Route path="/meubles" element={<Meubles />} /> */}
                    {/* <Route path="/petitsObjets" element={<PetitsObjets />} /> */}
                    <Route path="/apropos" element={<About />} />
                    {/* <Route path="/actualites" element={<Actualities />} /> */}
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
