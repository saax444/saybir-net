"use client";
import { useEffect,useRef } from "react";
import "./Hero.css";

export default function Hero(){
 const section=useRef<HTMLElement>(null);
 const canvas=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const el=section.current,c=canvas.current;if(!el||!c)return;
  const gl=c.getContext("webgl",{alpha:false,antialias:false,powerPreference:"high-performance"});
  if(!gl){el.classList.add("cine-no-webgl");return}
  const vs=`attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
  const fs=`precision highp float;uniform vec2 r;uniform float t,s;
  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1)),f.x),f.y);}
  void main(){vec2 uv=(gl_FragCoord.xy-.5*r)/r.y;float q=smoothstep(0.,1.,s);vec3 col=vec3(.006,.006,.011);
  float haze=noise(uv*2.2+vec2(t*.018,-t*.009));col+=vec3(.018,.015,.05)*haze;
  vec2 center=vec2(.31-.13*q,.02+.035*sin(q*3.1415));vec2 d=uv-center;
  float orb=length(d*vec2(1.,1.04));float glow=.012/max(abs(orb-(.255+.05*q)),.012);col+=vec3(.18,.14,.75)*glow*.18;
  float core=smoothstep(.27+.05*q,.245+.05*q,orb);col=mix(col,vec3(.018,.016,.035)+vec3(.11,.075,.31)*(1.-orb*2.8),core);
  float rim=smoothstep(.012,0.,abs(orb-(.252+.05*q)));col+=vec3(.38,.34,1.)*rim*.72;
  float beam=max(0.,1.-abs(uv.x+uv.y*.38-.02-q*.08)*8.);col+=vec3(.08,.075,.19)*beam*smoothstep(.8,-.5,uv.y)*.16;
  float vign=smoothstep(1.15,.28,length(uv*vec2(.72,1.)));col*=.45+.55*vign;
  float grain=(hash(gl_FragCoord.xy+fract(t)*99.)-.5)*.018;col+=grain;
  gl_FragColor=vec4(pow(col,vec3(.86)),1.);}`;
  const shader=(type:number,src:string)=>{const sh=gl.createShader(type)!;gl.shaderSource(sh,src);gl.compileShader(sh);return sh};
  const prog=gl.createProgram()!;gl.attachShader(prog,shader(gl.VERTEX_SHADER,vs));gl.attachShader(prog,shader(gl.FRAGMENT_SHADER,fs));gl.linkProgram(prog);gl.useProgram(prog);
  const buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
  const loc=gl.getAttribLocation(prog,"p");gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
  const ur=gl.getUniformLocation(prog,"r"),ut=gl.getUniformLocation(prog,"t"),us=gl.getUniformLocation(prog,"s");
  let scroll=0,raf=0,start=performance.now(),running=true;
  const resize=()=>{const d=Math.min(devicePixelRatio,1.6);c.width=Math.floor(innerWidth*d);c.height=Math.floor(innerHeight*d);gl.viewport(0,0,c.width,c.height)};
  const update=()=>{const rr=el.getBoundingClientRect(),travel=Math.max(el.offsetHeight-innerHeight,1);scroll=Math.max(0,Math.min(1,-rr.top/travel));el.style.setProperty("--cine",String(scroll))};
  const render=()=>{if(!running)return;gl.uniform2f(ur,c.width,c.height);gl.uniform1f(ut,(performance.now()-start)/1000);gl.uniform1f(us,scroll);gl.drawArrays(gl.TRIANGLES,0,6);raf=requestAnimationFrame(render)};
  resize();update();render();addEventListener("resize",resize);addEventListener("scroll",update,{passive:true});
  return()=>{running=false;cancelAnimationFrame(raf);removeEventListener("resize",resize);removeEventListener("scroll",update);gl.deleteProgram(prog)}
 },[]);
 return <section ref={section} className="cineHero" id="top">
  <div className="cineHero__sticky">
   <canvas ref={canvas} className="cineHero__canvas"/>
   <div className="cineHero__light"/>
   <div className="cineHero__frame">
    <div className="cineHero__top"><span>SAYBIR® / INDEPENDENT SOFTWARE STUDIO</span><span>PRODUCT · DESIGN · ENGINEERING</span></div>
    <div className="cineHero__chapter cineHero__chapter--one">
      <span className="cineHero__eyebrow">A SOFTWARE STUDIO FOR EVERYDAY DEVICES</span>
      <h1>Software<br/><em>with gravity.</em></h1>
      <p>Independent digital products shaped from first idea to final release.</p>
    </div>
    <div className="cineHero__chapter cineHero__chapter--two">
      <span className="cineHero__eyebrow">SELECTED PRODUCTS / 01—17</span>
      <h2>Built to live<br/><em>in your hand.</em></h2>
      <a href="#uygulamalar">ENTER SELECTED WORK <b>↘</b></a>
    </div>
    <div className="cineHero__artifact" aria-hidden="true">
      <div className="cineHero__ring rA"/><div className="cineHero__ring rB"/><div className="cineHero__ring rC"/>
      <div className="cineHero__monolith"><i/><span>S</span></div>
    </div>
    <div className="cineHero__bottom"><span>01 / PROLOGUE</span><span className="cineHero__scroll"><i/> SCROLL TO DIRECT</span><span>SAYBIR.NET</span></div>
   </div>
  </div>
 </section>
}