import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import FeatureCategorie from '../components/featureCategorie/FeatureCategorie'
import Arivals from '../components/Arival/Arivals'
import Modal from '../components/ArivalModal/Modal'
// import FlashSale from '../components/FlashSale/FlashSale'


const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <FeatureCategorie/>
        <Arivals/>
        <Modal/>
        {/* <FlashSale/> */}
    </div>
  )
}

export default Home