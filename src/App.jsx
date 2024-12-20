import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';


function App() {
    return (
        <Router>
          <Navbar />
            <Routes>
                {/* Define Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/blog-detail" element={<BlogDetail />} />
                <Route path="/contact-us" element={<Contact />} />


                {/* <Route path="/enjoyment" element={<EnjoymentVideo />} /> */}
                {/* Catch-All Route for 404 */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
