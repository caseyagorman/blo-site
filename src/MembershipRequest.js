import React, {Component} from "react"
import {Form, FormControl, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

class MembershipRequest extends Component {
    constructor(props){
        super(props)
        this.state = {name: "", email: "", instrument: "", about: "", agree: true}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(e){
        e.preventDefault()
        console.log("submmited", this.state)
    }

    render(){
        return (
            <div className="container">
            <h1 style={{textAlign: "center"}}>Membership Request Form</h1>
            <div style={{textAlign: "center", fontSize: 16}}>If you see us on the street, we are always open to folks coming up and playing with us. 
            If you want to get more involved, please fill out the form below. 
            B.L.O. is open to all musical levels. 
            Please check out our politics and look over some of our past actions to see 
            if you think we would be a good fit.</div>
            <br></br>
            <Form onSubmit={this.handleSubmit}>
            <FormControl 
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            />
            <br></br>
            <FormControl 
            onChange={this.handleChange}
            name="email"
            type="email"
            placeholder= "email"
            value={this.state.email}
            />
            <br></br>
            <FormControl 
            onChange={this.handleChange}
            name="instrument"
            type="text"
            placeholder="instrument"
            value={this.state.instrument}
            />
            <br></br>
               <FormControl 
            onChange={this.handleChange}
            name="about"
            type="textarea"
            placeholder="tell us about you"
            value={this.state.about}
            />
            <br></br>
            <label style={{fontSize: 16, marginRight: 5}}> Agree to <Link to={"/about"} style={{color: "#ef0067"}}>  points of unity?</Link> </label>

        <input onChange={this.handleChange}
            name="agree"
            type="checkbox"
            value={this.state.agree}/>
            <br></br>
            <Button style={{backgroundColor:"#ef0067", border: "1px solid black"}}>submit</Button>
            </Form>
            </div>
        )
    }
}

export default MembershipRequest