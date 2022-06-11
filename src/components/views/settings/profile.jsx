
import React,{ useEffect, useState } from 'react';
import { connect } from "react-redux";
import UserService from '../../../servies/user.service';
import { updateImage } from "../../../actions/user";
const Profile = ({dispatch, isLoggedIn}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [imageUpload, setImageUpload] = useState("")
    useEffect(() => {
        UserService.getAuthUser().then(
            (response) => {
              setName(response.data.data[0]['name'])
              setEmail(response.data.data[0]['email'])
              setImage(response.data.data[0]['image_url'])
            },
            (error) => {
              const _content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
    }, [])
    const handleUpload = (e) => {
        let image = e.target.files[0]
        setImageUpload(e.target.files[0])
        dispatch(updateImage(image))
        setTimeout(() => {
            UserService.getAuthUser().then(
                (response) => {
                    setName(response.data.data[0]['name'])
                    setEmail(response.data.data[0]['email'])
                    setImage(response.data.data[0]['image_url'])
                },
                (error) => {
                    const _content =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
          }, 3000);  
    }
    return (
        <>
            <div className="card border-0">
                <div className="card-body">
                    <div className="row align-items-center gx-5">
                        <div className="col-auto">
                            <div className="avatar">
                                <img src={ image } alt="#" className="avatar-img" style={{ borderRadius:'50%', }} />

                                <div className="badge badge-circle bg-secondary border-outline position-absolute bottom-0 end-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                </div>
                                <input id="upload-profile-photo" className="d-none" type="file" accept="image/*" onChange={(e) => handleUpload(e)} />
                                <label className="stretched-label mb-0" for="upload-profile-photo"></label>
                            </div>
                        </div>
                        <div className="col">
                            <h5>{ name }</h5>
                            <p>{ email }</p>
                        </div>
                        <div className="col-auto">
                            <span className="text-muted">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
      isLoggedIn,
      message
    };
  }

export default connect(mapStateToProps)(Profile);