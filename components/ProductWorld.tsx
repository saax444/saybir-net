"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { useSitePreferences } from "./SitePreferences";
import { apps } from "@/data/apps";

type Palette = { silver: THREE.MeshPhysicalMaterial; ivory: THREE.MeshPhysicalMaterial; black: THREE.MeshPhysicalMaterial; glass: THREE.MeshPhysicalMaterial };

function makeProduct(slug: string, m: Palette, invalidate: () => void) {
  const textures: THREE.Texture[] = [];
  const extraMaterials: THREE.Material[] = [];
  const root = new THREE.Group();
  const animations: Array<(time: number) => void> = [];
  function mesh(geo: THREE.BufferGeometry, material: THREE.Material, x=0,y=0,z=0) {
    const object = new THREE.Mesh(geo, material);
    object.position.set(x,y,z); object.castShadow=true; object.receiveShadow=true; root.add(object); return object;
  }
  const box=(w:number,h:number,d:number,x=0,y=0,z=0,material:THREE.Material=m.silver)=>mesh(new RoundedBoxGeometry(w,h,d,3,Math.min(w,h,d)*.13),material,x,y,z);
  const sphere=(r:number,x=0,y=0,z=0,material:THREE.Material=m.silver)=>mesh(new THREE.SphereGeometry(r,40,28),material,x,y,z);
  const ring=(r:number,t:number,x=0,y=0,z=0,material:THREE.Material=m.silver)=>mesh(new THREE.TorusGeometry(r,t,20,80),material,x,y,z);
  function line(points:number[][],radius=.065,material:THREE.Material=m.silver){return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)),false,"centripetal"),80,radius,12,false),material);}
  function coin(r:number,h:number,x:number,y:number,z:number,material:THREE.Material=m.silver){return mesh(new THREE.CylinderGeometry(r,r,h,64),material,x,y,z);}
  switch(slug) {
    case "studio": {
      apps.forEach((app,i)=>{
        const columns=apps.length>18?4:3;
        const column=i%columns,row=Math.floor(i/columns);
        const remaining=apps.length-row*columns;const offset=remaining<columns?(columns-remaining)/2:0;
        const x=(column+offset-(columns-1)/2)*.94,y=2.25-row*.73,z=Math.sin(row*.7+column)*.22;
        const tile=new THREE.Group();root.add(tile);
        const backing=box(.72,.72,.12,0,0,0,m.black);root.remove(backing);tile.add(backing);
        const texture=new THREE.TextureLoader().load(app.image,invalidate);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=8;textures.push(texture);
        const material=new THREE.MeshBasicMaterial({map:texture,toneMapped:false});extraMaterials.push(material);
        const shape=new THREE.Shape();const half=.34,r=.09;
        shape.moveTo(-half+r,-half);shape.lineTo(half-r,-half);shape.quadraticCurveTo(half,-half,half,-half+r);shape.lineTo(half,half-r);shape.quadraticCurveTo(half,half,half-r,half);shape.lineTo(-half+r,half);shape.quadraticCurveTo(-half,half,-half,half-r);shape.lineTo(-half,-half+r);shape.quadraticCurveTo(-half,-half,-half+r,-half);
        const geometry=new THREE.ShapeGeometry(shape,16);const pos=geometry.attributes.position;const uv=geometry.attributes.uv;for(let j=0;j<pos.count;j++)uv.setXY(j,(pos.getX(j)+half)/(half*2),(pos.getY(j)+half)/(half*2));
        const face=mesh(geometry,material,0,0,.066);root.remove(face);tile.add(face);
        tile.position.set(x,y,z);tile.rotation.z=-.07;
        animations.push(t=>{tile.position.y=y+Math.sin(t*.55+i*.36)*.045;tile.position.z=z+Math.sin(t*.35+i*.5)*.07});
      });
      root.scale.setScalar(.8);root.position.y=.35;
      break;
    }
    case "retro-snake": {
      box(4.7,.18,4.7,0,-.9,0,m.black);
      for(let x=-2;x<=2;x+=.5)for(let z=-2;z<=2;z+=.5) box(.47,.045,.47,x,-.785,z,(Math.round((x+z)*2)%2===0)?m.black:m.glass);
      const positions=[[-1.5,1],[-1,1],[-.5,1],[0,1],[.5,1],[.5,.5],[.5,0],[.5,-.5],[1,-.5],[1.5,-.5],[1.5,-1],[1.5,-1.5]];
      positions.forEach(([x,z],i)=>{const block=box(.47,.43,.47,x,-.54,z,m.ivory);animations.push(t=>{block.position.y=-.54+Math.sin(t*1.6-i*.35)*.035;});});
      sphere(.045,1.38,-.45,-1.735,m.black); sphere(.045,1.62,-.45,-1.735,m.black);
      const apple=mesh(new THREE.OctahedronGeometry(.28),m.silver,-1.25,-.35,-1.25);animations.push(t=>{apple.rotation.y=t*.5;apple.position.y=-.34+Math.sin(t*2)*.07});
      break;
    }
    case "bold-block-arcade": {
      const shapes=[[[0,0],[1,0],[2,0],[1,1]],[[0,0],[0,1],[0,2],[1,0]],[[0,0],[1,0],[1,1],[2,1]]];
      shapes.forEach((shape,i)=>{const part=new THREE.Group();root.add(part);shape.forEach(([x,y])=>{const obj=box(.64,.64,.64);root.remove(obj);part.add(obj);obj.position.set((x-1)*.69,(y-.7)*.69,0);obj.material=i===1?m.black:i===2?m.glass:m.ivory});part.position.set((i-1)*1.45, i===1?.6:-.2,(i-1)*.25);part.rotation.set(.12,i*.3-.3,.1);animations.push(t=>{part.position.y=(i===1?.6:-.2)+Math.sin(t*.65+i)*.13;part.rotation.y=i*.3-.3+Math.sin(t*.35+i)*.12})});break;
    }
    case "history": {
      box(4,.25,2.3,0,-1,0,m.black);box(4,.14,2.3,0,1.75,0,m.ivory);
      for(const x of[-1.4,-.47,.47,1.4]){coin(.23,2.3,x,.25,0,m.ivory);coin(.36,.15,x,-.83,0);coin(.36,.15,x,1.42,0);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;mesh(new THREE.CylinderGeometry(.025,.025,2.2,8),m.silver,x+Math.cos(a)*.22,.25,Math.sin(a)*.22)}}
      const roof=mesh(new THREE.ConeGeometry(2.4,.8,3),m.ivory,0,2.1,0);roof.rotation.y=Math.PI/2;roof.scale.z=.55;root.scale.setScalar(.85);break;
    }
    case "velomate": {
      for(const x of[-1.5,1.5]){ring(.93,.055,x,-.1,0,m.black);ring(.83,.018,x,-.1,0);for(let k=0;k<14;k++){const a=k/14*Math.PI*2;line([[x,-.1,0],[x+Math.sin(a)*.82,-.1+Math.cos(a)*.82,0]],.008)}sphere(.13,x,-.1,0)}
      line([[-1.5,-.1,0],[-.6,1.2,0],[.1,-.1,0],[-1.5,-.1,0]],.055);line([[-.6,1.2,0],[.9,1.2,0],[.1,-.1,0]],.055);line([[1.5,-.1,0],[.85,1.5,0],[1.1,1.6,0]],.055);box(.65,.08,.2,-.65,1.35,0,m.black);ring(.22,.04,.1,-.1,0);break;
    }
    case "melodymap": {
      const disc=coin(1.65,.16,0,0,0,m.black);disc.rotation.x=Math.PI/2;for(let i=0;i<18;i++)ring(.5+i*.061,.006,0,0,.09,m.silver);const label=coin(.45,.02,0,0,.095,m.ivory);label.rotation.x=Math.PI/2;ring(.085,.02,0,0,.13,m.black);
      for(let i=0;i<20;i++){const h=.2+Math.abs(Math.sin(i*.65))*1.5;const bar=box(.065,h,.065,(i-9.5)*.18,-1.15,1,m.silver);animations.push(t=>{bar.scale.y=.4+Math.abs(Math.sin(t*1.3+i*.45))*.65})}root.rotation.x=-.18;break;
    }
    case "ne-secsem": {
      for(let i=0;i<3;i++){const frame=box(1.65,2.1,.15,(i-1)*1.25,i===1?.3:0,0,i===1?m.ivory:m.black);frame.rotation.z=(i-1)*-.15;const a=ring(.3,.06,(i-1)*1.25,.3,.13);a.rotation.z=Math.PI/4;box(.8,.03,.03,(i-1)*1.25,-.35,.13)}break;
    }
    case "carsave-ai": {
      box(3.8,.65,1.7,0,-.35,0);box(2.1,.6,1.5,-.2,.22,0,m.black);box(1.2,.12,1.45,-.6,.58,0);
      for(const x of[-1.15,1.15])for(const z of[-.9,.9]){const wheel=coin(.48,.23,x,-.66,z,m.black);wheel.rotation.x=Math.PI/2;const hub=ring(.25,.035,x,-.66,z+(z>0?.13:-.13));hub.rotation.x=0}for(const z of[-.5,.5])box(.06,.12,.32,1.91,-.27,z,m.ivory);break;
    }
    case "vibelens": {
      box(2.5,1.3,.38,-.6,.55,0,m.ivory);box(2.2,1.1,.35,.8,-.5,.45,m.black);const tail=mesh(new THREE.ConeGeometry(.22,.5,3),m.ivory,-1.3,-.22,0);tail.rotation.z=Math.PI;for(let i=0;i<3;i++)sphere(.09,-1.1+i*.45,.55,.22,m.black);for(let i=0;i<3;i++)sphere(.07,.35+i*.35,-.5,.67,m.silver);break;
    }
    case "hilock": {
      box(2.1,1.8,.75,0,-.25,0,m.ivory);const arc=mesh(new THREE.TorusGeometry(.72,.15,20,64,Math.PI),m.silver,0,.62,0);arc.rotation.z=0;box(.3,.55,.3,-.72,.45,0);box(.3,.55,.3,.72,.45,0);sphere(.15,0,-.13,.4,m.black);box(.12,.37,.03,0,-.38,.4,m.black);break;
    }
    case "yemekolay": {
      coin(1.75,.09,0,-.7,0,m.ivory);const dome=mesh(new THREE.SphereGeometry(1.4,64,32,0,Math.PI*2,0,Math.PI/2),m.silver,0,-.65,0);sphere(.17,0,.92,0,m.black);ring(.28,.035,0,1.15,0);dome.scale.y=.9;break;
    }
    case "oduyorum": {
      for(let i=0;i<4;i++)for(let j=0;j<3+i*2;j++)coin(.52,.14,(i-1.5)*1.05,-.95+j*.155,0,i%2?m.ivory:m.silver);break;
    }
    case "ref-ref-ref": {
      for(let i=0;i<6;i++){const r=ring(.5+i*.26,.05,0,0,-i*.25,i%2?m.ivory:m.silver);r.rotation.y=i*.22;animations.push(t=>{r.rotation.y=i*.22+Math.sin(t*.5+i*.3)*.25})}sphere(.24,0,0,.6,m.black);break;
    }
    case "kedilik": {
      sphere(1.15,0,0,0,m.ivory);for(const x of[-.77,.77]){const ear=mesh(new THREE.ConeGeometry(.6,1.2,3),m.ivory,x,1.02,0);ear.rotation.y=Math.PI/2;ear.rotation.z=x*.3;sphere(.095,x*.57,.15,1.04,m.black)}mesh(new THREE.ConeGeometry(.14,.18,3),m.black,0,-.22,1.14).rotation.z=Math.PI;for(const side of[-1,1])for(let i=0;i<3;i++)line([[side*.55,-.3,1],[side*1.5,-.22-i*.15,.9]],.012,m.black);break;
    }
    case "ezan-vakti": {
      const crescentShape=new THREE.Shape();
      crescentShape.absarc(0,0,1.35,Math.PI*.32,Math.PI*1.68,false);
      crescentShape.quadraticCurveTo(-.55,0,Math.cos(Math.PI*.32)*1.35,Math.sin(Math.PI*.32)*1.35);
      const crescent=mesh(new THREE.ExtrudeGeometry(crescentShape,{depth:.16,bevelEnabled:true,bevelThickness:.045,bevelSize:.035,bevelSegments:4,steps:1,curveSegments:64}),m.ivory,-.15,.25,0);
      crescent.rotation.z=-.12;
      const starShape=new THREE.Shape();for(let i=0;i<10;i++){const a=Math.PI/2+i*Math.PI/5,r=i%2?.16:.36;const x=Math.cos(a)*r,y=Math.sin(a)*r;if(i===0)starShape.moveTo(x,y);else starShape.lineTo(x,y)}starShape.closePath();
      mesh(new THREE.ExtrudeGeometry(starShape,{depth:.1,bevelEnabled:true,bevelThickness:.025,bevelSize:.018,bevelSegments:3}),m.silver,.65,.58,.1);
      for(let i=0;i<33;i++){const a=i/33*Math.PI*2;sphere(.055,Math.cos(a)*1.15,-1.15,Math.sin(a)*.75,m.silver)}
      break;
    }
    case "usenme-yap": {
      box(2.65,3,.22,0,0,0,m.black);for(let i=0;i<3;i++){box(.85,.045,.04,.25,.75-i*.7,.14,m.silver);line([[-.95,.77-i*.7,.16],[-.8,.62-i*.7,.16],[-.55,.94-i*.7,.16]],.055,m.ivory)}break;
    }
    case "tartarot": {
      for(let i=0;i<3;i++){const card=box(1.7,2.7,.12,(i-1)*1.05,0,-Math.abs(i-1)*.3,i===1?m.ivory:m.black);card.rotation.z=(i-1)*-.18;const emblem=ring(.37,.035,(i-1)*1.05,.2,.11-Math.abs(i-1)*.3,i===1?m.black:m.silver);emblem.rotation.z=(i-1)*-.18;sphere(.1,(i-1)*1.05,-.6,.1-Math.abs(i-1)*.3,i===1?m.black:m.silver)}break;
    }
    case "sancta": {
      for(const side of [-1,1]) {
        const cover=box(1.6,2.3,.17,side*.8,0,0,m.black);cover.rotation.y=side*.13;
        const pages=box(1.5,2.15,.16,side*.78,.02,.14,m.ivory);pages.rotation.y=side*.13;
        for(let row=0;row<7;row++)box(row===6?.65:1.08,.018,.015,side*.78,.68-row*.2,.3,m.silver);
      }
      box(.08,2.2,.08,0,0,.22,m.silver);root.rotation.x=-.12;break;
    }
    case "susadim": {
      const points=[new THREE.Vector2(0,-1.2),new THREE.Vector2(.55,-1.1),new THREE.Vector2(.9,-.7),new THREE.Vector2(1,-.2),new THREE.Vector2(.85,.35),new THREE.Vector2(.5,.9),new THREE.Vector2(.2,1.45),new THREE.Vector2(0,1.85)];mesh(new THREE.LatheGeometry(points,80),m.silver);for(let i=0;i<3;i++){const r=ring(1.1+i*.38,.025,0,-1.25,0,m.ivory);r.rotation.x=Math.PI/2}break;
    }
    default: {
      sphere(.42,0,.1,0,m.silver);for(let i=0;i<7;i++){const r=ring(.7+i*.22,.035,0,0,0,i%2?m.silver:m.ivory);r.rotation.x=Math.PI/2;animations.push(t=>{r.position.y=Math.sin(t*.9-i*.5)*.25;r.scale.setScalar(1+Math.sin(t*.5-i*.2)*.04)})}
    }
  }
  // Small, product-specific details remain part of the same shared stage.
  switch(slug) {
    case "retro-snake":
      for(const x of [-2.28,2.28])for(const z of [-2.28,2.28])sphere(.035,x,-.78,z,m.silver);
      box(.07,.18,.07,-1.25,-.04,-1.25,m.black);break;
    case "bold-block-arcade":
      for(let i=0;i<5;i++){const b=box(.13,.13,.13,(i-2)*.65,-1.05,.65,m.silver);b.rotation.z=Math.PI/4}break;
    case "history":
      box(4.3,.16,2.6,0,-1.18,0,m.ivory);box(3.8,.08,2.2,0,1.58,0,m.silver);break;
    case "velomate":
      line([[.1,-.1,0],[.35,-.35,.15],[.6,-.35,.15]],.035,m.black);
      line([[.85,1.5,0],[1.05,1.63,0],[1.25,1.58,0],[1.3,1.38,0]],.035,m.black);
      for(const x of [-1.5,1.5])ring(.89,.013,x,-.1,.04,m.ivory);break;
    case "melodymap":
      line([[1.95,-.8,.2],[1.95,1.15,.2],[1.05,1.25,.18],[.7,.8,.18]],.055);
      box(.19,.3,.12,.7,.74,.18,m.ivory);break;
    case "ne-secsem":
      for(let i=0;i<3;i++){const x=(i-1)*1.25;for(let j=0;j<4;j++)box(.09,.09,.03,x-.64,-.65+j*.4,.1,m.silver)}
      line([[-.13,.05,.16],[.22,.28,.16],[-.13,.5,.16],[-.13,.05,.16]],.035,m.black);break;
    case "carsave-ai":
      for(const z of [-.77,.77]){box(.55,.32,.03,.45,.22,z,m.glass);box(.5,.32,.03,-.4,.22,z,m.glass);box(.2,.035,.035,-.2,-.04,z,m.ivory)}
      for(let i=0;i<5;i++)box(.025,.035,.85,1.915,-.52+i*.06,0,m.black);break;
    case "vibelens":
      ring(.65,.06,1.15,.65,.8,m.silver);line([[1.6,.2,.8],[2,-.25,.8]],.085,m.black);break;
    case "hilock":
      for(const x of [-.82,.82])for(const y of [-.95,.44]){sphere(.035,x,y,.39,m.silver)}
      ring(.32,.018,0,-.25,.395,m.silver);break;
    case "yemekolay":
      for(const r of [1.48,1.62]){const edge=ring(r,.015,0,-.635,0,m.silver);edge.rotation.x=Math.PI/2}
      line([[-2,-.64,-.65],[-2,-.64,1]],.045,m.ivory);for(let i=0;i<3;i++)line([[-2+(i-1)*.09,-.64,-.9],[-2+(i-1)*.09,-.64,-.45]],.022,m.silver);break;
    case "oduyorum":
      for(let i=0;i<4;i++){const rim=ring(.43,.015,(i-1.5)*1.05,-.95+(2+i*2)*.155+.075,0,m.black);rim.rotation.x=Math.PI/2}
      line([[-1.7,-.1,-.7],[-.6,.25,-.7],[.4,.8,-.7],[1.6,1.4,-.7]],.04,m.ivory);break;
    case "ref-ref-ref":
      for(let i=0;i<12;i++){const a=i/12*Math.PI*2;const tick=box(.04,.15,.08,Math.cos(a)*2,Math.sin(a)*2,-1.2,m.ivory);tick.rotation.z=a-Math.PI/2}break;
    case "kedilik":
      for(const side of [-1,1]){const inner=mesh(new THREE.ConeGeometry(.3,.6,3),m.glass,side*.78,1.12,.24);inner.rotation.y=Math.PI/2;inner.rotation.z=side*.23}
      line([[0,-.28,1.14],[0,-.42,1.12],[-.2,-.49,1.09]],.018,m.black);line([[0,-.42,1.12],[.2,-.49,1.09]],.018,m.black);break;
    case "usenme-yap":
      box(1,.24,.12,0,1.4,.18,m.silver);for(let i=0;i<3;i++)box(.58,.018,.03,.13,.59-i*.7,.14,m.glass);break;
    case "tartarot":
      for(let i=0;i<3;i++){const x=(i-1)*1.05,z=.13-Math.abs(i-1)*.3;for(const dy of [-1.1,1.1])mesh(new THREE.OctahedronGeometry(.065),i===1?m.black:m.ivory,x,dy,z)}
      for(let k=0;k<12;k++){const a=k/12*Math.PI*2;sphere(.018,Math.cos(a)*.53,.2+Math.sin(a)*.53,.12,m.black)}break;
    case "sancta":
      for(const side of [-1,1])for(let j=0;j<5;j++)box(1.42,.008,.018,side*.78,-1.01+j*.023,.21,m.silver);
      line([[.08,.95,.3],[.08,-.85,.32],[.18,-1.3,.4]],.025,m.black);break;
    case "susadim":
      for(let i=0;i<6;i++){const a=i*2.4;sphere(.045+i*.01,Math.cos(a)*1.3,-.65+i*.32,Math.sin(a)*.5,m.ivory)}break;
    case "hushloom":
      for(let i=0;i<3;i++){const pebble=sphere(.42-i*.08,-1.45+i*.35,-1.05+i*.14,.6,m.black);pebble.scale.set(1,.5,.75)}break;
  }
  return { root, dispose:()=>{textures.forEach(t=>t.dispose());extraMaterials.forEach(m=>m.dispose());}, tick:(t:number)=>animations.forEach(fn=>fn(t)) };
}

export default function ProductWorld({slug,paused}:{slug:string;paused:boolean}) {
  const container=useRef<HTMLDivElement>(null);
  const {theme,lang}=useSitePreferences();
  const [failed,setFailed]=useState(false);
  const pauseRef=useRef(paused);pauseRef.current=paused;
  useEffect(()=>{
    const host=container.current;if(!host)return;
    let renderer:THREE.WebGLRenderer;
    try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:"high-performance"});}catch{setFailed(true);return;}
    setFailed(false);host.dataset.rendered="false";
    const light=theme==="light";
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=light?1.05:1.3;renderer.setClearColor(light?0xe9e7e1:0x080a0c);host.appendChild(renderer.domElement);
    renderer.domElement.setAttribute("aria-hidden","true");
    const scene=new THREE.Scene();scene.background=new THREE.Color(light?0xe9e7e1:0x080a0c);scene.fog=new THREE.Fog(light?0xe9e7e1:0x080a0c,14,35);
    const pmrem=new THREE.PMREMGenerator(renderer);const room=new RoomEnvironment();const env=pmrem.fromScene(room,.04);scene.environment=env.texture;scene.environmentIntensity=light?.75:.45;room.dispose();
    const m:Palette={silver:new THREE.MeshPhysicalMaterial({color:0xc9cbd0,metalness:.95,roughness:.2,clearcoat:1}),ivory:new THREE.MeshPhysicalMaterial({color:0xe8e6df,metalness:.12,roughness:.24,clearcoat:1}),black:new THREE.MeshPhysicalMaterial({color:light?0x1b1f24:0x191d22,metalness:.6,roughness:.24,clearcoat:1}),glass:new THREE.MeshPhysicalMaterial({color:light?0x71757a:0x343b44,metalness:.85,roughness:.18,clearcoat:1})};
    const product=makeProduct(slug,m,()=>{rendered=false});scene.add(product.root);
    const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshStandardMaterial({color:light?0xdedbd3:0x020304,roughness:.84,metalness:0}));floor.rotation.x=-Math.PI/2;floor.position.y=-1.35;floor.receiveShadow=true;scene.add(floor);
    const key=new THREE.SpotLight(0xffffff,100,35,.5,.65,1.5);key.position.set(-4,8,5);key.castShadow=true;key.shadow.mapSize.set(2048,2048);key.shadow.radius=4;key.shadow.bias=-.0004;key.shadow.normalBias=.025;scene.add(key);
    const rim=new THREE.SpotLight(0xdce6ff,65,30,.6,.7,1.5);rim.position.set(4,5,-4);scene.add(rim);scene.add(new THREE.HemisphereLight(0xffffff,0x30343c,.3));
    const camera=new THREE.PerspectiveCamera(34,1,.1,100);let progress=0;let px=0,py=0;let rx=0,ry=0;let visible=true;let frame=0;let elapsed=0;let previous=0;let rendered=false;let contextLost=false;
    const reduced=matchMedia("(prefers-reduced-motion: reduce)");
    const resize=()=>{const {width,height}=host.getBoundingClientRect();renderer.setSize(width,height,false);camera.aspect=width/Math.max(1,height);camera.updateProjectionMatrix();rendered=false;};const observer=new ResizeObserver(resize);observer.observe(host);
    const visibility=new IntersectionObserver(([e])=>{visible=e.isIntersecting;rendered=false;},{rootMargin:"100px"});visibility.observe(host);
    const pointer=(e:PointerEvent)=>{const r=host.getBoundingClientRect();px=(e.clientX-r.left)/r.width-.5;py=(e.clientY-r.top)/r.height-.5;};host.addEventListener("pointermove",pointer);const leave=()=>{px=0;py=0};host.addEventListener("pointerleave",leave);
    const scroll=()=>{const el=host.closest(".work-theatre");if(!el)return;const r=el.getBoundingClientRect();progress=Math.max(0,Math.min(1,-r.top/Math.max(1,r.height-innerHeight)));rendered=false};addEventListener("scroll",scroll,{passive:true});
    const tick=(now:number)=>{frame=requestAnimationFrame(tick);const delta=Math.min(.04,(now-previous)/1000);previous=now;if(!visible||document.hidden||contextLost)return;const still=reduced.matches||pauseRef.current;if(still&&rendered)return;if(!still)elapsed+=delta;rx+=(px-rx)*.035;ry+=(py-ry)*.035;const narrow=camera.aspect<.85;const angle=.45+(still?0:Math.sin(elapsed*.13)*.1+rx*.18)+progress*.35;const distance=(narrow?10.9:8.6)-progress*.85;camera.position.set(Math.sin(angle)*distance,3.35+(still?0:ry*.6)-progress*.3,Math.cos(angle)*distance);camera.lookAt(0,slug==="retro-snake"?-.65:.05,0);product.root.rotation.y=still?0:Math.sin(elapsed*.2)*.035;product.tick(still?0:elapsed);renderer.render(scene,camera);rendered=true;host.dataset.rendered="true";};resize();scroll();frame=requestAnimationFrame(tick);
    const lost=(e:Event)=>{e.preventDefault();contextLost=true;setFailed(true)};renderer.domElement.addEventListener("webglcontextlost",lost);
    return()=>{cancelAnimationFrame(frame);product.dispose();observer.disconnect();visibility.disconnect();removeEventListener("scroll",scroll);host.removeEventListener("pointermove",pointer);host.removeEventListener("pointerleave",leave);renderer.domElement.removeEventListener("webglcontextlost",lost);scene.traverse(o=>{if(o instanceof THREE.Mesh)o.geometry.dispose()});Object.values(m).forEach(mat=>mat.dispose());(floor.material as THREE.Material).dispose();env.dispose();pmrem.dispose();renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();};
  },[slug,theme]);
  const app=apps.find(x=>x.slug===slug) ?? {name:"SAYBIR",image:""};
  return <div className={slug==="studio"?"opening-world":"product-world"} ref={container} role="img" aria-label={lang==="tr"?`${app.name} için özgün üç boyutlu ürün sahnesi`:`Original three-dimensional product scene for ${app.name}`} data-world={slug}>{failed&&<div className="world-fallback">{app.image&&<img src={app.image} alt="" width="96" height="96"/>}<span>{app.name}</span><p>{lang==="tr"?"Ürün bilgilerini ve ekranlarını aşağıda inceleyebilirsin.":"Explore the product details and screenshots below."}</p></div>}</div>;
}
