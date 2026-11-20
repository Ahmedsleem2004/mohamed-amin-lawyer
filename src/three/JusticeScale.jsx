import {useRef,useMemo} from 'react';import {Canvas,useFrame} from '@react-three/fiber';import {Environment,Lightformer,ContactShadows} from '@react-three/drei';import * as THREE from 'three';
const gold=<meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.22} envMapIntensity={1.6}/>;
function Pan({x}){return <group position={[x,-1.1,0]}>
{[0,1,2].map(i=>{const a=i*2.094;return <mesh key={i} position={[Math.cos(a)*.3,.55,Math.sin(a)*.3]} rotation={[Math.sin(a)*.3,0,-Math.cos(a)*.3]}><cylinderGeometry args={[.01,.01,1.15,6]}/>{gold}</mesh>})}
<mesh><cylinderGeometry args={[.62,.3,.12,48]}/>{gold}</mesh></group>}
function Scale({reduced}){const beam=useRef(),root=useRef(),t=useRef(0),L=1.4;
useFrame((s,dt)=>{t.current+=dt;const a=reduced?0:Math.sin(t.current*2.2)*.35*Math.exp(-t.current*.45);beam.current.rotation.z=a;
beam.current.children.forEach(c=>{if(c.userData.pan)c.rotation.z=-a});
root.current.rotation.y=Math.sin(t.current*.3)*.25+s.pointer.x*.2;
const z=reduced?6:Math.max(5.5,9-t.current*.8);s.camera.position.set(s.pointer.x*.5,.4+s.pointer.y*.3,z);s.camera.lookAt(0,.2,0)});
return <group ref={root}>
<mesh position={[0,-1.6,0]}><cylinderGeometry args={[.9,1.1,.18,64]}/>{gold}</mesh>
<mesh position={[0,-.4,0]}><cylinderGeometry args={[.07,.12,2.4,24]}/>{gold}</mesh>
<mesh position={[0,.9,0]}><sphereGeometry args={[.16,32,32]}/>{gold}</mesh>
<group ref={beam} position={[0,.9,0]}>
<mesh rotation={[0,0,Math.PI/2]}><cylinderGeometry args={[.05,.05,L*2,24]}/>{gold}</mesh>
<group userData={{pan:1}} position={[-L,0,0]}><Pan x={0}/></group><group userData={{pan:1}} position={[L,0,0]}><Pan x={0}/></group></group></group>}
function Dust(){const ref=useRef();const pos=useMemo(()=>new Float32Array(Array.from({length:240},()=>(Math.random()-.5)*10)),[]);
useFrame((_,d)=>{ref.current.rotation.y+=d*.03});return <points ref={ref}><bufferGeometry><bufferAttribute attach="attributes-position" array={pos} count={80} itemSize={3}/></bufferGeometry><pointsMaterial size={.04} color="#E9CF85" transparent opacity={.8} depthWrite={false}/></points>}
function Spot(){const r=useRef();useFrame(({clock})=>{const t=clock.elapsedTime;r.current.position.set(Math.sin(t*.5)*4,5,3+Math.cos(t*.4)*2)});return <spotLight ref={r} intensity={80} angle={.5} penumbra={1} color="#fff1c9"/>}
export default function JusticeScale({reduced,compact}){return <Canvas dpr={[1,compact?1.25:2]} camera={{fov:35,position:[0,.4,9]}} gl={{antialias:!compact,toneMapping:THREE.ACESFilmicToneMapping}}>
<color attach="background" args={['#050505']}/><fog attach="fog" args={['#050505',8,16]}/>
<Environment resolution={256}><Lightformer form="rect" intensity={4} position={[0,3,4]} scale={[8,2,1]}/><Lightformer form="rect" intensity={2} position={[-5,0,2]} scale={[2,6,1]} color="#ffe2a0"/><Lightformer form="rect" intensity={2} position={[5,1,-2]} scale={[2,6,1]}/></Environment>
<Spot/><Scale reduced={reduced}/><Dust/><ContactShadows position={[0,-1.7,0]} opacity={.6} blur={2.5} far={4}/></Canvas>}
