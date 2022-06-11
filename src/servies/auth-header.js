export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return { 
            'Authorization': 'Token ' + user.token,
            'accept': 'application/json',
            'content-type': 'multipart/form-data'
        };
    } else {
        return {};
    }
}