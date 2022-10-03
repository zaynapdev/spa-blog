export default{
    state: {
        users: JSON.parse(localStorage.getItem('users')) ?? []
    },
    getters:{
        users(state){
            return state.users
        }
    },
    mutations:{
        addNewUser(state, payload){
            const id = Math.floor(Math.random() * 1000)
            state.users.push({id: id, name: payload.name, login: payload.login, password: payload.password})
            localStorage.setItem('users', JSON.stringify(state.users))
        }
    }
}