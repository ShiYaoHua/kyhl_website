/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// 热门资讯
import React,{ useState,useEffect } from 'react'
import { Link, useHistory} from "react-router-dom"
import { List } from 'antd'
import 'antd/dist/antd.css' 
import '../style/information.scss'
import logo from '../static/img/home/logo.png'
import code from "../static/img/code.png"
import banner from "../static/img/news.png"
import axios from 'axios';

//函数组件
export default function Information(){
    const [index,setIndex] = useState(1);
    const [keyWord,setKeyWord] = useState('drpd');
    const [data,setData] = useState([]);
    const history = useHistory();
    const baseUrl = 'https://api.zhongshoutang.com';
    const [current,setCurrent] = useState(1); 
    const [total,setTotal] = useState(0);

    function getApi(key){
        axios.get(`https://api.zhongshoutang.com/app/tk/app/article/queryArticleList?currentPage=${current}&type=1&keyWord=${key}`).then((response)=>{
            const res = response.data;
            if(res.code === '0000'){
                setData(res.entity.articleList);
                console.log(res.entity.page.totalPageSize)
                setTotal(res.entity.page.totalResultSize)
                console.log(total)
            }
        })
    }
    useEffect(()=>{
        getApi('drpd');
    },[])
    //同class组件的生命周期 
    return <div className="information">
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
                    <a className={index === 1 ?'checked':''} >热门资讯</a>
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
            <img src={banner} className="banner"/>
            <h1 className="title-big">热门资讯</h1>
            <div className="content">
                <ul className="title">
                    <li>
                        <a className={keyWord==='drpd'?'selected':''} onClick={()=>{
                            setKeyWord('drpd')
                            getApi('drpd');
                        }}>达人频道</a>
                    </li>
                    <li>
                        <a className={keyWord==='kjpd'?'selected':''} onClick={()=>{
                            setKeyWord('kjpd')
                            getApi('kjpd');
                        }}>科普频道</a>
                    </li>
                    <li>
                        <a className={keyWord==='zjpd'?'selected':''} onClick={()=>{
                            setKeyWord('zjpd')
                            getApi('zjpd');
                        }}>专家频道</a>
                    </li>
                </ul>
                <div className="right-list">
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            current:current,
                            pageSize: 10,
                            total:total,
                            onChange: page => {
                                setCurrent(page);
                                axios.get(`https://api.zhongshoutang.com/app/tk/app/article/queryArticleList?currentPage=${current}&type=1&keyWord=${keyWord}`).then((response)=>{
                                    const res = response.data;
                                    if(res.code === '0000'){
                                        setData(res.entity.articleList);
                                    }
                                })
                            },
                        }}
                        dataSource={data}
                        renderItem={item => (
                            <div className="option" onClick={()=>{
                                
                            }}>
                                <div className="left-box">
                                    <div className="authou-content">
                                        <img className="author-img" src={item.avatar}/>
                                        <span>{item.author}</span>
                                    </div>
                                    <h2 className="f-s-20">{item.title}</h2>
                                    <p className="line-3" dangerouslySetInnerHTML={{__html:item.description}}></p>
                                    <p className="c-9">{item.clickTimes}人阅读</p>
                                </div>
                                <img className="list-img" src={baseUrl + item.picture}/>
                            </div>
                        )}
                    />
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