export default{
    state: {
        users: JSON.parse(localStorage.getItem('users')) ?? [],
        logged: JSON.parse(localStorage.getItem('logged')) ?? false
    },
    getters:{
        users(state){
            return state.users
        },
        checkIfLogged(state){
            return state.logged
        }
    },
    mutations:{
        signUp(state, payload){
            const id = Math.floor(Math.random() * 1000)
            state.users.push({id: id, name: payload.name, login: payload.login, password: payload.password})
            state.logged = true
            localStorage.setItem('users', JSON.stringify(state.users))
            localStorage.setItem('logged', JSON.stringify(payload.login))
        },
        signIn(state, payload){
            state.logged = true
            localStorage.setItem('logged', JSON.stringify(payload))
        },
        logOut(state){
            state.logged = false
            localStorage.setItem('logged', JSON.stringify(state.logged))
        }
    }
}