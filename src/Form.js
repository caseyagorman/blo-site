import React, {Component} from "react"
import {Form} from "react-bootstrap"

class SignupForm extends Component {
    constructor(props){
        super(props)
        this.state = {name: null, email: null, about: null}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()

    }

    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
            <input 
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            />
            <input 
            onChange={this.handleChange}
            name="email"
            type="email"
            placeholder= "email"
            value={this.state.email}
            />
               <input 
            onChange={this.handleChange}
            name="about"
            type="textarea"
            placeholder="tell us about you"
            value={this.state.about}
            />
            <label> <a href={"points-of-unity"}> Agree to points of unity?</a> </label>
            <input onChange={this.handleChange}
            name="agree"
            type="checkbox"
            value={this.state.agree}/>

            <button>submit</button>
            </Form>
        )
    }
}

export default SignupForm