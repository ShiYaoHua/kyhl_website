/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// 关于我们
import React,{ useState } from 'react'
import { Link, useHistory} from "react-router-dom"
import '../style/aboutUs.scss'
import logo from '../static/img/home/logo.png'
import code from "../static/img/code.png"
import banner from "../static/img/aboutUs.png"
import sCode from "../static/img/sCode.png"
import gzhCode from "../static/img/gzhCode.png"

//函数组件
export default function AboutUs(){
    const [index,setIndex] = useState(4);
    const history = useHistory();
    //同class组件的生命周期 
    return <div className="aboutUs">
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
                    <a className={index === 4 ?'checked before':''} >关于我们</a>
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
            <h1 className="title-big">关于我们</h1>
            <div className="content">
                <h1>公司简介</h1>
                <p>北京众寿堂医疗科技有限公司是一家运用互联网和物联网技术，以科学的依据，为用户提供科学的检测和科学的指导，实现健康管理服务平台的公司。满足用户在健康时预防疾病，亚健康时调理， 疾病后康复的需求。为预防医学领域提供用户健康大数据。目前使用康养惠享小程序招募会员，康养互联APP提供健康、美容养生系列商品及健康管理服务。
                
                公司基于大健康产业康养美服务+新零售，通过商业模式创新，整合用户健康行为习惯数据，制定生态化多渠道引流营销方案，经过技术团队高效的迭代优化，目前旗下康养互联平台已支持海外200多个国家使用，平台上线2个月，付费用户高达20000人，迅速覆盖至全国300多个城市。解决健康、美容、养生领域的三大痛点，帮助会员更准确的了解自己身体的真实情况，找到适合自己的健康管理方式及适合自己的安全有效健康商品。

                公司以完善成熟的健康管理体系（科学的依据、科学的检测、科学的指导）为全民健康保驾护航。依据医疗健康数据为25岁-65岁的会员提供健康管理服务，依托于市场调研为女性开发出九大健康管理体系（皮肤管理、身材管理、女性私密管理、优生优育管理、内分泌调理、情绪管理、睡眠管理、抗衰老管理、预防癌症），为男性开发出六大管理体系（形象管理、运动管理、睡眠管理、抗衰老管理、慢性病管理、预防癌症）。通过战略合作伙伴金域医学，运用先进的基因检测技术、德国Wegame自然疗法和定期时时检测系统对平台会员进行科学的检测。根据检测结果，平台汇集的中外医学科学家，生命管理专家制定健康管理方案（健康人群预防疾病、亚健康人群调理养生、疾病人群治疗后康复）。</p>
                <h1>公司愿景及社会责任</h1>
                <p>
                每一天，我们都致力于守护您的健康，不忘初心，砥砺前行，追求卓越。我们的优质产品和服务会使每一个使用过平台的会员心情愉悦，神采焕发，享受更加健康的生活。公司的愿景是打造一亿健康家庭，为全民健康保驾护航，使命是为会员用户和股东创造更多的价值。公司深信，我们能带领旗下众多合作方改善人们的健康生活。同时履行我们的社会责任，积极参与助力国家的一系列健康惠民政策，同业内优秀的企业携手共同推动大健康产业，为构建和谐健康生态圈奉献一份力量！
                </p>
                <h1>战略伙伴</h1>
                <p>
                广州金域医学检验集团股份有限公司【股票代码：603882】是一家以第三方医学检验及病理诊断业务为核心的高科技服务企业，通过不断积累的“大平台、大网络、大服务、大样本和大数据”等核心资源优势，致力于为全国各级医疗机构提供领先的医学诊断信息整合服务。金域医学的核心创业团队自上世纪90年代即积极探索医学检验外包服务在中国的运营模式，开创了国内第三方医学检验行业的先河，经过多年的发展，现已成为国内第三方医学检验行业的市场领先企业。

                金域医学严格遵循国际标准，拥有先进的质量管理体系。截至2019年，共获得包括美国CAP、ISO15189在内的国内外认证认可证书38张，连续17年领先行业。检测结果为全球50多个国家和地区认可。
                </p>
                <h1>更多方式关注康养互联</h1>
                <div className="more-box">
                    <div className="option">
                        <img src={code} className="code"/>
                        <p>下载康养互联</p>
                    </div>
                    <div className="option">
                        <img src={sCode} className="code"/>
                        <p>关注微信小程序</p>
                    </div>
                    <div className="option">
                        <img src={gzhCode} className="code"/>
                        <p>关注微信公众号</p>
                    </div>
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