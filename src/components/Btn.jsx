import useMagnetic from '../hooks/useMagnetic';
export default function Btn({children,solid,disabled,href,...p}){const ref=useMagnetic();
const rip=e=>{const b=e.currentTarget,r=b.getBoundingClientRect(),s=document.createElement('span'),d=Math.max(r.width,r.height);s.className='ripple';
Object.assign(s.style,{width:d+'px',height:d+'px',left:e.clientX-r.left-d/2+'px',top:e.clientY-r.top-d/2+'px'});b.appendChild(s);setTimeout(()=>s.remove(),600)};
const cls='btn '+(solid?'solid':'');
if(href&&!disabled)return <a ref={ref} href={href} onClick={rip} className={cls} {...p}>{children}</a>;
return <button ref={ref} disabled={disabled} onClick={rip} className={cls} {...p}>{children}</button>}
