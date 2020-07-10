import axios from 'axios'

interface transaction {
    name?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
    token?: string | null;
}

export const post = async (url:string, params:transaction) => {
    let head = {headers: { 'Content-Type': 'application/json' }}
    
    return await axios
        .post(url, params, head)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const check = async (url: string, params: transaction) => {
    
    return await axios
        .post(url, params, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getData = async (url: string, token?: string) => {
    let head;
    if(token) {
        head = { 'Authorization': `Bearer ${token}` }
    } else {
        head = { 'Content-Type': 'application/json' }
    }
    return await axios
        .get(url,{
            headers: head
        })
        .then(response => {
            return response
        })
        .catch(err => {
            return err
            
        })
}

// export const checkGet = async (url: string, params: transaction) => {
    
//     return await axios
//         .post(url, params, {
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(response => {
//             console.log(response)
//             return response
//         })
//         .catch(err => {
//             console.log(err)
//             return err.response
//         })
// }


// export const get = async (url: string, params: transaction) => {
    
//     return await axios
//         .post(url, params, {
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(response => {
//             console.log(response)
//             return response
//         })
//         .catch(err => {
//             console.log(err)
//             return err.response
//         })
// }

