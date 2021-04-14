import React, { component } from "react";
import s from "./profile.module.css"
import Post from "./post/Post";
import New_post from "./new_post/new_post.jsx";
import Post_wall from "./post_wall/Post_wall.jsx";
import New_post_container from "./new_post/new_post_container";
import {connect} from "react-redux";
import Profile from "./Profile";
import {set_profile_data} from "../../redux/profileReducer";
import * as axios from "axios"
import {withRouter} from "react-router-dom"

class ProfileApi extends React.Component {

    componentDidMount() {
        debugger
        let userId=this.props.match.params.userId;

        axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+userId).then(response => {
            this.props.set_profile_data(response.data)

        })


    }

    render() {
        return(
        <Profile profile_data={this.props.profile_data}/>
        )
    }


}





let mapStateToProps=(state)=>{
    return(
        {
            profile_data:state.posts.profile_data
        }
    )
}

let Profile_rout= withRouter(ProfileApi);
  const Profile_container=connect(mapStateToProps,{set_profile_data})(Profile_rout)

  export default Profile_container;