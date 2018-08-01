import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  showCard: {},
  cards: [
    { title: '技术', isClass: false, src: '../static/images/module_code.jpg', flex: 6 },
    { title: '视频', isClass: false, src: '../static/images/module_video.jpg', flex: 6 },
    { title: '音乐', isClass: false, src: '../static/images/module_music.jpg', flex: 6 },
    { title: '图片', isClass: false, src: '../static/images/module_pic.jpeg', flex: 6 },
    { title: '杂谈', isClass: false, src: '../static/images/module_talk.jpg', flex: 6 }
  ]
}

const getters = {
  getCards (state) {
    return state.cards
  },
  showCard (state) {
    console.log('getters')
    // console.log(state.showCard)
    return state.showCard
  }
}

const mutations = {
  goModuleLink (state, payload) {
    state.cards.find((card) => {
      if (card.title === payload.title) {
        if (card.isClass === false) {
          card.isClass = true
          console.log(card.title, card.src, card.isClass)
        }
      }
    })
  }
}

const actions = {
  cards (context, payload) {
    state.showCard = {}
    const obj = {
      title: payload.title,
      isClass: payload.isClass,
      src: payload.src,
      flex: payload.flex
    }
    state.showCard = obj
    context.commit('goModuleLink', payload)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
