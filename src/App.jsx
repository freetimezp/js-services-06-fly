import React from 'react';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import Support from './components/support/Support';
import Info from './components/info/Info';
import Lounge from './components/lounge/Lounge';
import Travelers from './components/travelers/Travelers';
import Subscribers from './components/subscribers/Subscribers';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>
  );
}

export default App;
