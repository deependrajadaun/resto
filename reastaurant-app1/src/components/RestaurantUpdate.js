import React, { Component } from 'react';

class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            address:null,
            location:null,
            id:null
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((response) => {
            response.json().then((result) => {

                this.setState({ name: result.name,
                    email: result.email,
                    address: result.address,
                    location: result.location,
                    id: result.id
                                  })
            })
        })
    }
    update(){
        fetch("http://localhost:3000/restaurant/"+this.state.id, {
            method : "PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been updated")
            })
        })
    }
    render() {
        return (
            <div>
                <h1>  Restaurant Update</h1>
                <div>
                    <input onChange={(event)=>{this.setState({name : event.target.value})}} placeholder="name of Restaurant"
                    value={this.state.name} />
                  <br/><br/>  <input onChange={(event)=>{this.setState({email : event.target.value})}} placeholder="email" 
                  value={this.state.email}/>
                  <br/><br/> <input onChange={(event)=>{this.setState({address : event.target.value})}} placeholder="address" 
                  value={this.state.address}/>
                  <br/><br/> <input onChange={(event)=>{this.setState({location : event.target.value})}} placeholder="locaton"
                  value={this.state.location}/>
                  <br/> <br/><button onClick={()=>{this.update()}}>Update Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;