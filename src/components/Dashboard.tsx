import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Button, Carousel } from 'react-bootstrap'
import { history } from '../Myhistory'

class Dashboard extends Component<any, any> {
  handleChange = () => {
    localStorage.removeItem('token')
    history.push('/')
  }
  handleDelete = () => {
    var user_Email = localStorage.getItem('token')
    var Details = new Map(JSON.parse(localStorage.user))
    var a: any = Details.get(user_Email)
    Details.delete(a[0])
    Details.delete(a[1])
    localStorage.user = JSON.stringify(Array.from(Details.entries()))
    localStorage.removeItem('token')
    history.push('/')
  }
  render() {
    var parseduserDetails: any
    var userEmail = localStorage.getItem('token')
    if (userEmail) {
      var Detail = new Map(JSON.parse(localStorage.user))
      var a = Detail.has(userEmail)
      if (a) {
        parseduserDetails = Detail.get(userEmail)
      }
      return (
        <div>
          <Button
            className="dashboardButton btn btn-danger"
            onClick={this.handleDelete}
          >
            Delete Account
          </Button>
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
