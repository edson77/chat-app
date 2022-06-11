import axios from 'axios';
import authHeader from './auth-header';
const API_URL = "http://127.0.0.1:8000/api/v1";
class MessageService {
    createMessage(userId,content) {
        let formData = new FormData()
        formData.append('content', content)
        return axios.post(`${API_URL}/user-message/${userId}/`, formData, {
            headers: authHeader()
        })
            .then(response => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err.response.data.message)
            });
    }

}
export default new MessageService();