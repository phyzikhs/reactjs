import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { uploadProfilePic, deleteProfilePic } from '../../store/actions/authActions';
import profileImage from "../../img/default-profile.png";
import { signOut } from '../../store/actions/authActions';

export class Profile extends Component {
  state = {
    firstName: this.props.profile.firstName,
    lastName: this.props.profile.lastName,
    image: null,
    progress: [0]
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // console.log(file, this.props.auth.uid);
      const imageFile = new File([file], this.props.auth.uid)
      this.setState({
        image: imageFile
      })
      // console.log(this.props);
      // const storageRef = app.storage();
      const formData = new FormData()
      formData.append('image', imageFile, this.props.auth.uid) // for unique profile pic, using uid
      this.props.uploadProfilePic(imageFile, this.state.progress);
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  componentDidMount () {
    document.getElementById('progress-bar').style.visibility = 'hidden';
  }
  render() {
    const { auth } = this.props;
    return auth.uid ? (
      <div className="container">
        <div class="card card-custom">
          <h1 className="center grey-text text-darken-4">{this.props.profile.firstName} {this.props.profile.lastName}</h1>
          <div className="button-section">
            <input
              id="select-file"
              style={{display: 'none'}}
              type="file" onChange={this.handleFileChange}
              ref={fileInput => this.fileInput = fileInput}
              accept="image/*" 
            />
              <div className="container">
                <button onClick={() => this.fileInput.click()} className="left btn grey darken-3 waves-effect waves-light z-depth-0">
                  <i class="material-icons grey-icon">edit</i>
                  Edit
                </button>
                {this.props.profile.profilePicURL ? (
                  <button onClick={() => this.props.deleteProfilePic(auth.uid)} className="right btn grey lighten-1 waves-effect waves-light z-depth-0">
                    <i className="material-icons pink-icon">delete</i>Remove
                  </button>
                ) : null}
              </div>
          </div>
          <div className="image-section">
            <div className="profile-pic">
              <div id="progress-bar" className="grey darken-1">
                  <div id="progress-status" className="progress grey darken-3"></div>
              </div>
              {this.props.profile.profilePicURL ? (
                <img className="profile-pic" src={this.props.profile.profilePicURL} alt="Taz" />
              ) : (
                <img className="default-pic" src={profileImage} alt="Taz" />
              )}
            </div>
          </div>
          
          <div className="card-content">
            <p class="title">Marioplan member</p>
            <a href="#"><i class="fa fa-dribbble"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </div>
          <div className="center">
            <button onClick={this.props.signOut} className="btn grey lighten-1 z-depth-0">Log out</button>
          </div>
      </div>
      </div>
    ) : (
      <Redirect to='/signin' />
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut())
    },
    uploadProfilePic: (pic, progress) => dispatch(uploadProfilePic(pic, progress)), //currently image not formData
    deleteProfilePic: (name) => dispatch(deleteProfilePic(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
