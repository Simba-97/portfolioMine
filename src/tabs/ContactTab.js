import React, { Component } from 'react';
import HomePageContent from '../components/HomePageContent'
import Content from '../components/Content';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Axios from 'axios'

export class ContactTab extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             first_name: '',
             last_name: '',
             email: '',
             message: '',
             disabled: false,
             emailSent: null,
        }
    }
    
    handleChange = (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true,
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success){
                    this.setState({
                        disabled: false,
                        emailSent: true
                    })
           
                }else{
                        this.setState({
                            disabled: false,
                            emailSent: false
                        })
                    }
                })  
                .catch(err => {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    })
                })
        
    }
    render() {
        return (
            <div>
                <HomePageContent title ={this.props.title}/>
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup >
                            <Row>
                                <Col>
                                    <FormLabel htmlFor="first-name">First Name</FormLabel>
                                    <FormControl id="first-name" first-name="first_name" type="text" value={this.state.name} onChange={this.handleChange}/>
                                </Col>
                                <Col>
                                    <FormLabel htmlFor="last-name">Last Name</FormLabel>
                                    <FormControl id="first-name" last-name="last_name" type="text" value={this.state.name} onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                       
                        <FormGroup>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormControl id="email" name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
                        </FormGroup>
                        
                        <FormGroup>
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <FormControl id="message" name="message" as="textarea" rows = "4" value={this.state.message} onChange={this.handleChange}/>
                        </FormGroup>
                        
                        <Button className="bg-primary" type="submit" disable={this.state.disabled}>Send</Button>
                    </Form>

                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent!</p>}
                    {this.state.emailSent === false && <p className="d-inline failure-msg">Email Not Sent!</p>}
                </Content>
            </div>
        )
    }
}




export default ContactTab;
