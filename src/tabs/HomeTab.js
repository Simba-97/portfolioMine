import React from 'react';
import HomePageContent from '../components/HomePageContent'
import Carousel from '../components/Carousel';

function HomeTab(props) {
    return (
        <div>
            <HomePageContent title = {props.title} subtitle= {props.subtitle} text = {props.text}/>
            <Carousel/>
        </div>
       
     )

}

export default HomeTab

