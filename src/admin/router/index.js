import Vue from "vue";
import VueRouter from "vue-router";
import routes from '@/router/routes';
import axios from 'axios';
import store from '@/store';
import {CONSTS} from '../../helpers/consts'

Vue.use(VueRouter); 

const router = new VueRouter({ routes });

const baseURL = CONSTS.BASEURL;
const guard = axios.create({ baseURL }); 

router.beforeEach(async (to, from, next) => {
  
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserLogged = store.getters["user/userIsLogged"];
                     
    
  if (isPublicRoute === false && isUserLogged === false) {     
    const token = localStorage.getItem('token');
    guard.defaults.headers['Autorezation'] = `Bearer ${token}`;   
    try {
      const response = await guard.get('/user');
      store.commit('user/SET_USER', response.data.user); 
      next(); 
    } catch (error) {      
      router.replace('/login'); 
      localStorage.removeItem('token'); 
    }
  } else {
    next();
  }
});

export default router;
