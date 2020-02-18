import React, { Component } from 'react'
import axios from 'axios';
const Context = React.createContext();
const reducer =(state,action)=>{
    switch (action.type) {
        case 'DeleteContact':
            return{
                ...state,
                contacts:state.contacts.filter(contact=>contact.id!==action.payload
                )
            }
        case 'AddContact':
            return{
                ...state,
                contacts:[action.payload,...state.contacts]
            }
        case 'EditContact':
            return{
                ...state,
                contacts:state.contacts.map(contact=>
                    (contact.id===action.payload.id?action.payload:contact)
                )
            }
        default:
            return state
    }
}
export class Provider extends Component {
    
    state={
        contacts: [
           
        ],
        dispatch:action=>{
            this.setState(state=>reducer(state,action));
        }
        
    };
    
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
    async componentDidMount(){
        const res=await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({contacts:res.data});
    }
} 
export  const Consumer = Context.Consumer;
