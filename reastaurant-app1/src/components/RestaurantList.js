import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap'

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
       this.getData()
    }
getData(){
    fetch("http://localhost:3000/restaurant").then((response) => {
        response.json().then((result) => {

            this.setState({ list: result })
        })
    })
}


delete(id){
    fetch("http://localhost:3000/restaurant/"+id, {
        method : "DELETE",
        // headers:{
        //     'Content-Type':'application/json'
        // },
        // body: JSON.stringify(this.state)
    }).then((result)=>{
        result.json().then((resp)=>{
            alert("Restaurant has been Deleted")
            this.getData()
        })
    })
}



    render() {
        // console.warn(this.state)
        return (
            <div>
                <h1>Restaurant List </h1>

                {this.state.list ?
                    <div >
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th> Name</th>
                                    <th>Address</th>
                                    <th>Email</th>                               
                                                                     
                                    <th>Location</th>
                                    <th>Operation</th>
                                    <th>Delete Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.list.map((item, i) =>
                                    // <div className="list-wrapper">
                                    //     <span>{item.name} </span>
                                    //     <span>{item.address} </span>
                                    //     <span>{item.email} </span>
                                    //     <span>{item.location} </span>
                                    // </div>

                                    <tr>
                                        <td>{item.id} </td>
                                        <td>{item.name} </td>
                                        <td>{item.address } </td>
                                        <td>{item.email } </td>
                                        <td>{item.location } </td>
                                        <td><Link to={"/update/"+item.id} >Edit </Link> </td>
                                        <td><span onClick={()=>this.delete(item.id) } ></span></td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>    
                    </div>
                    : <p>Please wait... </p>
                }

            </div>
        )
    }
}


export default RestaurantList;