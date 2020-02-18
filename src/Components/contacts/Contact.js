import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../context'
import axios from 'axios';
import {Link} from  'react-router-dom';
 class Contact extends Component {
     state={
         showContactInfo:false
     }
    onClickDelete=async (id,dispatch)=>{
        const res=await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({payload:id,type:'DeleteContact'});
       
    };
    onClickToggle=(e)=>{
        //console.log('hello');
        this.setState({showContactInfo:!(this.state.showContactInfo)});
    };
    render() {
        const {id, name , email , phone } =this.props.contact;
        return (
            <Consumer>
                {value=>{
                    const {dispatch}=value;
                    return(
                        <div className="card card-body mb-3">
                            
                            <h4>
                                {name}
                                <i sytle={{cursor:'pointer'}} onClick={this.onClickToggle} className="fas fa-angle-down ml-2" />
                                <i sytle={{cursor:'pointer',float:'right'}} onClick={this.onClickDelete.bind(this,id,dispatch)} className="fas fa-trash-alt float-right"/>
                                <Link to={`/edit/${id}`} sytle={{cursor:'pointer',float:'right'}} className="fas fa-pencil-alt float-right mr-3 ml-3"/>
                            </h4> 
                            {
                                this.state.showContactInfo?
                                
                                (<ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>)
        
                                :null
                            }
                        </div>
                    );
                }}
            </Consumer>
        );
    }
    PropTypes = {
    name  : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    phone : PropTypes.string.isRequired
}
}

export default Contact; 