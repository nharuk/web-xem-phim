import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer.jsx'

import { publicRoutes } from './routes'

import './App.scss';

function App() {

  return (
    <Router>
      <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
                        
          return (
            
              <Route
                  key={index}
                  path={route.path}
                  element={
                    <>
                      <Header/>  
                      <Page />
                      <Footer/>
                    </>
                      
                  }
              />
          );
      })}  
      </Routes>
      
    </Router>
  );
}

export default App;
