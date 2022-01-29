import React, { Component } from "react";
import Image from './Image'

class UserProfile extends Component {
  render() {
    return(
    <div>
      <p>{this.props.user.name}</p>
      <p>{this.props.user.email}</p>
      <Image source={ this.props.user.avatar } alternativeText='User Avatar'/>
    </div>
  )}
}

export default UserProfile;