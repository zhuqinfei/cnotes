import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import Notebooks from '../components/NotebookList'
import NoteDetail from '../components/NoteDetail'
import TrashDetail from '../components/TrashDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias:'/notebooks',
      component: Notebooks
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/note',
      component: NoteDetail
    },
    {
      path: '/trash',
      component: TrashDetail
    },
  ]
})
