const t=window.stimg.h;class e{componentDidLoad(){this.addIntersectionObserver()}componentWillUpdate(){this.src!==this.oldSrc&&this.addIntersectionObserver(),this.oldSrc=this.src}handleImage(){const t=this.el.shadowRoot.querySelector("img");t.setAttribute("src",t.getAttribute("data-src")),t.onload=(()=>{t.removeAttribute("data-src")})}addIntersectionObserver(){this.src&&("IntersectionObserver"in window?(this.io=new IntersectionObserver(t=>{t[0].isIntersecting&&(this.handleImage(),this.removeIntersectionObserver())}),this.io.observe(this.el.shadowRoot.querySelector("img"))):setTimeout(()=>{this.handleImage()},300))}removeIntersectionObserver(){this.io&&(this.io.disconnect(),this.io=null)}render(){return t("img",{"data-src":this.src,alt:this.alt})}static get is(){return"st-img"}static get encapsulation(){return"shadow"}static get properties(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},oldSrc:{state:!0},src:{type:String,attr:"src"}}}static get style(){return".sc-st-img-h{display:block}img.sc-st-img{max-width:100%}"}}export{e as StImg};