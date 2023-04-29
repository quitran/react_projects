import React, { Component } from 'react'
import MemoComp from './MemoComp'
 
class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Qui'
    }
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        name: 'Qui'
      })
    }, 2000)
  }
  render() {
    console.log('*********** Parent comp render ***************')
    return (
      <div>Parent Comp
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp