/*! Built with http://stenciljs.com */
const{h,Context}=window.stimg;class StImg{constructor(){this.fit=!1}srcChanged(){this.addIntersectionObserver()}componentDidLoad(){this.addIntersectionObserver()}addIntersectionObserver(){this.src&&("IntersectionObserver"in window?(this.removeIntersectionObserver(),this.io=new IntersectionObserver(t=>{t[0].isIntersecting&&(this.loadSrc=this.src,this.removeIntersectionObserver())}),this.io.observe(this.el)):setTimeout(()=>this.loadSrc=this.src,300))}removeIntersectionObserver(){this.io&&(this.io.disconnect(),this.io=null)}render(){return h("img",{class:{fit:this.fit},src:this.loadSrc,alt:this.alt,decoding:"async"})}static get is(){return"st-img"}static get encapsulation(){return"shadow"}static get properties(){return{alt:{type:String},el:{elementRef:!0},fit:{type:Boolean},loadSrc:{state:!0},src:{type:String,watchCallbacks:["srcChanged"]}}}static get style(){return"[data-st-img-host]{display:block}img[data-st-img]{max-width:100%}img.fit[data-st-img]{max-width:none;width:100%;height:100%;object-fit:inherit;object-position:inherit}"}}export{StImg};