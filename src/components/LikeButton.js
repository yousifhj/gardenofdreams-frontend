import React from 'react'
import style from './Button.css'


class LikeButton extends React.Component {

    state = {
        likes: 0
    }

    addLike = () => {
        let newCount = this.state.likes + 1; 
        this.setState( {
            likes: newCount
        })
    }

    render() {
        // return <button onClick={this.addLike} style={{float: 'right'}}>Likes: {this.state.likes} </button>
        const likes = this.state.likes;
        if (likes === 0) {
            return (
                <button
                    className="button"
                    onClick={this.addLike}
                >
                    <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
                </button>
            );
        }
        if (likes === 1) {
            return (
                <button className="button" onClick={this.addLike}>
                    <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>
                </button>
            );
        }
        if (likes > 1) {
            return (
                <button className="button" onClick={this.addLike}>
                    <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>{" "}
                    {likes}
                </button>
            );
        }            
    }

}

export default LikeButton 