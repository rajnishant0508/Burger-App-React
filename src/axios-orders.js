import axios from "axios";
const instance=axios.create({
    baseURL:'https://myburger-5de7a-default-rtdb.firebaseio.com/'
});
export default instance;