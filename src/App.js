import React from 'react'
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(value) {
    this.setState({ text: value })
    console.log(this.state.text);
  }
 
  render() {
    return (
      <div className="content">

      
      <ReactQuill value={this.state.text} theme="snow"
                  onChange={this.handleChange} />
        </div>
    )
  }
}

export default App;
