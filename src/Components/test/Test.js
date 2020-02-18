import React, { Component } from 'react'

class Test extends Component {
    state={
        title:'',
        body:''
    }
    render() {
        const {title,body}=this.state;
        return (
            <div>
                <h1 className="display-4">{title}</h1>
        <h4 >{body}</h4>   
            </div>
        )
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/1')
     .then(response => response.json())
    .then(data => this.setState({title:data.title,body:data.body}))
    }
}
export default  Test;