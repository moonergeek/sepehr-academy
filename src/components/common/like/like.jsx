import React from 'react';
import likeIcon from "../../../assets/img/like.png";
import GetUserDetails from "../../../core/services/API/GetUserDetail.api";
import LoginUser from "../../../core/services/API/Login.api";
import {useHistory} from "react-router-dom";


class Like extends React.Component {
    constructor() {
        super()
        this.state = {
            alreadyLiked: false,
            alreadyDisliked: false,
            likes: 100,
            dislikes: 25
        }
    }

    handleLike = () => {
        if (this.state.alreadyLiked === false) {
            if (this.state.alreadyLiked === false) {
                this.setState({
                    likes: this.state.likes + 1,
                    alreadyLiked: true
                })
                this.liked();
            } else {
                this.setState({
                    likes: this.state.likes - 1,
                    alreadyLiked: false
                })
                this.liked();
            }
        } else {
            this.setState({
                dislikes: this.state.dislikes - 1,
                alreadyDisliked: false,
                likes: this.state.likes + 1,
                alreadyLiked: false
            })
        }

    }

    handleDislike = () => {
        if (this.state.alreadyLiked === false) {
            if (this.state.alreadyDisliked === false) {
                this.setState({
                    dislikes: this.state.dislikes + 1,
                    alreadyDisliked: true
                })
            } else {
                this.setState({
                    dislikes: this.state.dislikes - 1,
                    alreadyDisliked: false
                })
            }
        } else {
            this.setState({
                dislikes: this.state.dislikes - 1,
                alreadyDisliked: false,
                likes: this.state.likes + 1,
                alreadyLiked: false
            })
        }
    }


    render() {
        return (
            <div>
                <div>

                </div>
                <img src={likeIcon} className = { this.state.alreadyLiked ? 'liked like-button' : 'like-button' } onClick = { this.handleLike }
                     />
                {/*Like | { this.state.likes }*/}
                {/*<img  src={likeIcon} className = { this.state.alreadyDisliked ? 'disliked like-button' : 'dislike-button' } onClick = { this.handleDislike } />*/}
                {/*    Dislike | { this.state.dislikes }*/}
                <style> { `
            .like-button, .dislike-button {
              font-size: 5px;
              height:20px;
              width:20px;
              position:relative;
              top:7px;
              margin-right:5px;
              color:   #ccc;
            }
            .liked, .disliked {
              font-weight: bold;
              color: #1565c0;
            }
          ` }
                </style>
            </div>
        );
    }
}

export default Like;


