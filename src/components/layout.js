import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../assets/sass/styles.sass'

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {isActive: false}
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({isActive: !this.state.isActive})
  }
  render () {
    return (
      <div>
        <div>
          <Header isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()}/>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout