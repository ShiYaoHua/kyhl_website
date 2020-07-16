/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// 社会责任
import React,{ useState } from 'react'
import { Link, useHistory} from "react-router-dom"
import '../style/community.scss'
import Footer from '../components/footer'
import logo from '../static/img/home/logo.png'
import code from "../static/img/code.png"
import banner from "../static/img/community.png"
import cooperation from '../static/img/cooperation.png'
import cooperation2 from '../static/img/cooperation2.png'
import cooperation3 from '../static/img/cooperation3.png'
import cooperation4 from '../static/img/cooperation4.png'

//函数组件
export default function Community(){
    const [index,setIndex] = useState(5);
    const history = useHistory();
    //同class组件的生命周期
    return <div className="community">
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
                    <a className={index === 5 ?'checked before':''}>社会责任</a>
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
            <h1 className="title-big">社会责任</h1>
            <div className="content">
                <h1>目标打造一亿健康家庭</h1>
                <img src={cooperation}/>
                <h1>解决健康美容、养生领域用户三大痛点</h1>
                <img src={cooperation2}/>
                {/* <h1>公司健康管理体系</h1>
                <h2>(一)科学的依据</h2>
                <p>公司依据医疗健康数据为25岁-65岁的用户提供九大健康管理体系</p>
                <img src={cooperation3}></img>
                <h2>(二) 科学的检测</h2>
                <p>
                    汇集中外医学科学家，生命管理专家制定健康管 理方案，健康管理方案分三大类  <br/>
                    1、健康人群预防疾病 <br/>
                    2、亚健康人群调理养生  <br/>
                    3、疾病人群治疗后康复 <br/>
                    4、金域集团基因检测，人体原始密码  <br/>
                    5、德国Wegame自然疗法   <br/>
                    6、定期检测系统及时时监测系统 <br/>
                </p>
                <img src={cooperation4}></img> */}
            </div>
            <Footer></Footer>
        </div>
    </div>
}