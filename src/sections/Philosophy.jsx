import {useEffect,useRef} from 'react';import gsap from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';import {useTranslation} from 'react-i18next';gsap.registerPlugin(ScrollTrigger);
const P=['M4 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4zM24 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z','M14 3a11 11 0 1 0 0 22 11 11 0 0 0 0-22zM14 0v8M14 20v8M0 14h8M20 14h8M14 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6z','M14 2l10 4v8c0 6-4 10-10 12C8 24 4 20 4 14V6z'];
export default function Philosophy(){const {t}=useTranslation();const root=useRef();const it=t('phil.items',{returnObjects:true});
useEffect(()=>{const ctx=gsap.context(()=>{gsap.from('.ph',{y:80,opacity:0,stagger:.18,duration:1.2,ease:'expo.out',scrollTrigger:{trigger:root.current,start:'top 70%'}});
gsap.fromTo('.ph path',{strokeDashoffset:1},{strokeDashoffset:0,duration:2,ease:'power2.inOut',stagger:.2,scrollTrigger:{trigger:root.current,start:'top 65%'}})},root);return()=>ctx.revert()},[]);
return <section ref={root} style={{padding:'clamp(80px,12vw,160px) 0',background:'var(--bg2)'}}><div className="wrap">
<h2 className="display gold-text" style={{fontSize:'clamp(3rem,7vw,5.6rem)',lineHeight:1.3,margin:'0 0 4rem'}}>{t('phil.title')}</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(280px,100%),1fr))',gap:'1.5rem',alignItems:'start'}}>
{it.map((x,i)=><article key={i} className="ph gb" style={{padding:'2.4rem',marginTop:i===1?'3rem':0,background:'var(--bg)'}}>
<svg width="64" height="64" viewBox="0 0 28 28" fill="none" stroke="var(--gold)" strokeWidth=".7" aria-hidden="true"><path d={P[i]} pathLength="1" strokeDasharray="1" strokeDashoffset="1"/></svg>
<h3 className="display" style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',margin:'1.6rem 0 .8rem'}}>{x[0]}</h3><p style={{color:'var(--mute)',lineHeight:1.9,margin:0,fontSize:'1.1rem'}}>{x[1]}</p></article>)}</div></div></section>}
