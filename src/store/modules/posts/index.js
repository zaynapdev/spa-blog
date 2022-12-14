export default{
    state: {
      posts: JSON.parse(localStorage.getItem('posts')) ?? [
        {
          path: '/post/1',
          userId: '707',
          id: 1,
          title: 'Why Is My Cat So Attached To Me?',
          img: require('@/assets/1.webp'),
          text: "A cat ever so attached to you from the get-go perhaps had a connection with you. The connection can be founded on various reasons that highly involves your cat's feelings towards you. Perhaps, your cat feels secure with you more than anyone else, that's why it has grown to become attached to you. It is also good to know that perhaps you and your cat share some sort of a trust bond so strong wherein your cat does not even want to share this bond with anyone else but you. A bit flattering isn't it?"
        },
        {
          path: '/post/2',
          userId: '370',
          id: 2,
          title: '7 Reasons Why Do Cats Groom Each Other',
          img: require('@/assets/2.webp'),
          text: "Usually, you will see mother cats groom their kittens clean. I guess this occurs for obvious reasons like those cute tiny kittens are still unable to do so themselves. As newborns, they are yet to develop that skill to groom themselves. Mother cats grooming their kittens clean has a lot of purposes: first, keeping their kittens clean and to remove all the unnecessary elements in their kittens’ fur coming from birth; second, to teach their kittens on how to groom themselves; third, mother cats lick kittens heads and genitals in order to encourage the cats to excrete its waste."
        },
        {
          path: '/post/3',
          userId: '707',
          id: 3,
          title: '7 Reasons Why Do Cats Chase Their Tail',
          img: require('@/assets/3.webp')
        }
      ],
      imgs: [require('@/assets/1.webp'),  require('@/assets/2.webp'),  require('@/assets/3.webp')]
    },
    getters: {
      posts (state) {
        return state.posts
      }
    },
    mutations: {
      addNewPost(state, payload){
        if (state.posts[payload.id] == undefined) {state.posts[payload.id] = []}
        const id = Math.floor(Math.random() * 1000)
        const img = state.imgs[Math.floor(Math.random() * state.imgs.length)]
        state.posts.push({path: `/post/${id}`, userId: payload.userId, id: id, title: payload.title, img: img, text: payload.text})
        localStorage.setItem('posts', JSON.stringify(state.posts))
        console.log(payload)
      }
    },
    actions: {
    },
    modules: {
    }
}