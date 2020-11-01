import Axios from 'axios'

const bootstrap = () => {
    return new Promise((resolve, reject) => {
        let http = Axios.create({
            withCredentials: true,
            baseURL: "http://dev.le-refuge-ardent.com/le-refuge-ardent/",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })

        http.get('/')
            .then(() => {
                console.log('%cbootstrap.end', 'color=darkblue', response.data);
                resolve();
            })
            .catch((error) => reject(error));
    })
}

export default bootstrap