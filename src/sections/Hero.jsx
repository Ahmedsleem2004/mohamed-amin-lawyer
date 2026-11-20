import {useEffect,useRef,useState} from 'react';import gsap from 'gsap';import SplitType from 'split-type';import {useTranslation} from 'react-i18next';
import {Swiper,SwiperSlide} from 'swiper/react';import {Keyboard,A11y,Autoplay} from 'swiper/modules';import 'swiper/css';import {ChevronLeft,ChevronRight} from 'lucide-react';
import Btn from '../components/Btn';import useMagnetic from '../hooks/useMagnetic';
const shadow='0 40px 120px rgba(0,0,0,.75),0 0 90px rgba(212,175,55,.16)';
const Portrait=({alt,pos='50% 10%',w='min(460px,82vw)',ratio='4/5',fade='vertical'})=><div className="par" style={{width:w}}>
<div className="mask gb" style={{aspectRatio:ratio,overflow:'hidden',boxShadow:shadow,WebkitMaskImage:fade==='h'?'linear-gradient(90deg,transparent,#000 40%)':'linear-gradient(#000 80%,transparent)',maskImage:fade==='h'?'linear-gradient(90deg,transparent,#000 40%)':'linear-gradient(#000 80%,transparent)'}}>
<img className="px" src="/mohamed.jpg" alt={alt} fetchpriority="high" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:pos,transform:'scale(1.16)',display:'block'}}/></div></div>;
const Arrow=({children,label,...p})=>{const r=useMagnetic(.5);return <button ref={r} aria-label={label} {...p} style={{width:52,height:52,border:'1px solid var(--line)',background:'transparent',color:'var(--ink)',cursor:'pointer',display:'grid',placeItems:'center'}}>{children}</button>};
export default function Hero({ready}){const {t,i18n}=useTranslation();const ar=i18n.language==='ar';const S=t('slides',{returnObjects:true});
const [idx,setIdx]=useState(0),root=useRef(),sw=useRef(),sp=useRef(null);const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
useEffect(()=>{if(!ready||rm)return;const ctx=gsap.context(()=>{
const el=root.current.querySelector(`[data-slide="${idx}"]`),title=el.querySelector('.sl-title');
sp.current=new SplitType(title,{types:ar?'words':'chars,words'});const tg=ar?sp.current.words:sp.current.chars;
gsap.timeline({defaults:{ease:'expo.out'}}).fromTo(tg,{yPercent:115,opacity:0},{yPercent:0,opacity:1,stagger:ar?.14:.035,duration:1.5})
.from(el.querySelectorAll('.sl-fade'),{y:30,opacity:0,stagger:.12,duration:1},'-=1')
.fromTo(el.querySelectorAll('.mask'),{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:1.8},0)
.from(el.querySelectorAll('.px'),{scale:1.35,duration:2.6},0)},root);
return()=>{ctx.revert();sp.current?.revert()}},[ready,idx,ar]);
useEffect(()=>{if(rm)return;const ctx=gsap.context(()=>{
gsap.fromTo('.streak',{xPercent:-300},{xPercent:900,duration:9,repeat:-1,ease:'none',stagger:{each:3,from:'start'}});
const mv=e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;gsap.to('.par',{x:x*-30,y:y*-18,duration:1.4})};
addEventListener('mousemove',mv);return()=>removeEventListener('mousemove',mv)},root);return()=>ctx.revert()},[]);
const alt=ar?'المحامي محمد أمين':'Attorney Mohamed Amin';
const title=(i,size)=><div className="tw"><h1 className="sl-title display" style={{fontSize:size,lineHeight:ar?1.4:1.05,margin:0,overflowWrap:'anywhere'}}>{S[i][0]}</h1></div>;
const sub=i=><p className="sl-fade serif" style={{fontSize:'clamp(1.25rem,2.2vw,2rem)',color:'var(--mute)',maxWidth:560,lineHeight:1.7,margin:'1.2rem 0 2rem'}}>{S[i][1]}</p>;
const ctas=<div className="sl-fade" style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}><Btn solid href="#contact">{t('hero.cta1')}</Btn><Btn href="#practice">{t('hero.cta2')}</Btn></div>;
const row={width:'100%',boxSizing:'border-box',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(320px,100%),1fr))',gap:'2rem',alignItems:'center',minHeight:'100svh',padding:'110px 0 120px'};
return <section id="home" ref={root} aria-roledescription="carousel" style={{position:'relative',overflow:'hidden',background:'radial-gradient(900px circle at 70% 30%,rgba(212,175,55,.14),transparent 60%),var(--bg)'}}>
{[12,46,78].map(l=><i key={l} className="streak" style={{left:l+'%'}}/>)}
<Swiper key={i18n.language} dir={ar?'rtl':'ltr'} modules={[Keyboard,A11y,Autoplay]} keyboard speed={1100} onSwiper={s=>sw.current=s} onSlideChange={s=>setIdx(s.realIndex)}
autoplay={rm?false:{delay:10000,disableOnInteraction:true,pauseOnMouseEnter:true}} loop style={{width:'100%'}}>
<SwiperSlide data-slide="0"><div className="wrap" style={row}><div style={{minWidth:0}}>{title(0,ar?'clamp(4.5rem,14vw,10rem)':'clamp(2.6rem,8.4vw,7.6rem)')}<div className="sl-fade" style={{height:1,background:'var(--gold-grad)',maxWidth:440}}/>{sub(0)}{ctas}</div>
<div style={{display:'flex',justifyContent:'center'}}><Portrait alt={alt}/></div></div></SwiperSlide>
<SwiperSlide data-slide="1"><div style={{position:'absolute',top:0,bottom:0,insetInlineEnd:0,width:'min(62%,820px)',opacity:.7}}><Portrait alt={alt} w="100%" ratio="auto" fade="h" pos="50% 15%"/></div>
<div className="wrap" style={{...row,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',position:'relative'}}>{title(1,ar?'clamp(3.4rem,10vw,8.5rem)':'clamp(2.4rem,7vw,6.4rem)')}{sub(1)}{ctas}</div></SwiperSlide>
<SwiperSlide data-slide="2"><div className="wrap" style={{...row,direction:ar?'ltr':'rtl'}}><div style={{display:'flex',justifyContent:'center'}}><Portrait alt={alt} pos="45% 8%" ratio="3/4" w="min(400px,78vw)"/></div>
<div style={{minWidth:0,direction:ar?'rtl':'ltr'}}>{title(2,ar?'clamp(3.2rem,9vw,7.6rem)':'clamp(2.4rem,6.6vw,6rem)')}{sub(2)}{ctas}</div></div></SwiperSlide></Swiper>
<div className="wrap" style={{position:'absolute',left:0,right:0,bottom:'4vh',zIndex:5,boxSizing:'border-box',display:'flex',alignItems:'center',gap:'1.6rem',direction:'ltr'}}>
<span className="num" style={{fontSize:'2.6rem'}} aria-live="polite">0{idx+1}<small style={{fontSize:'1rem',WebkitTextStroke:0,color:'var(--mute)'}}> / 03</small></span>
<div style={{display:'flex',gap:8,flex:1,maxWidth:300}}>{[0,1,2].map(i=><button key={i} aria-label={`${i+1}`} onClick={()=>sw.current.slideToLoop(i)} style={{flex:1,height:18,background:'none',border:0,cursor:'pointer',padding:0}}><div style={{height:2,background:'var(--line)'}}><div style={{height:'100%',background:'var(--gold-grad)',width:idx===i?'100%':'0%',transition:'width 1.2s'}}/></div></button>)}</div>
<div style={{display:'flex',gap:10,marginInlineStart:'auto'}}><Arrow label={t('prev')} onClick={()=>sw.current.slidePrev()}><ChevronLeft size={20}/></Arrow><Arrow label={t('next')} onClick={()=>sw.current.slideNext()}><ChevronRight size={20}/></Arrow></div></div></section>}
