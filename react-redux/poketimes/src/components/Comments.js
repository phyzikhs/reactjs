import React, { Component } from 'react'

class Comments extends Component {
  state = {
    author: "Web Master",
    newComment: ""
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    if (this.state.newComment) {
      this.props.addNewComment({
        ...this.state,
        
        postID: this.props.postID
      });
      this.setState({
        newComment: ""
      })
    }
  }

  
  render(){
    const {comments} = this.props;
    const commentList = (comments.length) ? (
      comments.map(comment => {
        return(
          <div className="col s12 container comment small-font" key={comment.id}>
            <p className="bold bottom-0">{comment.author}</p>
            <p className="top-0">{comment.comment}</p>
          </div>
        );
      })
    ) : (
      <p className="small-font">Be the first person to comment!</p>
    );
    return (
      <div className="row">
        <h5 className="col s12 container left small-font">Comments:</h5>
        
        <div className="container row">

        <form onSubmit={this.handleSubmit} className="white col s12">
          <div className="input-field col s6 m6">
            <label htmlFor="newComment">Comment</label>
            <input value={this.state.newComment} type="text" id="newComment" onChange={this.handleChange}/>
          </div>
          <div className="input-field col s1 m1">
            <button className="btn white z-depth-0">
              <i className="material-icons icon-black">send</i>
            </button>
          </div>
        </form>
        </div>

        {commentList}
      </div>
    )
  }
}

export default Comments
