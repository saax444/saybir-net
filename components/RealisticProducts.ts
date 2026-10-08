import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

/** Physical still lifes, in metres relative to the shared studio stage. */
export function makeRealisticProduct(slug:string) {
 const supported=['yemekolay','susadim','kedilik','carsave-ai','vibelens','ne-secsem','oduyorum','usenme-yap','tartarot','sancta','melodymap','ezan-vakti','hilock'];
 if(!supported.includes(slug))return null;
 const root=new THREE.Group();const materials:THREE.Material[]=[];const textures:THREE.Texture[]=[];
 function texture(kind:'grain'|'paper'|'wood'|'card',color:string){
  const canvas=document.createElement('canvas');canvas.width=canvas.height=512;const c=canvas.getContext('2d')!;c.fillStyle=color;c.fillRect(0,0,512,512);
  let seed=21;const random=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646};
  for(let i=0;i<18000;i++){c.fillStyle=`rgba(${random()>.5?'255,255,255':'0,0,0'},${kind==='wood'?.055:.045})`;c.fillRect(random()*512,random()*512,kind==='wood'?30+random()*150:1,kind==='paper'?1:2)}
  if(kind==='card'){c.strokeStyle='#cfb480';c.lineWidth=3;c.strokeRect(28,28,456,456);c.strokeRect(36,36,440,440);c.translate(256,256);for(let i=0;i<24;i++){c.rotate(Math.PI/12);c.beginPath();c.moveTo(0,65);c.lineTo(0,145);c.stroke()}c.beginPath();c.arc(0,0,55,0,Math.PI*2);c.stroke();c.beginPath();c.arc(0,0,25,0,Math.PI*2);c.stroke()}
  const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;textures.push(t);return t;
 }
 function mat(color:number,roughness=.5,metalness=0,extra:THREE.MeshPhysicalMaterialParameters={}){const m=new THREE.MeshPhysicalMaterial({color,roughness,metalness,...extra});materials.push(m);return m}
 const ceramic=mat(0xeee6d9,.22,0,{clearcoat:.8,clearcoatRoughness:.16});const steel=mat(0xc3c7ca,.28,.92);const rubber=mat(0x17191c,.88);const brass=mat(0xb79551,.29,.82);const paper=mat(0xf4ecdb,.94,0,{map:texture('paper','#eee7d6')});const leather=mat(0xffffff,.78,0,{map:texture('grain','#35251f')});const wood=mat(0xffffff,.65,0,{map:texture('wood','#65402c')});
 function mesh(g:THREE.BufferGeometry,m:THREE.Material,x=0,y=0,z=0){const o=new THREE.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;root.add(o);return o}
 const box=(w:number,h:number,d:number,m:THREE.Material,x=0,y=0,z=0,r=.04)=>mesh(new RoundedBoxGeometry(w,h,d,3,Math.min(r,w/3,h/3,d/3)),m,x,y,z);
 const ball=(r:number,m:THREE.Material,x=0,y=0,z=0)=>mesh(new THREE.SphereGeometry(r,32,20),m,x,y,z);
 const ring=(r:number,t:number,m:THREE.Material,x=0,y=0,z=0)=>mesh(new THREE.TorusGeometry(r,t,12,64),m,x,y,z);
 const cylinder=(r:number,h:number,m:THREE.Material,x=0,y=0,z=0)=>mesh(new THREE.CylinderGeometry(r,r,h,64),m,x,y,z);
 const lathe=(points:number[][],m:THREE.Material,x=0,y=0,z=0)=>mesh(new THREE.LatheGeometry(points.map(([a,b])=>new THREE.Vector2(a,b)),96),m,x,y,z);
 const tube=(points:number[][],r:number,m:THREE.Material)=>mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),48,r,10,false),m);
 function screws(x:number,y:number,z:number){const s=cylinder(.034,.015,steel,x,y,z);s.rotation.x=Math.PI/2;box(.036,.005,.004,rubber,x,y,z+.01)}
 function book(x=0,z=0,cross=true){box(2.65,.13,3.35,leather,x,-1.05,z);box(2.5,.32,3.16,paper,x,-.83,z);for(let i=0;i<17;i++)box(2.49,.005,3.12,mat(0xbcb3a2,.9),x,-.98+i*.018,z);box(2.65,.1,3.35,leather,x,-.61,z);if(cross){box(.06,.025,2.45,brass,x,-.548,z);box(.72,.025,.06,brass,x,-.547,z-.3)}}
 if(slug==='yemekolay'){
  const pasta=mat(0xffffff,.77,0,{map:texture('grain','#c99440')});const tomato=mat(0xb82b14,.46,0,{clearcoat:.25});const green=mat(0x42642c,.5,0,{side:THREE.DoubleSide});
  lathe([[0,0],[.9,0],[1.15,.05],[1.6,.2],[1.78,.28],[1.84,.31],[1.86,.27],[1.75,.22],[1.3,-.06],[.75,-.12],[0,-.12]],ceramic,0,-1.2,0);
  const noodle=new THREE.LatheGeometry([[.07,-.23],[.12,-.23],[.12,.23],[.07,.23],[.07,-.23]].map(([x,y])=>new THREE.Vector2(x,y)),20);
  for(let i=0;i<46;i++){const a=i*2.39996,r=.17+Math.sqrt(i/46)*1.07;const p=mesh(noodle,pasta,Math.cos(a)*r,-.98+Math.max(0,1-r)*.32,Math.sin(a)*r);p.rotation.set(1.1+Math.sin(i)*.4,a,.2);}
  for(let i=0;i<6;i++){const a=i*1.07+.3;const t=ball(.17,tomato,Math.cos(a)*1.05,-.81,Math.sin(a)*1.05);t.scale.y=.7;}
  const leaf=new THREE.Shape();leaf.moveTo(0,0);leaf.bezierCurveTo(-.22,.2,-.15,.5,0,.62);leaf.bezierCurveTo(.2,.4,.2,.14,0,0);
  for(let i=0;i<5;i++){const l=mesh(new THREE.ShapeGeometry(leaf,18),green,Math.cos(i*2)*.38,-.54,Math.sin(i*2)*.4);l.rotation.set(-Math.PI/2,i*.7,i*1.2)}
  const cheese=mat(0xf3dfb1,.85);for(let i=0;i<32;i++){const a=i*2.4,r=.2+(i%9)*.1;const c=box(.07,.015,.12,cheese,Math.cos(a)*r,-.63-(r*.15),Math.sin(a)*r,.004);c.rotation.y=a}
  box(.16,.06,1.4,steel,-2,-1.31,.48);for(let i=0;i<4;i++)box(.026,.04,.5,steel,-2+(i-1.5)*.052,-1.31,-.45);box(.21,.04,.1,steel,-2,-1.31,-.18);
  const napkin=box(.9,.08,2.5,paper,2.08,-1.3,0);napkin.rotation.y=-.08;box(.11,.055,2,steel,2.08,-1.23,0);
 }else if(slug==='susadim'){
  const glass=mat(0xffffff,.07,0,{transmission:.98,thickness:.12,ior:1.48,transparent:true,opacity:1});const water=mat(0x82b9c6,.08,0,{transmission:.6,thickness:1.3,ior:1.333,transparent:true,opacity:.65});
  lathe([[.52,0],[.6,.08],[.6,2.2],[.5,2.45],[.28,2.65],[.28,2.96],[.23,2.96],[.23,2.63],[.53,2.25],[.53,.12],[.52,0]],glass,-.4,-1.25,0);
  cylinder(.52,1.82,water,-.4,-.22,0);cylinder(.3,.28,steel,-.4,1.8,0);for(let i=0;i<8;i++){const r=ring(.3,.009,rubber,-.4,1.69+i*.026,0);r.rotation.x=Math.PI/2}
  for(let i=0;i<30;i++){const a=i*2.4;const b=ball(.022+(i%3)*.007,glass,-.4+Math.cos(a)*.602,-1+i*.077,Math.sin(a)*.602);b.scale.y=1.3}
  lathe([[.46,0],[.5,.08],[.56,1.35],[.52,1.35],[.46,.12],[.46,0]],glass,1,-1.25,.45);cylinder(.46,.73,water,1,-.79,.45);
 }else if(slug==='kedilik'){
  const glaze=mat(0x9baaa0,.28,0,{clearcoat:.9});const kibble=mat(0x735239,.93);
  lathe([[.8,0],[1.26,.04],[1.35,.16],[1.25,.76],[1.15,.86],[1.07,.82],[.96,.22],[.7,.14],[0,.14],[0,.02],[.8,0]],glaze,0,-1.25,0);
  for(let i=0;i<95;i++){const a=i*2.399,r=Math.sqrt(i/95)*.98;const k=ball(.09,kibble,Math.cos(a)*r,-.73+(i%3)*.055,Math.sin(a)*r);k.scale.set(1,.65,.82)}
  const paw=mat(0xe9e3d8,.4);ball(.14,paw,0,-.84,1.27).scale.z=.12;for(let i=0;i<3;i++)ball(.065,paw,(i-1)*.14,-.59+Math.abs(i-1)*-.04,1.25).scale.z=.12;
  const collar=ring(.64,.075,leather,1.85,-1.13,.2);collar.rotation.x=Math.PI/2;const tag=cylinder(.18,.035,brass,1.8,-1.02,.83);box(.14,.08,.14,steel,1.3,-1.09,.2);
 }else if(slug==='hilock'){
  box(1.9,1.65,.72,steel,0,-.38,0,.16);const shackle=ring(.61,.115,steel,0,.69,0);shackle.scale.y=1.18;box(1.3,.3,.8,steel,0,.35,0,.06);
  const keyhole=cylinder(.22,.025,brass,0,-.65,.371);keyhole.rotation.x=Math.PI/2;box(.055,.2,.025,rubber,0,-.65,.394);for(let i=0;i<25;i++)box(1.57,.007,.008,mat(0x8a8f94,.4,.9),0,-1.01+i*.052,.363,.002);
  for(const x of[-.75,.75])screws(x,.19,.37);
  const key=ring(.25,.06,brass,1.5,-.91,.45);key.rotation.x=Math.PI/2;box(.1,.08,.8,brass,1.5,-.94,1);for(let i=0;i<3;i++)box(.19,.06,.075,brass,1.55,-.94,1.15+i*.12);
 }else if(slug==='carsave-ai'){
  box(2.1,2.65,.48,rubber,0,.03,0,.17);box(1.9,1.53,.08,steel,0,.38,.28,.09);box(1.64,1.26,.025,mat(0x17372d,.25),0,.4,.33,.04);
  for(let i=0;i<4;i++)box(.9-i*.13,.025,.015,mat(0x95ba99,.4,0,{emissive:0x4f8c65,emissiveIntensity:.3}),-.12,.7-i*.2,.35,.005);
  for(let i=0;i<5;i++){const k=box(.25,.18,.06,i===2?mat(0xb95732,.7):rubber,(i-2)*.32,-.65,.28);}
  tube([[0,1.34,0],[0,1.65,0],[1.45,1.8,-.15],[2,1.1,.1],[1.7,-.5,.5]],.065,rubber);box(.58,.45,.37,rubber,1.7,-.65,.5,.04);
  box(.74,1.16,.23,steel,-1.75,-.65,.5,.16);box(.62,1.03,.25,leather,-1.75,-.65,.51,.15);for(let i=0;i<3;i++)box(.26,.07,.02,steel,-1.75,-.38-i*.24,.645,.02);
 }else if(slug==='vibelens'){
  const optic=mat(0x283e50,.035,.45,{clearcoat:1,iridescence:1,iridescenceIOR:1.35});
  for(let i=0;i<5;i++){const c=cylinder(1.02-i*.09,.28,rubber,0,0,-.55+i*.26);c.rotation.x=Math.PI/2;const r=ring(1.01-i*.09,.035,steel,0,0,-.42+i*.26);}
  for(let i=0;i<60;i++){const a=i/60*Math.PI*2;const grip=box(.032,.032,.58,rubber,Math.sin(a)*1.03,Math.cos(a)*1.03,-.25,.006);grip.rotation.z=-a}
  const face=ball(.66,optic,0,0,.8);face.scale.z=.1;ring(.73,.025,steel,0,0,.78);ring(.52,.015,mat(0x657d80,.2,.8),0,0,.875);root.position.y=-.18;
 }else if(slug==='ne-secsem'){
  box(3.2,2.25,.16,rubber,0,-.1,0,.03);const board=mat(0xe7e4d9,.9);for(let i=0;i<3;i++)box(2.8,.015,.014,board,0,.15-i*.43,.09,.002);box(.018,1.3,.013,board,-.5,-.22,.09,.002);box(.018,1.3,.013,board,.68,-.22,.09,.002);
  const clapper=new THREE.Group();root.add(clapper);for(let i=0;i<8;i++){const block=box(.39,.32,.2,i%2?board:rubber,(i-3.5)*.4,1.26,0,.008);root.remove(block);clapper.add(block)}clapper.rotation.z=.12;clapper.position.y=.1;for(const x of[-1.42,1.42])screws(x,.91,.09);
  const reel=cylinder(.75,.18,steel,1.5,-.5,.75);reel.rotation.x=Math.PI/2;for(let i=0;i<5;i++){const a=i*Math.PI*2/5;const hole=cylinder(.17,.02,rubber,1.5+Math.cos(a)*.43,-.5+Math.sin(a)*.43,.85);hole.rotation.x=Math.PI/2}
 }else if(slug==='oduyorum'){
  box(3,1.8,.32,leather,0,-.2,0,.17);box(2.9,1.05,.08,leather,0,-.48,.21,.07);for(let i=0;i<40;i++)box(.025,.012,.01,paper,-1.35+i*.069,-.95,.26,.002);
  box(2.36,1.42,.035,mat(0x607579,.5,.4),.12,.6,.05,.08);box(.36,.3,.02,brass,-.55,.9,.08,.04);for(let i=0;i<4;i++)box(.18,.026,.015,paper,-.5+i*.36,-.03,.082,.003);
  for(let i=0;i<6;i++){cylinder(.38,.065,brass,1.6,-1.2+i*.068,.55);const r=ring(.31,.009,steel,1.6,-1.165+i*.068,.55);r.rotation.x=Math.PI/2}
 }else if(slug==='usenme-yap'||slug==='sancta'){
  book();if(slug==='usenme-yap'){
   box(2.42,.015,3.1,paper,0,-.547,0);for(let i=0;i<6;i++){box(1.5,.007,.014,mat(0x8c8982,.8),.2,-.535,-1.05+i*.37);box(.15,.007,.15,mat(0xa5ad9a,.8),-.9,-.534,-1.05+i*.37)}
   const pen=cylinder(.06,2.5,steel,1.65,-.95,0);pen.rotation.x=Math.PI/2;const tip=mesh(new THREE.ConeGeometry(.06,.24,24),brass,1.65,-.95,1.36);tip.rotation.x=Math.PI/2;
  }else{const bookmark=box(.23,.012,.75,mat(0x6e2528,.8),.67,-.55,1.7);}
 }else if(slug==='tartarot'){
  const face=mat(0xffffff,.9,0,{map:texture('card','#243131')});
  for(let i=0;i<3;i++){const card=box(1.5,2.7,.04,paper,(i-1)*1.13,.15,-Math.abs(i-1)*.15,.03);card.rotation.z=(i-1)*-.14;const image=mesh(new THREE.PlaneGeometry(1.43,2.63),face,(i-1)*1.13,.15,.023-Math.abs(i-1)*.15);image.rotation.z=(i-1)*-.14}
 }else if(slug==='ezan-vakti'){
  for(let i=0;i<33;i++){const a=i/33*Math.PI*2;ball(.12,wood,Math.cos(a)*1.32,-1.05,Math.sin(a)*1.03)}tube([[0,-1.05,1.05],[.1,-1.03,1.5],[.4,-1.03,1.7]],.025,leather);for(let i=0;i<12;i++)tube([[.4,-1.03,1.7],[.5+(i-6)*.022,-1.04,1.93],[.6+(i-6)*.03,-1.12,2.15]],.009,leather);
  book(0,-.6,false);const ornament=ring(.36,.015,brass,0,-.54,-.6);ornament.rotation.x=Math.PI/2;root.position.y=-.18;
 }else if(slug==='melodymap'){
  box(3.8,.42,3,wood,0,-1.01,0,.08);box(3.6,.06,2.8,rubber,0,-.77,0);cylinder(1.24,.07,rubber,-.3,-.7,0);for(let i=0;i<45;i++){const r=ring(.35+i*.019,.003,mat(0x28282a,.4,.15),-.3,-.66,0);r.rotation.x=Math.PI/2}cylinder(.35,.015,paper,-.3,-.646,0);cylinder(.045,.13,steel,-.3,-.59,0);tube([[1.35,-.7,-.9],[1.35,-.38,-.9],[.95,-.35,.3],[.5,-.42,.8]],.035,steel);box(.18,.08,.25,rubber,.5,-.43,.8,.025);cylinder(.11,.05,steel,-1.5,-.7,1.1);
 }
 if(['kedilik','melodymap','sancta','usenme-yap'].includes(slug))root.position.y=-.13;
 return {root,dispose:()=>{textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose())},tick:()=>{}};
}
