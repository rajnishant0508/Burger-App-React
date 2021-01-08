import React,{Component  } from "react";
import { Button,Container,Form,Row,Col } from 'react-bootstrap';
import classes from './Contactdata.css';
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
class Contactdata extends Component{
    
    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalcode:'',
        },
        spinner:false,
    }

    orderHandler = (event) =>{
         event.preventDefault();

         this.setState({
            spinner:true
        })
        
        const order={
            ingredients:this.props.ingredient,
            price:this.props.totalPrice,
            customer:{
               name:'Maximaiun anna',
               phoneno:9991919239,
               email:'abc@gamil.com',
            },
            dileveryMode:'Fast'   
        }
        axios.post('/orders.json',order)
             .then(response=>{
                console.log(response)
                this.setState({
                    spinner:false,
                })
             })
             .catch(error=>{
                console.log(error)
                this.setState({
                    spinner:false,
                })
             })
    }

    render(){

        let form=
            <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Street</Form.Label>
                            <Form.Control type="text" name="street" placeholder="Street" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Postalcode</Form.Label>
                            <Form.Control type="text" name="postalcode" placeholder="Postalcode" />
                        </Form.Group>
                        
                        <div className="text-center">
                            <Button variant="primary" type="submit" onClick={this.orderHandler}>
                                Order
                            </Button>
                        </div>    
            </Form>

        if(this.state.spinner){
            form=<Spinner/>;
        }    
        
        return(

            

           <div>
              
              <Container className={classes.contactdata}>
              <h4 className="text-center">Enter your Contact Data:</h4>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>

                    {form}

                    </Col>
                </Row>
              </Container>

              
             
           </div>
        )
    }
}
export default Contactdata;