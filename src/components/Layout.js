// import React from 'react'
// import Header from './Header'
// import Footer from './Footer'

// const Layout = (props) => {
//     return (
//         <div>
//             <Header />
//             <main style={{ minHeight: '100vh' }}>
//                 {props.children}
//             </main>
//             <Footer />
//         </div>
//     )
// }
// export default Layout


import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Hero from './Hero';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '100vh', display: 'flex' }}>
        {/* <Sidebar/> */}
        <Hero />
        <div style={{ flex: 1 }}>
          {props.children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
