import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import scrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";
import { Demo } from "./views/demo.jsx";
import { Home } from "./views/home.jsx";
import { Single } from "./views/single.jsx";

import { Navbar } from "./views/navbar.jsx"
import { Cards } from "./views/cards.jsx";
import { Footer } from "./views/footer.jsx";

const Layout = () => {
    const basename = process.env.BASENAME || "";
    return (
        <div>
            <BrowserRouter basename={basename}>
                <scrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/demo/:inf:id" element={<Demo />} />
                        <Route path="/single/:theid" element{<Single />} />
                        <Route path="" element={<h1>Lost in space</h1>} />
                    </Routes>
                </scrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);