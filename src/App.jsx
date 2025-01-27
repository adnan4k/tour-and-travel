import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Packages from './pages/Packages';
import Destinations from './pages/Destinations';
import PackageDetial from './pages/PackageDetial';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import DestinationDetail from './pages/DestinationDetail';



function App() {
    return (
        <Router>
            <Navbar />
            <TawkMessengerReact
                propertyId="6776e68849e2fd8dfe01c7b8"
                widgetId="1igk791gc"
            />


            <Routes>

                {/* Define Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/blog-detail" element={<BlogDetail />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/book" element={<Booking />} />
                <Route path='/packages' element={<Packages />} />
                <Route path='/destinations' element={<Destinations />} />
                <Route path='/package-detail/:id' element={<PackageDetial />} />
                <Route path='/destination-detail/:id' element={<DestinationDetail />} />

                <Route path='/blog-detail/:id' element={<BlogDetail />} />


                {/* <Route path="/enjoyment" element={<EnjoymentVideo />} /> */}
                {/* Catch-All Route for 404 */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
