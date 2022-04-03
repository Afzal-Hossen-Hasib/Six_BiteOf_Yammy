import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllReview from './components/AllReview/AllReview';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Review from './components/Review/Review';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element= {<HeroSection></HeroSection>}></Route>
        <Route path='/reviews' element= {<AllReview></AllReview>}></Route>
      </Routes>
      <Review></Review>
    </div>
  );
}

export default App;
