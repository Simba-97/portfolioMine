import React from 'react'
import HomePageContent from '../components/HomePageContent'
import AboutContent from '../components/AboutContent'

function AboutTab(props) {
    return (
        <div>
            <HomePageContent title={props.title} subtitle={props.subtitle}/>
            <AboutContent>
                hello
            </AboutContent>
        </div>
    )
}

export default AboutTab
