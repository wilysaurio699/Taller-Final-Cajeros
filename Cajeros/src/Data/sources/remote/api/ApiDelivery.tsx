import axios from 'axios';



const ApiDelivery = axios.create({
    baseURL: 'http://169.254.232.146:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});


export { ApiDelivery };
