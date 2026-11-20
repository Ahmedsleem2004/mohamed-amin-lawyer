import {useEffect,useRef} from 'react';import gsap from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';import {useTranslation} from 'react-i18next';gsap.registerPlugin(ScrollTrigger);
export default function Signature(){const {t,i18n}=useTranslation();const root=useRef();const L=t('sig',{returnObjects:true});const ar=i18n.language==='ar';
useEffect(()=>{const ctx=gsap.context(()=>{root.current.querySelectorAll('.sg').forEach(l=>gsap.fromTo(l,{opacity:.12,y:50},{opacity:1,y:0,ease:'none',scrollTrigger:{trigger:l,start:'top 88%',end:'top 48%',scrub:true}}));
gsap.fromTo('.sg-rule',{scaleX:0},{scaleX:1,transformOrigin:ar?'100% 50%':'0 50%',ease:'none',scrollTrigger:{trigger:root.current,start:'top 70%',end:'bottom 60%',scrub:true}})},root);return()=>ctx.revert()},[ar]);
return <section ref={root} style={{padding:'clamp(120px,18vw,260px) 0',background:'var(--bg)'}}><div className="wrap">
{L.map((l,i)=><p key={i} className="sg display" style={{fontSize:'clamp(2.2rem,6.4vw,5.6rem)',lineHeight:ar?1.55:1.2,margin:'0 0 1.2rem',color:i?undefined:'var(--ink)'}}><span className={i?'gold-text':''}>{l}</span></p>)}
<div className="sg-rule" style={{height:1,background:'var(--gold-grad)',marginTop:'3rem'}}/></div></section>}
