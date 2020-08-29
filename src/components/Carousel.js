import React, { Component } from 'react';
import instagram from '../assests/images/instapic.jpg';
import youtube from '../assests/images/youtubepic.jpg';
import github from '../assests/images/githubpic.jpeg';
import Card from '../components/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Carousel extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Instagram',
                    subtitle: '',
                    imgSrc: instagram,
                    link: 'https://www.instagram.com/__hritik_singh__/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Hritik Kumar Singh',
                    subtitle: 'Youtube Channel',
                    imgSrc: youtube,
                    link: 'https://www.youtube.com/channel/UCfoPEplnGbCdkwaf6UdQVKA',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Github',
                    subtitle: 'for Coders',
                    imgSrc: github,
                    link: 'https://github.com/Simba-97',
                    selected: false
                }
                
            ]
             
        }

    }

    handleCardClick = (id, card) => {
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }
    
    makeCards = (items) => {
        return items.map(item => {
            return <Card item ={item} onClick ={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeCards(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;
