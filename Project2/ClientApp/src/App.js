// import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductView from "./components/ProductView";
import cardImage1 from "./assets/cardimage1.jpg";
/*import WhatDoWeDo from "./components/WhatDoWeDo";*/
import WhoIsIllustra from "./components/WhoIsIllustra";

function App() {
    const cards = [
        {
            id: 0,
            url: "https://kmcmaggroup.com/media/1820/one-bedroom-condos-below-30000php-a-month.jpg",
            images: {
                image1: "test",
                image2: "test",
            },
            title: "2 BR Condominium 100 SQM",
            location: "Makati",
            price: "5M",
        },
        {
            id: 1,
            url: cardImage1,
            images: {
                image1: "test",
                image2: "test",
            },
            title: "4 BR Condominium 180 SQM",
            location: "Marikina",
            price: "5M",
        },
        {
            id: 2,
            url: "https://a0.muscache.com/im/pictures/9a5506c7-2803-4c0e-94b8-1bdea7cdd742.jpg",
            images: {
                image1: "test",
                image2: "test",
            },
            title: "3 BR Condominium 130 SQM",
            location: "Cavite",
            price: "5M",
        },
    ];

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage cardList={cards} />} />
                    <Route
                        path="/product/:id"
                        element={<ProductView cardList={cards} />}
                    />
                    {/*<Route path="/WhatDoWeDo" element={<WhatDoWeDo />} />*/}
                    <Route path="/WhoIsIllustra" element={<WhoIsIllustra />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;