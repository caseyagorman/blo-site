import React, {Component} from "react"
import {Form, FormControl, Button} from "react-bootstrap"
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-date-picker'

class GigRequest extends Component {
    constructor(props){
        super(props)
        this.state = {name: "", email: "", instrument: "", about: "", agree: true, date: new Date()}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleChange(e) {
        console.log("EEEEEEEEE", e)
        if (e.type === undefined){
            this.setState({
                date: e
            })

        }else{

        // const target = e.target;
        // const value = target.value
        // // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
    
        this.setState({
          [e.target.name]: e.target.value
        });
      }}

    handleSubmit(e){
        e.preventDefault()
        console.log("submmited", this.state)
    }

    render(){
        return (
            <div className="container">
            <h1 style={{textAlign: "center"}}>Gig Request Form</h1>
            <div style={{textAlign: "center", fontSize: 16}}>.</div>
            <br></br>
            <Form onSubmit={this.handleSubmit}>
            Please give a short title for your event.
            <FormControl 
            onChange={this.handleChange}
            name="title"
            type="text"
            placeholder="title"
            value={this.state.name}
            />
            <br></br>
            Please briefly describe your event.
            <FormControl 
            onChange={this.handleChange}
            name="description"
            type="textArea"
            placeholder= "description"
            value={this.state.email}
            />
            <br></br>
            Date of Event 
            <br></br>
          
                <DatePicker
                onChange={this.handleChange}
                type="date"
                name="date"
                value={this.state.date}
              />
            <br></br><br></br>
            Event start time
               <FormControl 
            onChange={this.handleChange}
            name="start_time"
            type="text"
            placeholder="start time"
            value={this.state.about}
            />
            <br></br>
              Event end time
               <FormControl 
            onChange={this.handleChange}
            name="end_time"
            type="text"
            placeholder="end time"
            value={this.state.about}
            />
            <br></br>
              When do you want the band to start playing?
               <FormControl 
            onChange={this.handleChange}
            name="band_start"
            type="text"
            placeholder="band start"
            value={this.state.about}
            />
            <br></br>
              When do you want the band to stop playing?
               <FormControl 
            onChange={this.handleChange}
            name="band_end"
            type="text"
            placeholder="band end"
            value={this.state}
            />
            <br></br>
                Where is the event?
               <FormControl 
            onChange={this.handleChange}
            name="location"
            type="text"
            placeholder="location"
            value={this.state.location}
            />
<br></br>
Who is organizing the event/action?
               <FormControl 
            onChange={this.handleChange}
            name="who"
            type="text"
            placeholder="who"
            value={this.state.who}
            />
<br></br>
Organizer's contact info (phone & email)?
               <FormControl 
            onChange={this.handleChange}
            name="contact"
            type="text"
            placeholder="contact"
            value={this.state.contact}
            /><br></br>
    What is the cause being advanced and/or the purpose of the event
               <FormControl 
            onChange={this.handleChange}
            name="cause"
            type="textarea"
            placeholder="cause"
            value={this.state.cause}
            /><br></br>
           If there is a public website/link  this event, paste it here.
               <FormControl 
            onChange={this.handleChange}
            name="url"
            type="text"
            placeholder="url"
            value={this.state.url}
            />
<br></br>
            What is the history of the event
               <FormControl 
            onChange={this.handleChange}
            name="event_history"
            type="textarea"
            placeholder=""
            value={this.state.history}
            /><br></br>
    Is the event arrestable?
               <FormControl 
            onChange={this.handleChange}
            name="arrestable"
            type="textarea"
            placeholder="arrestable"
            value={this.state.arrestable}
            /><br></br>
            Have the organizers communicated with the police in advance?
            <FormControl 
            onChange={this.handleChange}
            name="cops"
            type="textarea"
            placeholder="cops"
            value={this.state.cops}
            /><br></br>
            What is the role and leadership of people of color in connection with the event?
               <FormControl 
            onChange={this.handleChange}
            name="people_of_color"
            type="textarea"
            placeholder="people of color"
            value={this.state.poc}
            /><br></br>
               What is the level of involvement of the relevant communities
               <FormControl 
            onChange={this.handleChange}
            name="relevant_communities"
            type="textarea"
            placeholder="relevant communities"
            value={this.state.communities}
            />
<br></br>
            Will other musical groups be playing? If so, who?
               <FormControl 
            onChange={this.handleChange}
            name="other_groups"
            type="textarea"
            placeholder="other groups"
            value={this.state.groups}
            /><br></br>
            Will there be a sound system?
            <br></br>
            Any other details we should know?
               <FormControl 
            onChange={this.handleChange}
            name="other"
            type="textarea"
            placeholder=""
            value={this.state.other}
            />
            <br></br>


            <br></br>
            <Button style={{backgroundColor:"#ef0067", border: "1px solid black"}}>Submit request</Button>
            </Form>
            </div>
        )
    }
}

export default GigRequest