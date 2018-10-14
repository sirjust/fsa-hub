import React, { Component } from "react";

export default class Home extends Component {
  render() {

    return(
      <React.Fragment>
        <p className="App-intro">
          <b>Public Service Announcement</b><br/><br/>
          As a Full-Stack Apprentice (FSA), you will learn to create modern & secure digital products while learning how to run a business. <br/> <br />

          You will work with a mentor who will pass their skills on to you. In exchange for their knowledge & direction, you will work on their entrepreneurial ventures for them with the goal of creating a profitable business together. You will aquire competence in these areas:<br/><br/>
          <ul>
            <li>Authenticating users & authorizing system permissions </li>
            <li>Interface design, & user experience (UX) principles</li>
            <li>Setting up a server, REST API's, and securing them</li>
            <li>Working with relational & NoSQL databases</li>
            <li>Application & network security principles</li>
            <li>Developing component-driven web applications and/or mobile applications</li>
            <li>Provisioning application infrastructure, so that your product can grow from one user to 10,000</li>
            <li>Automated testing to stabilize your code</li>
          </ul>
            <br/>

            At first, you will work for your mentor for free. Their time is valuable, and you must prove your dedication. After a sufficient period of time, the mentor should make every effort to pay the apprentice a rate that makes sense from a business standpoint, as well as offering equity in a business venture. <br/><br />

            This process can take anywhere from six to twelve months, depending on how much time the apprentice has to dedicate to immersive training & what point you are starting from. <br/> <br/>
            Join our Slack group below to join our community in Seattle - a place where you can connect with potential mentors & apprentices. We are looking to expand organically - if you would like to partner with us, send us a message in the channel and let's talk. <br/><br />
            <button>
            <a href="https://join.slack.com/t/fullstackapprentice/shared_invite/enQtMzk4NTUzMjkyNDA0LTg1NGM2ZGU0YzI2NTU4N2NjZDViNjBjYTdiODQ3MmJiMmM3NGE3OTY2OGI5M2EyYmQ4OGUxYjU0MTZkZjYyZWE">Join FSA Slack Channel</a></button>
            <br />
        </p>
      </React.Fragment>
    )
  }
}
