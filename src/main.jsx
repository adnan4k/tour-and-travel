import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Global styles
// import './assets/css/bootstrap.css'; // Bootstrap CSS
// import './assets/css/styles.css'; // Main styles
// import './assets/css/swiper.css'; // Swiper CSS (ensure the file exists)
// import './assets/css/magnific-popup.css'; // Magnific Popup styles
// import './assets/css/fontawesome-all.css'; // FontAwesome (ensure this path/file exists)
// import './assets/js/bootstrap.min.js'
// import './assets/js/isotope.pkgd.min.js'
// import './assets/js/jquery.magnific-popup.js'
// import './assets/js/scripts.js'
// import './assets/js/popper.min.js'
// import './assets/js/swiper.min.js'
// import './assets/js/validator.min.js'
// import './assets/js/jquery.easing.min.js'
// import './assets/js/morphext.min.js'

 import App from './App.jsx'; // Main App Component

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
