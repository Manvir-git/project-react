// // import React from 'react';
// // import './App.css'; // Import main styles if any
// // import Navbar from './components/Navbar';
// // import Header from './components/Header';
// // import MainContent from './components/MainContent';
// // import Footer from './components/Footer';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Navbar />
// //       <Header />
// //       <MainContent />
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PumpDetail from './components/PumpDetail';
// import HomePage from './components/Homepage'; // Assuming you have a HomePage component
// import Products from './components/Products';
// function App() {
//     return (

//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} /> {/* Homepage route */}
//                 <Route path="/products" element={<Products />} /> 
//                 <Route path="/pump/:pumpId" element={<PumpDetail />} /> {/* Pump detail route */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;


import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/footer'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App



