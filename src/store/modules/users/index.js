export default{
    state: {
        users: JSON.parse(localStorage.getItem('users')) ?? [],
        isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) ?? false
    },
    getters:{
        users(state){
            return state.users
        }
    },
    mutations:{
        signUp(state, payload){
            const id = Math.floor(Math.random() * 1000)
            state.users.push({id: id, name: payload.name, login: payload.login, password: payload.password})
            state.isLoggedIn = true
            localStorage.setItem('users', JSON.stringify(state.users))
            localStorage.setItem('isloggedIn', JSON.stringify(state.isLoggedIn))
        },
        signIn(state){
            state.isLoggedIn = true
            localStorage.setItem('isloggedIn', JSON.stringify(state.isLoggedIn))
        }
    }
}