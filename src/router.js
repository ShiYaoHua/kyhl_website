import React from 'react'
// BrowserRoute ：history路由 （需后端协助配置，否则刷新有问题）
// HashRouter : hash 路由 /#/ 路由

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'                 //首页
import Login from './pages/login'               //登录页
import Information from './pages/information'   //热门资讯
import Cooperation from './pages/cooperation'   //业务合作
import News from './pages/news'                 //新闻中心
import AboutUs from './pages/aboutUs'           //关于我们
import Community from './pages/community'       //社会责任
import JoinUs from './pages/joinUs'             //加入我们
import NoMatch from './pages/404'

export default function IRouter(){
    return <Router>
        <Switch>
            {/* exact严格匹配 */}
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/information' component={Information}></Route>
            <Route path='/cooperation' component={Cooperation}></Route>
            <Route path="/news" component={News}></Route>
            <Route path="/aboutUs" component={AboutUs}></Route>
            <Route path="/community" component={Community}></Route>
            <Route path="/joinUs" component={JoinUs}></Route>
            {/* 错误路由页面 */}
            <Route path='*' component={NoMatch}></Route>
        </Switch>
    </Router>
}