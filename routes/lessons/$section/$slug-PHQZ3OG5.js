import{b as l}from"/remix-course-starter/_shared/chunk-ER57MLNZ.js";import{a as i}from"/remix-course-starter/_shared/chunk-AJYC5GPJ.js";import{b as m,d as c,e as s,f as t,l as r}from"/remix-course-starter/_shared/chunk-ZNG6YMXE.js";t();t();var o=m(c());var u=e=>({title:`${e.data.section} \u2013 ${e.data.title}`,description:e.data.attributes.description});function a(){let e=r(),[d,n]=(0,o.useContext)(l);return(0,o.useEffect)(()=>(n({section:e.section,title:e.title,icon:e.icon}),()=>n({})),[]),console.log(e),s.createElement("div",{className:"lesson-container"},s.createElement("div",{className:"lesson"},s.createElement("div",{className:"lesson-content",dangerouslySetInnerHTML:{__html:e.html}}),s.createElement("div",{className:"lesson-links"},e.prevSlug?s.createElement("a",{href:e.prevSlug,className:"prev"},"\u2190 Previous"):null,e.nextSlug?s.createElement("a",{href:e.nextSlug,className:"next"},"Next \u2192"):null)),s.createElement(i,null))}export{a as default,u as meta};