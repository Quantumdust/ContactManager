import React from 'react';
import Contacts from './Components/contacts/Contacts';
import AddContact from './Components/contacts/AddContact';
import EditContact from './Components/contacts/EditContact';
import Test from './Components/test/Test';
import Header from './Components/layout/Header';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context';
import {HashRouter as Router ,Route,Switch} from 'react-router-dom';
// function App() {
//   return (
//     <div className="App">
//       <h1>The main app component</h1>
//     </div>
//   );
// }
class App extends React.Component {
  render(){
    return(
    <Provider>
      <Router>
        <div className='App'>
          <Header branding="Contact Manager"/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/add" component={AddContact}/>
              <Route exact path="/edit/:id" component={EditContact}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/Test" component={Test}/>
              <Route exact  component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
    )
  }
}
// App=()=>{
//  return( <div className="App">
//  <h1>The main app component</h1>
// </div>);
// };

export default App;
