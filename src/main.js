import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'
import DetailPage from './pages/detail'
import Analysis from './pages/detail/analysis'
import Count from './pages/detail/count'
import Forecast from './pages/detail/forecast'
import Publish from './pages/detail/publish'
import OrderList from './pages/orderList'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/order',
      component: OrderList
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'count',
          component: Count
        },
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'publish',
          component: Publish
        }
      ]
    },
  ]
})
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
