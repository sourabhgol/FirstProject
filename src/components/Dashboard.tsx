import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Button, Carousel } from 'react-bootstrap'
import { history } from '../Myhistory'

class Dashboard extends Component<any, any> {
  handleChange = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  render() {
    var userEmail = localStorage.getItem('token')
    if (userEmail) {
      var userDetails = localStorage.getItem(userEmail)
      var parseduserDetails
      if (userDetails) {
        parseduserDetails = JSON.parse(userDetails)
      }
      return (
        <div>
          <Button
            className="dashboardButton btn btn-dark"
            onClick={this.handleChange}
          >
            Log Out
          </Button>
          <h1 className="dashboardheading">Welcome {parseduserDetails[0]}</h1>
          <br></br>
          <br></br>
          <div className="Userdetails">
            <h1 className="Contactdetails">My Contact Details</h1>
            <br></br>
            <p className="details">My Name is : {parseduserDetails[0]}</p>
            <p className="details">My email Id: {parseduserDetails[1]}</p>
          </div>
          <Carousel>
            <Carousel.Item>
              <img
                className="AlignCarouselImage"
                src="https://media0.giphy.com/media/7ltN7lCgF2MQE/giphy.gif?cid=ecf05e47e899bfc12cf89f850f3a291e97b8c2e6d5b7ca0c&rid=giphy.gif"
                alt="carousel"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="AlignCarouselImage"
                src="https://media2.giphy.com/media/836HiJc7pgzy8iNXCn/giphy.gif?cid=ecf05e4701a2e4acafff69587fd2cf1905a506583dcfe166&rid=giphy.gif"
                alt="carousel"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}
export default Dashboard
