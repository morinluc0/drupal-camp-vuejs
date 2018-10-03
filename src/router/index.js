import Vue from 'vue'
import Router from 'vue-router'

import CreateArticle from '../components/CreateArticle'
import NodeList from '../components/NodeList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: NodeList
    },
    {
      path: '/create',
      component: CreateArticle
    }
  ],
  mode: 'history'
})
