import {connect} from 'react-redux'
import React, { Component } from 'react'
import {deletePost} from '../actions/postActions'
import LeftArrow from '../images/icons8-back-26.png'
import RightArrow from '../images/icons8-forward-26.png'
import { Link } from 'react-router-dom'

class Post extends Component{
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        console.log(this.props);
        const {postsID} = this.props;
        console.log(postsID);
        const index = postsID.indexOf(this.props.post.id);
        const leftButton = index>0 ? (
            <Link to={'/'+postsID[index-1]} className="fab arrow-button left center-left">
                <img className='fab-content' src={LeftArrow} alt="Previous"/>
            </Link>
        ) : null;
        const rightButton = index<postsID.length-1 ? (
            <Link to={'/'+postsID[index+1]} className="fab arrow-button right center-right">
                <img className='fab-content' src={RightArrow} alt="Next"/>
            </Link>
        ) : null;
        const post = this.props.post ? (
            <div className="post">
                <h2 className="center">{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <div className="center">
                    {leftButton}
                    <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
                    {rightButton}
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        );
        return (
            <div className="container">
                
                
                <h4>{post}</h4>
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    const postsID = [];
    for (let i = 0; i < state.posts.length; i++) {
        const element = state.posts[i];
        postsID.push(element.id);
    }
    return {
        post: state.posts.find(post => post.id===id),
        postsID
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id)); //dispatchEvent
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);