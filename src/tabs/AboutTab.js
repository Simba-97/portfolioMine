import React from 'react'
import HomePageContent from '../components/HomePageContent'
import Content from '../components/Content'

function AboutTab(props) {
    return (
        <div>
            <HomePageContent title={props.title} subtitle={props.subtitle}/>
            <Content>
                <h1 style={{fontWeight: "bold" ,fontFamily: "Shadows Into Light Two"}}>Hi there!</h1>
                <p>I am Hritik Kumar Singh. I am currently an undergrad 2nd year student at Sister Nivedita University, Kolkata. I am currently pursuing B.tech in Computer Science and Engineering. I am super curious and attracted to the new technologies that keep coming and I like to keep myself updated with the recent technologies </p>
                <p>I am basically a junior developer developing things I like. I know Javascript, Java, Node.js, C++, React.js, C and some more languages to come in the upcoming days</p>
            </Content>
        </div>
    )
}

export default AboutTab