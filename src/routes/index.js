import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView.vue';
import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  // mode:'histoty' 는 url에 붙는 # 제거하는 것
  mode: 'history',
  routes: [
    // path: url 주소
    // component: url 주소로 갔을 때 표시될 컴포넌트(보여질 페이지)
    // redirect: 처음에 보여질 페이지
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      // component: createListView('NewsView'),
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            // bus.$emit('end:spinner');
            next();
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    {
      path: '/ask',
      name: 'ask',
      // component: createListView('AskView'),
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            next();
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: createListView('JobsView'),
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            next();
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});
