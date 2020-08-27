import React from 'react';
import HomePageContent from '../components/HomePageContent'

function HomeTab(props) {
    return (
       
            <HomePageContent title = {props.title} subtitle= {props.subtitle} text = {props.text}/> 
    );
}

export default HomeTab

