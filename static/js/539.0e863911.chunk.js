"use strict";(self.webpackChunkmoviesite=self.webpackChunkmoviesite||[]).push([[539],{539:(e,t,l)=>{l.r(t),l.d(t,{default:()=>v});var s=l(43),i=l(245),a=l(721),r=l(3),n=l(602),c=l(579);const o=()=>{const e=(0,r.wA)(),[t,l]=(0,s.useState)("");return(0,c.jsxs)("div",{className:"relative w-[300px] h-[40px]",children:[(0,c.jsx)("input",{value:t,onKeyUp:l=>"Enter"===l.key&&e((0,n.q)(t)),onChange:e=>l(e.target.value),type:"text",name:"Search",placeholder:"Search",className:"absolute top-0 left-0 w-full h-full text-white bg-transparent border outline-none rounded-[4px] pl-[45px] pr-[10px] backdrop-blur-[10px]"}),(0,c.jsx)(a.A,{onClick:()=>e((0,n.q)(t)),size:25,name:"Search-Icon",className:"absolute cursor-pointer top-1/2 left-[10px] -translate-y-1/2 pr-[10px] text-white border-r-[1px] border-white"})]})},d=()=>(0,c.jsxs)("header",{className:"fixed top-0 left-0 w-full flex justify-between z-[1000] px-[30px] py-[10px] items-center transition duration-[0.5s]",children:[(0,c.jsx)(i.N_,{to:"/",className:"text-[35px] font-racing-sans-one font-extrabold uppercase tracking-[2px] text-white",children:"Cinema"}),(0,c.jsx)(o,{})]}),x=e=>{let{children:t}=e;return(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(d,{}),(0,c.jsx)("main",{className:"grow",children:t})]})};var m=l(741);const h=e=>{let{state:t,setState:l,movieTitle:s,movieSrc:i}=e;return(0,c.jsxs)("div",{className:"movieModal ".concat(t?"active":""),children:[(0,c.jsx)("button",{className:"modalClose",onClick:()=>l(!1),children:(0,c.jsx)(m.A,{size:25})}),(0,c.jsx)("iframe",{width:1280,height:720,src:i,title:"".concat(s," | Official Trailer"),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})]})};var u=l(689);const p=e=>{let{Trailer:t,Title:l,image:i,Year:a,Rated:n,Runtime:o,Genre:d,Plot:x,Released:m,imdbRating:p}=e;const[f,v]=(0,s.useState)(!1),[j,w]=(0,s.useState)(),[b,g]=(0,s.useState)(!1),N=(0,r.d4)((e=>e.movies.loading)),y=(0,r.d4)((e=>e.movies.error));return(0,s.useEffect)((()=>{if(N)v(!1);else if(!N){const e=setTimeout((()=>{v(!0)}),500);return()=>clearTimeout(e)}}),[N]),(0,s.useEffect)((()=>{y&&(v(!1),w(y))}),[y]),(0,c.jsx)("div",{className:"banner relative w-full min-h-screen py-[100px] overflow-hidden transition-all duration-[0.5s] ".concat(j&&"flex items-center"),children:j?(0,c.jsxs)("div",{className:"bg-white py-6 w-full",children:[(0,c.jsx)("h1",{className:"text-center text-4xl",children:"Error!"}),(0,c.jsx)("h3",{className:"text-center",children:j}),(0,c.jsx)("h3",{className:"text-center",children:"Try Again"})]}):(0,c.jsxs)(s.Fragment,{children:[(0,c.jsxs)("div",{className:"py-[100px] absolute top-0 left-0 w-full h-screen flex flex-col lg:flex-row lg:justify-around items-center overflow-hidden pb-[100px]",children:[(0,c.jsx)("img",{src:i,alt:"Background",className:"".concat(f?"opacity-100 visible":"opacity-0 invisible"," absolute left-0 top-0 h-full w-full object-cover object-center transition-all duration-[0.5s]")},i),l&&(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)("div",{className:"flex flex-col md:flex-row justify-center items-center md:justify-around z-[2] lg:w-1/3 w-full transition duration-[0.5s] ".concat(f?"scale-100":"scale-0"),children:(0,c.jsx)("div",{className:"mx-10",children:(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("h2",{className:"mb-4 text-white text-xl",children:l}),(0,c.jsx)("span",{className:"bg-primary text-white font-bold p-1 rounded-md ml-5 h-max",children:p})]}),(0,c.jsxs)("h4",{className:"text-[rgba(255,255,2555,0.6)]",children:[(0,c.jsx)("span",{className:"px-[10px] pl-0",children:a}),(0,c.jsx)("span",{className:"px-[10px]",children:(0,c.jsx)("i",{className:"bg-primary text-white px-[8px] inline-block rounded-[2px]",children:n})}),(0,c.jsx)("span",{className:"px-[10px]",children:o}),(0,c.jsx)("span",{className:"px-[10px] py-0",children:d})]}),(0,c.jsx)("p",{className:"text-white text-[1em] font-normal leading-[1.5em] mt-[20px] mr-0 mb-[30px]",children:x})]})})}),(0,c.jsxs)("div",{className:"z-[2] w-full md:w-1/3 flex flex-col items-center transition duration-[0.5s] ".concat(f?"scale-100":"scale-0"),children:[(0,c.jsx)("h2",{className:"text-4xl text-white",children:m}),t&&(0,c.jsxs)("button",{onClick:()=>g(!0),className:"justify-center mt-4 text-2xl text-center w-full flex items-center text-primary",children:[(0,c.jsx)(u.A,{size:35}),"Watch Trailer"]})]})]})]}),b&&(0,c.jsx)(h,{movieSrc:t,movieTitle:l,state:b,setState:g})]})})},f=["Guardians of the Galaxy Vol. 2","Nun","Guardians of the Galaxy Vol. 3","Avengers: Endgame","Nine","The Dark Knight","Starwars: Goretech","Oppenheimer"],v=()=>{const e=(0,r.wA)(),t=(0,r.d4)((e=>e.movies.content));return(0,s.useEffect)((()=>{if((null===t||void 0===t?void 0:t.length)<1){const t=Math.floor(Math.random()*f.length);e((0,n.q)(f[t]))}}),[t,e]),(0,c.jsx)(x,{children:(0,c.jsx)(p,{Trailer:t.trailerLink&&t.trailerLink,Released:null===t||void 0===t?void 0:t.Released,imdbRating:null===t||void 0===t?void 0:t.imdbRating,Title:null===t||void 0===t?void 0:t.Title,image:null===t||void 0===t?void 0:t.Poster,Year:null===t||void 0===t?void 0:t.Year,Rated:null===t||void 0===t?void 0:t.Rated,Runtime:null===t||void 0===t?void 0:t.Runtime,Genre:null===t||void 0===t?void 0:t.Genre,Plot:null===t||void 0===t?void 0:t.Plot})})}}}]);
//# sourceMappingURL=539.0e863911.chunk.js.map