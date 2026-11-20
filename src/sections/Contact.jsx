import {useState} from 'react';import {useTranslation} from 'react-i18next';import site from '../data/site';import Btn from '../components/Btn';
export default function Contact(){const {t}=useTranslation();const [f,setF]=useState({name:'',email:'',msg:''}),[err,setErr]=useState({}),[ok,setOk]=useState(false);
const submit=e=>{e.preventDefault();const x={};if(f.name.trim().length<2)x.name=t('contact.eName');if(!/^\S+@\S+\.\S+$/.test(f.email))x.email=t('contact.eEmail');if(f.msg.trim().length<10)x.msg=t('contact.eMsg');
setErr(x);if(Object.keys(x).length)return;
if(site.email)location.href=`mailto:${site.email}?subject=${encodeURIComponent(f.name)}&body=${encodeURIComponent(f.msg)}`;setOk(true)};
const fld=(k,label,ta)=>{const P=ta?'textarea':'input';return <div style={{marginBottom:'1.4rem'}}><label htmlFor={k} style={{color:'var(--mute)',fontSize:'.9rem'}}>{label}</label>
<P id={k} className="field" rows={ta?4:undefined} value={f[k]} aria-invalid={!!err[k]} onChange={e=>setF({...f,[k]:e.target.value})}/>{err[k]&&<small role="alert" style={{color:'#e57373'}}>{err[k]}</small>}</div>};
return <section id="contact" style={{padding:'clamp(80px,12vw,160px) 0'}}><div className="wrap" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(300px,100%),1fr))',gap:'4rem'}}>
<div><h2 className="display gold-text" style={{fontSize:'clamp(2.8rem,7vw,6rem)',lineHeight:1.3,margin:0}}>{t('contact.title')}</h2>
<div style={{display:'flex',gap:'1rem',flexWrap:'wrap',marginTop:'2rem'}}>
<Btn href={site.whatsapp?`https://wa.me/${site.whatsapp}`:undefined} disabled={!site.whatsapp} title={site.whatsapp?undefined:t('contact.na')}>{t('contact.wa')}</Btn>
<Btn href={site.phone?`tel:${site.phone}`:undefined} disabled={!site.phone} title={site.phone?undefined:t('contact.na')}>{t('contact.phone')}</Btn></div></div>
<form onSubmit={submit} noValidate>{fld('name',t('contact.name'))}{fld('email',t('contact.email'))}{fld('msg',t('contact.msg'),true)}
<Btn solid type="submit">{t('contact.send')}</Btn>{ok&&<p role="status" className="serif" style={{color:'var(--gold)',fontSize:'1.2rem'}}>{t('contact.sent')}</p>}</form></div></section>}
