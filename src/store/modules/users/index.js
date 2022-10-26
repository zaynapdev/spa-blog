import { auth } from "@/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export default{
    state: {
        user: JSON.parse(localStorage.getItem('user')) ?? null
    },
    getters:{
        user(state){
            return state.user
        }
    },
    mutations:{
        setUser(state, payload){
            state.user = payload
            console.log(state.user)
        },
        logOut(state){
            state.user = null
            localStorage.setItem('user', JSON.stringify(state.user))
        }
    },
    actions:{
        async signUp(context, {email, password}){
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response) {
                console.log(response)
                context.commit('setUser', response.user)
            } else {
                throw new Error()
            }
        },
        async signIn(context, {email, password}){
            const response = await signInWithEmailAndPassword(auth, email, password)
            context.commit('setUser', response.user)
        }
    }
}