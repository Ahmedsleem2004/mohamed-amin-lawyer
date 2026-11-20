import {useEffect,useState} from 'react';import {BrowserRouter,Routes,Route} from 'react-router-dom';import Lenis from 'lenis';import {useTranslation} from 'react-i18next';
import {motion,useScroll,useSpring} from 'motion/react';import Loader from './sections/Loader';import Nav from './sections/Nav';import Hero from './sections/Hero';import Practice from './sections/Practice';import Signature from './sections/Signature';import Philosophy from './sections/Philosophy';import Contact from './sections/Contact';
function Home(){const {i18n}=useTranslation();const [ready,setReady]=useState(false),[theme,setTheme]=useState(localStorage.getItem('theme')||'dark');
const {scrollYProgress}=useScroll();const sx=useSpring(scrollYProgress,{stiffness:120,damping:30});
useEffect(()=>{document.documentElement.dir=i18n.language==='ar'?'rtl':'ltr';document.documentElement.lang=i18n.language},[i18n.language]);
useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('theme',theme)},[theme]);
useEffect(()=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;const l=new Lenis();let id;const raf=t=>{l.raf(t);id=requestAnimationFrame(raf)};id=requestAnimationFrame(raf);return()=>{cancelAnimationFrame(id);l.destroy()}},[]);
return <>{!ready&&<Loader onDone={()=>setReady(true)}/>}<motion.div className="progress" style={{scaleX:sx}}/><Nav theme={theme} setTheme={setTheme}/><main><Hero ready={ready}/><Signature/><Practice/><Philosophy/><Contact/></main></>}
export default function App(){return <BrowserRouter><Routes><Route path="*" element={<Home/>}/></Routes></BrowserRouter>}
