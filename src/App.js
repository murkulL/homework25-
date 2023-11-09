import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Header from './pages/Header';
import Post from './pages/Post';

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
        
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
        <footer className='footer'>Footer</footer>
      </div>
    </>
  );
}

export default App;
