/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// 业务合作
import React,{ useState } from 'react'
import { Link, useHistory} from "react-router-dom"
import '../style/cooperation.scss'
import Footer from '../components/footer'
import logo from '../static/img/home/logo.png'
import code from "../static/img/code.png"
import banner from "../static/img/community.png"
import contactCode from '../static/img/contactCode.png'
//函数组件
export default function Cooperation(){
    const [index,setIndex] = useState(2);
    const history = useHistory();
    //同class组件的生命周期 
    return <div className="cooperation">
        <div className="nav">
            <img className="logo" src={ logo }/>
            <Link to="/" className="kyhl">康养互联</Link>
            <ul>
                <li onClick={()=>{setIndex(0)}}>
                    <a className={index === 0 ?'checked':''} onClick={()=>{
                        setIndex(0);
                        history.push('/home')
                    }}>首页</a>
                </li>
                <li>
                    <a className={index === 1 ?'checked before':''} onClick={()=>{
                        setIndex(1);
                        history.push('/information')
                    }}>热门资讯</a>
                </li>
                <li>
                    <a className={index === 2 ?'checked before':''}>业务合作</a>
                </li>
                <li>
                    <a className={index === 3 ?'checked':''} onClick={()=>{
                        setIndex(3);
                        history.push('/news')
                    }}>新闻中心</a>
                </li>
                <li>
                    <a className={index === 4 ?'checked':''} onClick={()=>{
                        setIndex(4);
                        history.push('/aboutUs')
                    }}>关于我们</a>
                </li>
                <li>
                    <a className={index === 5 ?'checked':''} onClick={()=>{
                        setIndex(5)
                        history.push('/community')
                    }}>社会责任</a>
                </li>
                <li>
                    <a className={index === 6 ?'checked':''} onClick={()=>{
                        setIndex(6);
                        history.push('/joinUs')
                    }}>加入我们</a>
                </li>
            </ul>
        </div>
        <div className="container">
            <img src={banner} className="banner"/>
            <h1 className="title-big">业务合作</h1>
            <div className="content">
                <img className="code" src={contactCode}/>
                <div className="right-box">
                    <h1>更多合作扫码咨询</h1>
                    <h1>商务咨询热线</h1>
                    <h1>15712981559</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
}