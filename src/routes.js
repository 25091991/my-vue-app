import LandingPage from './components/LandingPage'
import Home from './components/home'
import about from './components/about'
import contact from './components/contact'
import login from './components/auth/login'
import register from './components/auth/register'


const routes = [
    { path: '/', component: LandingPage, name:'LandingPage'},
    { path: '/home', component: Home, name:'Home'},
    { path: '/about', component: about, name:'about'},
    { path: '/contact', component: contact, name:'contact'},
    { path: '/login', component: login, name:'login'},
    { path: '/register', component: register, name:'register'},

]

export default routes