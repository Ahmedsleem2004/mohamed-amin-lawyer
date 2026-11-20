import {useEffect,useState} from 'react';import {useTranslation} from 'react-i18next';import {Sun,Moon,Menu,X} from 'lucide-react';
export default function Nav({theme,setTheme}){const {t,i18n}=useTranslation();const [sc,setSc]=useState(false),[open,setOpen]=useState(false);
useEffect(()=>{const f=()=>setSc(scrollY>40);f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
const lang=()=>{const n=i18n.language==='ar'?'en':'ar';i18n.changeLanguage(n);localStorage.setItem('lang',n)};
const L=['home','practice','contact'].map(k=><a key={k} href={'#'+k} onClick={()=>setOpen(false)} className="navlink">{t('nav.'+k)}</a>);
return <header style={{position:'fixed',top:0,left:0,right:0,zIndex:80,background:sc?'var(--glass)':'transparent',backdropFilter:sc?'blur(16px)':'none',borderBottom:sc?'1px solid var(--line)':'1px solid transparent',transition:'.4s'}}>
<style>{`.navlink{position:relative;padding:.4rem 0;color:var(--ink);text-decoration:none}.navlink::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--gold);transform:scaleX(0);transition:.4s}.navlink:hover::after{transform:scaleX(1)}.ib{background:none;border:1px solid var(--line);color:var(--ink);padding:.45rem .8rem;cursor:pointer}.mb{display:none}@media(max-width:820px){.dsk{display:none!important}.mb{display:block}}`}</style>
<div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:76}}>
<a href="#home" className="display gold-text" style={{textDecoration:'none',letterSpacing:'.12em',fontSize:'1.05rem'}}>{t('brand')}</a>
<nav className="dsk" style={{display:'flex',gap:'2.2rem'}}>{L}</nav>
<div style={{display:'flex',gap:8}}><button className="ib" onClick={lang} aria-label="Language">{i18n.language==='ar'?'EN':'عربي'}</button>
<button className="ib" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label="Theme">{theme==='dark'?<Sun size={16}/>:<Moon size={16}/>}</button>
<button className="ib mb" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X size={16}/>:<Menu size={16}/>}</button></div></div>
{open&&<div className="display" style={{position:'fixed',left:0,right:0,bottom:0,top:76,background:'var(--bg)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'2rem',fontSize:'2rem'}}>{L}</div>}</header>}
