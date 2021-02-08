import {connect} from 'react-redux'
import React, { Component } from 'react'
import {addNewComment, deletePost, toggleLike} from '../actions/postActions'
import LeftArrow from '../images/icons8-back-26.png'
import RightArrow from '../images/icons8-forward-26.png'
import { Link } from 'react-router-dom'
import Comments from './Comments'

class Post extends Component{
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    toggleLike = (post) => {
		this.props.toggleLike(post.id);
	}
    numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
    render() {
        const {postsID} = this.props; // to check current post on screen
        const likeColor = this.props.post && this.props.post.like ? "blue" : "black";
        const index = this.props.post ? postsID.indexOf(this.props.post.id) : -1;
        const leftButton = index>0 ? (
            <Link to={'/'+postsID[index-1]} className="fab arrow-button waves-effect waves-light left center-left">
                <img className='fab-content' src={LeftArrow} alt="Previous"/>
            </Link>
        ) : null;
        const rightButton = index<postsID.length-1 ? (
            <Link to={'/'+postsID[index+1]} className="fab arrow-button waves-effect waves-light right center-right">
                <img className='fab-content' src={RightArrow} alt="Next"/>
            </Link>
        ) : null;
        const post = this.props.post ? (
            <div className="post post-details">
                <h2 className="center">{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <div className="row container">
                    <a href="#?" className="col s4 m2" onClick={() => {this.toggleLike(this.props.post)}}>
                        <div>
                            <i className={"material-icons icon-" + likeColor}>favorite</i>
                        </div>
                        <p className="small-font">{this.numberWithCommas(this.props.post.likes)}</p>
                    </a>
                    <a href="#comment-section" className="col s4 m2">
                        <div>
                            <i className="material-icons icon-black">chat</i>
                        </div>
                        <p className="small-font">{this.numberWithCommas(this.props.post.comments)}</p>
                    </a>
                    <a className='col s4 m2' href='/' data-target='dropdown1'>
                        <i className="material-icons icon-black">share</i>
                    </a>
                    <a href="" className="col s6 m2 right" onClick={this.handleClick}>
                        <div>
                            <i className="material-icons icon-blue">delete</i>
                        </div>
                    </a>
                </div>
                <div className="row center">
                    {leftButton}
                    {rightButton}
                </div>
                <div id="comment-section" className="row divider container grey darken-1"></div>
                <Comments addNewComment={this.props.addNewComment} comments={this.props.post.commenters} postID={this.props.post.id} />
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
        },
        toggleLike: (id) => {
            dispatch(toggleLike(id));
        },
        addNewComment: (comment) => {
            dispatch(addNewComment(comment))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);