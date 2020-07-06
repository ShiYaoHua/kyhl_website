/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useState } from 'react'
import { Link, useHistory} from "react-router-dom"
import '../style/home.scss'
import logo from '../static/img/home/logo.png'
import logoBg from '../static/img/home/logobg.mp4'
import poster from '../static/img/home/poster.jpeg'
import mobile from '../static/img/home/mobile_bg.png'
import mobileVideo from '../static/img/home/mobile.mp4'
import ios from '../static/img/home/ios.png'
import android from '../static/img/home/android.png'
import iosCode from "../static/img/home/ios_code.png"
import androidCode from "../static/img/home/android_code.png"

//函数组件
export default function Home(){
    const [index,setIndex] = useState(0);
    const [type,setType] = useState(0);  //0:不显示 1：iOS 2：安卓
    const history = useHistory();
    //同class组件的生命周期 
    return <div className="home">
        <div className="nav">
            <img className="logo" src={ logo }/>
            <Link to="/" className="kyhl">康养互联</Link>
            <ul>
                <li onClick={()=>{setIndex(0)}}>
                    <a className={index === 0 ?'checked':''} >首页</a>
                </li>
                <li>
                    <a className={index === 1 ?'checked':''} onClick={()=>{
                        setIndex(1);
                        history.push('/information')
                    }}>热门资讯</a>
                </li>
                <li>
                    <a className={index === 2 ?'checked':''} onClick={()=>{
                        setIndex(2);
                        history.push('/cooperation')
                    }}>业务合作</a>
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
            <div className="video-bg">
                <video controls="controls" autoPlay loop muted poster={poster} src={logoBg} preload="auto" className="my-video"></video>
            </div>
            <div className="content">
                <div className="middle">
                    <div className="middle-wrapper">
                        <div className="iphone-wrapper">
                            <div className="iphone">
                                <div className="iphone-mp4">
                                    <video controls="controls" autoPlay loop muted poster={poster} src={mobileVideo} preload="auto" className="my-video"></video>
                                </div>
                                <img className="iphone-case" src={ mobile }/>
                            </div>
                        </div>
                        <div className="description">
                            <h1>康养互联</h1>
                            <p>打造一亿健康家庭</p>
                            <div className="qrcodes">
                                <div className="ios">
                                    <div className="flex-box" onMouseEnter={()=>{
                                        setType(1)   
                                    }} onMouseLeave={()=>{
                                        setType(0)   
                                    }}>
                                        <img className="ios-icon" src={ios}></img>
                                        <span>iOS 版</span>
                                    </div>
                                    {type===1?<img className="qrcodes-img" src={iosCode}/>:''}
                                </div>
                                <div className="android">
                                    <div className="flex-box" onMouseEnter={()=>{
                                        setType(2)
                                    }} onMouseLeave={()=>{
                                        setType(0)   
                                    }}>
                                        <img className="android-icon" src={android}></img>
                                        <span>Android 版</span>
                                    </div>
                                    {type===2?<img  className="qrcodes-img" src={androidCode}/>:''}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="home-footer">
                <p>Copyright © 2016-2025 北京众寿堂医疗科技有限公司 版权所有 保留一切权利 备案号:京ICP备19019925号-1</p>
                <p>经营性网站备案中心 可信网站信用评估 网络警察提醒你 诚信网站 中国互联网举报中心</p>
                <p>公司全称：北京众寿堂医疗科技有限公司 地址：北京市朝阳区望京阜通东大街18号天启大厦2219室 联系电话：010-87389261</p>
            </div>
        </div>
    </div>
}