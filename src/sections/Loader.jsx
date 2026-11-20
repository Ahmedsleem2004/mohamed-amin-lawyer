import {lazy,Suspense,useEffect,useRef,useState} from 'react';import gsap from 'gsap';import {useTranslation} from 'react-i18next';
const Scale=lazy(()=>import('../three/JusticeScale'));
export default function Loader({onDone}){const {t}=useTranslation();const [p,setP]=useState(0);const root=useRef(),done=useRef(false);
const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;const compact=matchMedia('(max-width:768px)').matches||(navigator.hardwareConcurrency||4)<=2;
const finish=()=>{if(done.current)return;done.current=true;gsap.to(root.current,{clipPath:'inset(0 0 100% 0)',duration:1.1,ease:'expo.inOut',onComplete:onDone})};
useEffect(()=>{if(reduced){onDone();return}const o={v:0};
const tw=gsap.to(o,{v:100,duration:4.2,ease:'power1.inOut',onUpdate:()=>setP(Math.round(o.v)),onComplete:finish});
const guard=setTimeout(finish,7000);return()=>{tw.kill();clearTimeout(guard)}},[]);
if(reduced)return null;
return <div ref={root} role="status" aria-label={t('loading')} style={{position:'fixed',inset:0,zIndex:100,background:'#050505',clipPath:'inset(0 0 0% 0)'}}>
<Suspense fallback={null}><Scale compact={compact}/></Suspense>
<div style={{position:'absolute',left:0,right:0,bottom:'8vh',textAlign:'center',color:'#F5F1E8'}}>
<div className="display gold-text" style={{fontSize:'clamp(1.6rem,5vw,3.2rem)',letterSpacing:'.3em',opacity:p>25?1:0,transition:'opacity 1.2s'}}>{t('brand')}</div>
<div style={{width:'min(280px,60vw)',height:1,background:'rgba(198,166,103,.25)',margin:'1.4rem auto .6rem'}}><div style={{height:'100%',width:p+'%',background:'linear-gradient(90deg,#8C6A28,#F3DE9A)'}}/></div>
<small style={{color:'#C6A667'}}>{p}%</small><br/><button onClick={finish} className="serif" style={{marginTop:12,background:'none',border:0,color:'#C6A667',cursor:'pointer'}}>{t('skip')}</button></div></div>}
