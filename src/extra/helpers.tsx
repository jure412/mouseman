import decode from 'jwt-decode'

export const checkAuth = ():boolean => {
    const token = localStorage.getItem('token')
    // console.log(token)
    if(!token) {
        return false
    }
    try {
        const {exp} = decode(token)
        console.log(exp - new Date().getTime() / 1000)
        if(exp < new Date().getTime() / 1000) {
            return false
        }
    } catch(e) {
        return false
    }
    // console.log(token)
    return true
}

