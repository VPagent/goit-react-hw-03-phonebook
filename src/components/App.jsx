import { Component } from 'react';
import Form from 'components/Form';
import Section from 'components/Section';
import Contacts from 'components/Contacts';



export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  
  componentDidMount(){
    const savedContacts = localStorage.getItem("contacts")

    if (savedContacts){
      this.setState({contacts: JSON.parse(savedContacts)})
    }
  }
  componentDidUpdate(_, prevState){
    const { contacts } = this.state
    if(prevState.contacts.length !== contacts.length){
      localStorage.setItem("contacts", JSON.stringify(contacts))
    }
  }

  changeState = (arr) => {
    const {contacts} = this.state
    this.setState({contacts: [...contacts, ...arr]})
  }
  handleFilter = () => {
    const target = this.state.filter
    const filteredUsers = this.state.contacts.filter(user => user.userName.includes(target))
    return filteredUsers
  }
  handleChange = (event) => {
    const inputName = event.target.name
    const value = event.target.value.toLowerCase() 
    this.setState({[inputName]: value})
  }
  handleDelete = (event) => {
    const {contacts} = this.state
    const withoutDel = contacts.filter(user => user.userName !== event.target.name)
    this.setState({contacts: withoutDel})
  }
  
  render() {
    const filterValue = this.state.filter
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <Form onSetApp={this.changeState} options={this.state.contacts}/>
        </Section>
        <Section title="Contacts">
          <Contacts options={!filterValue? this.state.contacts : this.handleFilter()} onChangeInput={this.handleChange} filterValue={this.state.filter} onHandleDelete={this.handleDelete}/>
        </Section>
      </div>
    );
  }
}



