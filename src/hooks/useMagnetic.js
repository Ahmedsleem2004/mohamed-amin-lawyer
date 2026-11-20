import {useRef,useEffect} from 'react';import gsap from 'gsap';
export default function useMagnetic(s=.35){const r=useRef(null);useEffect(()=>{const el=r.current;if(!el||matchMedia('(pointer:coarse)').matches)return;
const mv=e=>{const b=el.getBoundingClientRect();gsap.to(el,{x:(e.clientX-b.left-b.width/2)*s,y:(e.clientY-b.top-b.height/2)*s,duration:.4})};
const lv=()=>gsap.to(el,{x:0,y:0,duration:.6,ease:'elastic.out(1,.4)'});el.addEventListener('mousemove',mv);el.addEventListener('mouseleave',lv);
return()=>{el.removeEventListener('mousemove',mv);el.removeEventListener('mouseleave',lv)}},[s]);return r}
