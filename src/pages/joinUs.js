/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// 加入我们
import React,{ useState } from 'react'
import { Link, useHistory} from "react-router-dom"
import '../style/joinUs.scss'
import Footer from '../components/footer'
import logo from '../static/img/home/logo.png'
import code from "../static/img/code.png"
import banner from "../static/img/joinUs.png"

//函数组件
export default function JoinUs(){
    const [index,setIndex] = useState(6);
    const history = useHistory();
    //同class组件的生命周期
    return <div className="joinUs">
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
                        setIndex(4)
                        history.push('/aboutUs')
                    }}>关于我们</a>
                </li>
                <li>
                    <a className={index === 5 ?'checked':''} onClick={()=>{
                        setIndex(5);
                        history.push('/community')
                    }}>社会责任</a>
                </li>
                <li>
                    <a className={index === 6 ?'checked before':''}>加入我们</a>
                </li>
            </ul>
        </div>
        <div className="container">
            <img src={banner} className="banner"/>
            <h1 className="title-big">加入我们</h1>
            <div className="content">
               <div className="option">
                   <h1>电商客服专员</h1>
                   <h2>职位详情</h2>
                   <p>
                    岗位职责：<br/>
                    1.接待主动来访客户的线上售前咨询，解惑答疑，了解客户需求，引导客户转化，促成订单成交；<br/>
                    2.按照给定的标准流程，处理客户的相关售后问题和突发事件，避免产生客诉；<br/>
                    3.根据部门整体的季度销售任务，完成相应的个人销售目标，提高个人的销售服务水平；<br/>
                    4.通过日常的销售工作总结，定期向客服团队分享优秀话术和反馈需改进的问题；<br/>
                    5.完成部门分配的其他工作相关事宜;<br/><br/>
                    岗位要求：<br/>
                    1.年龄20-35周岁；头脑灵活，具备良好的沟通表达能力和应变能力，男女不限；<br/>
                    2.拥有电子商务领域，1年以上，在线销售客服的工作经验，包括但不限于天猫，京东，自营网站等；<br/>
                    3.具有一定的销售沟通技巧，工作主动认真，学习能力强，服务意识好；<br/>
                    4.在线客服，因有晚班需求和大促活动需求，要能够接受弹性工作时间和晚班的安排;<br/>
                    5.熟悉电脑常用的基本操作，办公软件，打字速度快，基本要求55字/分钟以上；（可自行百度搜索，测试结果）；<br/>
                    6.拥有笔记本电脑，台式机等IT领域销售经验的优先；<br/>
                   </p>
                   <h2>工作地点</h2>
                   <p>北京市朝阳区望京阜通东大街18号天启大厦2219室</p>
                   <p>简历投递邮箱：liujia@zhognshoutang.com</p>
               </div>
               <div className="option">
                   <h1>产品运营</h1>
                   <h2>职位详情</h2>
                   <p>
                    岗位详情：<br/>
                    1.全日制本科及以上学历，经济、金融、计算机、汉语言文学、广告、电子商务等相关专业，2年以上工作经验；<br/>
                    2.熟悉互联网产品的运营；<br/>
                    3.具备互联网思维，对网络热点的把握有较强的敏锐度；<br/>
                    4.具备组织策划各种网络活动，并能够完成方案设计实施的能力；<br/>
                    5.具备较强协调、执行能力；具备很强的责任感与积极的工作态度，做事严谨;<br/>
                    6.具备良好的口头及书面表达能力；学习能力强，熟练使用办公软件、设备等；<br/>
                   </p>
                   <h2>工作地点</h2>
                   <p>北京市朝阳区望京阜通东大街18号天启大厦2219室</p>
                   <p>简历投递邮箱：liujia@zhognshoutang.com</p>
               </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
}