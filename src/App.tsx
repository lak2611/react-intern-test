import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/HomePage/Header/Header';
import MobileHeader from './components/HomePage/Header/MobileHeader';
import TopicList from './components/HomePage/TopicList/TopicList';
import ListVideo from './components/HomePage/ListVideo/ListVideo';
import Footer from './components/HomePage/Footer/Footer';
import MobileFooter from './components/HomePage/Footer/MobileFooter';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import UploadModal from './components/Modal/UploadModal/UploadModal';
import { getViewportWidth } from './utils/util';
import Turtorial from './components/HomePage/Turtorial/Turtorial';

function App() {
  const [viewportWidth, setViewportWidth] = useState(getViewportWidth())
  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewportWidth(getViewportWidth);
    });
  }, [])
  
  const isShowModal = useSelector((state: RootState) => state.modal.show )
  return (
    <div className="App">
      {getViewportWidth()<1024?<MobileHeader/>:<Header/>}
      <TopicList/>
      <ListVideo/>
      {getViewportWidth()<1024?<Turtorial/>:null}
      {getViewportWidth()<1024?<MobileFooter/>:<Footer/>}
      {isShowModal?<UploadModal/>:null}
    </div>
  );
}

export default App;
