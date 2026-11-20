import {useEffect,useRef} from 'react';import gsap from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';import {useTranslation} from 'react-i18next';
import {Swiper,SwiperSlide} from 'swiper/react';import {FreeMode,Keyboard,A11y} from 'swiper/modules';import 'swiper/css';import 'swiper/css/free-mode';
import {Scale,Gavel,Users,Building2,Home,Landmark,MessageSquareText,ArrowUpRight} from 'lucide-react';import useMagnetic from '../hooks/useMagnetic';gsap.registerPlugin(ScrollTrigger);
const icons=[Scale,Gavel,Users,Building2,Home,Landmark,MessageSquareText],W=[440,360,400,480,360,420,380];
function Card({i,title,text}){const Ic=icons[i],ar=useMagnetic(.6);
const mv=e=>{const el=e.currentTarget,b=el.getBoundingClientRect(),x=(e.clientX-b.left)/b.width,y=(e.clientY-b.top)/b.height;el.style.setProperty('--mx',x*100+'%');el.style.setProperty('--my',y*100+'%');el.style.transform=`perspective(900px) rotateY(${(x-.5)*9}deg) rotateX(${(.5-y)*9}deg) translateY(-6px)`};
return <article className="card gb pc" onMouseMove={mv} onMouseLeave={e=>e.currentTarget.style.transform=''} style={{height:i%2?430:480,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}><span className="num" style={{fontSize:'clamp(4.5rem,8vw,7rem)'}}>0{i+1}</span><Ic size={38} strokeWidth={1} color="var(--gold)"/></div>
<div><h3 className="display" style={{fontSize:'clamp(1.5rem,2.4vw,2.1rem)',lineHeight:1.35,margin:'0 0 .8rem'}}>{title}</h3><p style={{color:'var(--mute)',lineHeight:1.8,margin:0}}>{text}</p></div>
<span ref={ar} style={{alignSelf:'flex-end',width:48,height:48,border:'1px solid var(--gold)',display:'grid',placeItems:'center',color:'var(--gold)'}}><ArrowUpRight size={20}/></span></article>}
export default function Practice(){const {t,i18n}=useTranslation();const root=useRef();const items=t('practice.items',{returnObjects:true});const ar=i18n.language==='ar';
useEffect(()=>{const c=gsap.context(()=>gsap.from('.pc',{y:70,opacity:0,stagger:.1,duration:1.2,ease:'expo.out',scrollTrigger:{trigger:root.current,start:'top 70%'}}),root);return()=>c.revert()},[]);
return <section id="practice" ref={root} style={{padding:'clamp(80px,12vw,160px) 0',background:'var(--bg2)',overflow:'hidden'}}><div className="wrap">
<h2 className="display gold-text" style={{fontSize:'clamp(3rem,7.5vw,6rem)',margin:'0 0 3.5rem',lineHeight:1.3}}>{t('practice.title')}</h2></div>
<Swiper key={i18n.language} dir={ar?'rtl':'ltr'} modules={[FreeMode,Keyboard,A11y]} freeMode keyboard slidesPerView="auto" spaceBetween={24} slidesOffsetBefore={Math.max(20,(innerWidth-1280)/2+48)} slidesOffsetAfter={40} style={{paddingBottom:30}}>
{items.map((it,i)=><SwiperSlide key={i} style={{width:`min(${W[i]}px,82vw)`,height:'auto',alignSelf:i%2?'flex-end':'flex-start'}}><Card i={i} title={it[0]} text={it[1]}/></SwiperSlide>)}</Swiper></section>}
