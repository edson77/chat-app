import {history} from '../_helper/history'
import axios from "axios";
const API_URL = "http://127.0.0.1:8000/api/v1";
class AuthService {
   login(email, password) {
        let formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
        return axios.post(`${API_URL}/login/`, formData, {
            headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data'
            },
        })
            .then(response => {
                if (response.data.data[0].token) {
                    localStorage.setItem("user", JSON.stringify(response.data.data[0]));
                }
                window.flash(response.data.message, 'success');
                history.push('/');
                window.location.reload()
                
               
            })
            .catch((err) =>{
                window.flash(err.response.data.message, 'error')
                console.log(err.response.data.message)
            });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(lastName, firstName, email, password, confirmPassword) {
        let formData = new FormData()
        formData.append('name', lastName + ' ' + firstName)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('confirmPassword', confirmPassword)
        return axios.post(`${API_URL}/register/`, formData, {
            headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data'
            },
        }).then(response => {
            window.flash(response.data.message, 'success');
            history.push('/login');
            window.location.reload();
        })
        .catch((err) =>{
            window.flash(err.response.data.message, 'error')
        });
    }
}
export default new AuthService();