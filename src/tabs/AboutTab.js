import React from 'react'
import HomePageContent from '../components/HomePageContent'
import Content from '../components/Content'

function AboutTab(props) {
    return (
        <div>
            <HomePageContent title={props.title} subtitle={props.subtitle}/>
            <Content>
                hello there!
            </Content>
        </div>
    )
}

export default AboutTab