import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../../context';
 class Contacts extends Component {
     
    render() {
        return(
            <Consumer>
                {value => {
                    const {contacts}=value;
                        return(
                        
                        <React.Fragment>
                            <h4 className="display-4 mb-3"><span className='text-danger'>Contact </span>List</h4 >
                            {
                                contacts.map(contact =>(
                                //<h1>{contact.name}</h1>
                                <Contact key={contact.id} contact={contact} />
                                )

                                )
                            } 
                        </React.Fragment>
                        )
                }}
            </Consumer>
        )



        // const {contacts}=this.state;
        
        // return ( 
        //     <React.Fragment>
        //         {
        //             contacts.map(contact =>(
        //             //<h1>{contact.name}</h1>
        //               <Contact key={contact.id} contact={contact} onClickDelete={this.onClickDelete} />
        //             )

        //             )
        //         } 
        //     </React.Fragment>
        // )
    }
}
export default Contacts;