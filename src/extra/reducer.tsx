const userStatus = (user: {}) => (
    user
)

export const userReducer =  (state: any, action:any): any => {
    switch (action.type) {
        case 'LOGIN':
            return userStatus(action.payload)
        case 'REFRESH':
            return userStatus(action.payload)
        case 'LOGOUT':
            return userStatus(action.payload)
        default:
            break;
    }
}