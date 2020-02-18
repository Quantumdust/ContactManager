import React, { Component } from 'react'
import {Consumer} from '../../context'
//import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
export default class EditContacts extends Component {
    state={
        name:'',
        phone:'',
        email:'',
        showAddContact:true,
        errors:{}
    }
    async componentDidMount(){
        const {id}=this.props.match.params;
        //console.log(id);
        const res=await (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
        this.setState({name:res.name,email:res.email,phone:res.phone});
    }
    onClickToggle=()=>{
        this.setState({showAddContact:!(this.state.showAddContact)})
    };
    onChange=e=>{this.setState({[e.target.name]:e.target.value})};

    onSubmit=async (dispatch,event)=>{
        event.preventDefault();
        const {name,email,phone}=this.state;
        if(name === ''){this.setState({errors:{name:'name is required'}});return};
        if(email === ''){this.setState({errors:{email:'email is required'}});return}
        if(phone === ''){this.setState({errors:{phone:'phone is required'}});return}
        //const newcontact={id:uuid(),name,email,phone};
        const newcontact={name,email,phone};
        const {id}=this.props.match.params;
        const res=await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,newcontact);
        dispatch({type:'EditContact',payload:res.data});
        
        ///clear state
         this.setState({name:'',email:'',phone:'',errors:{}})
         this.props.history.push('/');
    }
    render() {
        const {name,email,phone,errors}=this.state;
        return(
            <Consumer>
                {value=>{
                   const {dispatch}=value;
                   return(
                    <div className="card mb-3">
                    <div className="card-header">Edit Contact<b sytle={{cursor:'pointer'}} onClick={this.onClickToggle} className="fas fa-angle-down ml-3"></b></div>
                    {
                        this.state.showAddContact?
                        (
                            
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                <TextInputGroup
                                name='name'   
                                value={name} 
                                placeholder='Name..'
                                onChange={this.onChange}
                                label='Name'
                                error={errors.name}
                                />
                                
                                <TextInputGroup
                                name='email'   
                                value={email} 
                                placeholder='Email..'
                                onChange={this.onChange}
                                label='Email'
                                type='email'
                                error={errors.email}
                                />
                                
                                <TextInputGroup
                                name='phone'   
                                value={phone} 
                                placeholder='Phone..'
                                onChange={this.onChange}
                                label='Phone'
                                error={errors.phone}
                                />
                                
                                <input 
                                type="submit" 
                                value="UpdateContact" 
                                className="btn btn-light btn-block"/>
                            </form>
                        </div>
                        )
                        :null
                    }
                </div>
                   )
                }}
            </Consumer>
        )
        
    }
}
