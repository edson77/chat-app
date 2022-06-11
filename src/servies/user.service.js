import axios from 'axios';
import authHeader from './auth-header';
const API_URL = "http://127.0.0.1:8000/api/v1";
class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
  updateImage(image_url) {
    let formData = new FormData()
    formData.append('image_url', image_url)
    return axios.post(`${API_URL}/profile-image/`, formData, {
      headers: authHeader()
    })
      .then(response => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      });
  }
  getAuthUser() {
    return axios.get(API_URL + '/user-infos/', { headers: authHeader() });
  }
  getUser(userId) {
    return axios.get(API_URL + '/user-infos/'+userId, { headers: authHeader() });
  }
  getUserMessage(userId) {
    return axios.get(API_URL + '/user-message/'+userId, { headers: authHeader() });
  }
  getUsers() {
    return axios.get(API_URL + '/all-users/', { headers: authHeader() });
  }
  updateInfos(lastName, firstName, email, phone, about) {
    let formData = new FormData()
    formData.append('name', lastName + ' ' + firstName)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('about', about)
    return axios.put(`${API_URL}/user-infos/`, formData, {
      headers: authHeader(),
    }).then(response => {
      window.flash(response.data.message, 'success');
      console.log(response.data)
      // history.push('/login');
      // window.location.reload();
    })
      .catch((err) => {
        window.flash(err.response.data.message, 'error')
      });
  }
  changePassword(oldPassword, password, passwordConfirmation) {
    let formData = new FormData()
    formData.append('old_password', oldPassword)
    formData.append('password', password)
    formData.append('password_confirmation', passwordConfirmation)
    return axios.put(`${API_URL}/reset-password/`, formData, {
      headers: authHeader(),
    }).then(response => {
      window.flash(response.data.message, 'success');
      console.log(response.data)
      // history.push('/login');
      // window.location.reload();
    })
      .catch((err) => {
        window.flash(err.response.data.message, 'error')
      });
  }
}
export default new UserService();