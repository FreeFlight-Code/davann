(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{url:"",title:"hidden",start:0,end:0,mute:0,delay:10},{url:"RBumgq5yVrA",title:"lethergo",start:0,end:0,mute:0,delay:254},{url:"2Vv-BfVoq4g",title:"perfect",start:0,end:0,mute:0,delay:0},{url:"0yW7w8F2TVA",title:"sayyouwontletgo",start:0,end:0,mute:0,delay:0},{url:"-6PRfDENIds",title:"weddingsinger",start:427,end:561,mute:0,delay:10},{url:"bFsgLhx9dxg",title:"youhavebewitchedme",start:102,end:142,mute:0,delay:0},{url:"tKv02DifTXo",title:"illfindyou",start:5,end:21,mute:1,delay:0},{url:"yJBlRpAi4zw",title:"charming",start:60,end:156,mute:0,delay:0},{url:"feeuoERYOV0",title:"wheredyougo",start:0,end:75,mute:0,delay:0},{url:"7qH4qyi1-Ys",title:"hurtsthemost",start:31,end:120,mute:0,delay:0},{url:"2SzeQqwhB1A",title:"incaseyoudidntknow",start:50,end:80,mute:0,delay:0},{url:"eM213aMKTHg",title:"needyounow",start:54,end:67,mute:0,delay:0},{url:"-2U0Ivkn2Ds",title:"saysomething",start:0,end:0,mute:0,delay:0},{url:"udnGW3E1vxY",title:"whatsmineisyours",start:0,end:0,mute:0,delay:0},{url:"un-rfEyPBO4",title:"alliwantisyou",start:0,end:0,mute:0,delay:0},{url:"mdsfxsvaDTY",title:"howtoloveawoman",start:102,end:170,mute:0,delay:0},{url:"T4pT1Y85uEg",title:"youweremeantforme",start:53,end:76,mute:0,delay:0},{url:"6NBiH44A7QI",title:"weddingdate",start:45,end:85,mute:0,delay:0}]},function(e){e.exports=[{url:"",delay:10,title:"blank"},{url:"https://i.pinimg.com/564x/cb/23/7c/cb237c7f806bcd0ecbd688991a99723b.jpg",delay:7,title:"smokekiss"},{url:"https://i.pinimg.com/564x/6b/da/9d/6bda9d1af8dcbabdebd714c67a054609.jpg",delay:7,title:"oneburnyoursoul"},{url:"https://i.pinimg.com/564x/1b/2a/77/1b2a77ba9d54c0423201ea3334cc58a5.jpg",delay:7,title:"soulmateisamirror"}]},,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),s=a.n(r),l=(a(18),function(e){e.text,document.getElementById("headerContainer");return console.dir(document),i.a.createElement("div",{id:"headerContainer"},i.a.createElement("span",{className:"headerTitle"},"D"),i.a.createElement("span",{className:"headerTitle"},"e"),i.a.createElement("span",{className:"headerTitle"},"a"),i.a.createElement("span",{className:"headerTitle"},"r"),i.a.createElement("span",{className:"headerTitle"}," "),i.a.createElement("span",{className:"headerTitle"},"D"),i.a.createElement("span",{className:"headerTitle"},"r"),i.a.createElement("span",{className:"headerTitle"},"e"),i.a.createElement("span",{className:"headerTitle"},"a"),i.a.createElement("span",{className:"headerTitle"},"m"),i.a.createElement("span",{className:"headerTitle"}," "),i.a.createElement("span",{className:"headerTitle"},"G"),i.a.createElement("span",{className:"headerTitle"},"i"),i.a.createElement("span",{className:"headerTitle"},"r"),i.a.createElement("span",{className:"headerTitle"},"l"),i.a.createElement("span",{className:"headerTitle"},","))}),o=a(1),u=a.n(o),c=a(2),d=a(3),m=a(4),h=a(6),p=a(5),g=a(7);var y=function(e){var t=e.video,a=t.url,n=t.title,r=t.start,s=t.end,l=t.mute;return i.a.createElement("iframe",{id:n,title:n,width:"700",height:"550",src:"https://www.youtube.com/embed/".concat(a,"?autoplay=1&start=").concat(r,"&end=").concat(s,"&mute=").concat(l,"&controls=0"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},f=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={videoIndex:0,currentVideo:{},running:!1,ended:!0},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.checkVideo()&&this.start()}},{key:"hasVideoData",value:function(){if(!this.props.videos.length)throw"no data found";try{if(this.props.videos.length)return!0}catch(e){console.log(e)}}},{key:"videoIndexIsGood",value:function(){return this.state.videoIndex>-1&&this.state.videoIndex<this.props.videos.length}},{key:"checkVideo",value:function(){if(this.hasVideoData()&&this.videoIndexIsGood())return!0}},{key:"start",value:function(){var e=Object(c.a)(u.a.mark(function e(){var t=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({videoIndex:0,currentVideo:this.props.videos[0],ended:!1,running:!0});case 2:setTimeout(function(){t.nextVideo()},1e3*this.state.currentVideo.delay);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"play",value:function(){this.setState({running:!0}),this.nextVideo()}},{key:"playPause",value:function(){this.setState({running:!this.state.running})}},{key:"stop",value:function(){console.log("stop"),this.setState({ended:!0})}},{key:"nextVideo",value:function(e){var t=this,a=++this.state.videoIndex;this.state.videoIndex===this.props.videos.length?this.start():(this.setState({videoIndex:a,currentVideo:this.props.videos[a]}),setTimeout(function(){t.nextVideo()},1e3*this.state.currentVideo.delay))}},{key:"render",value:function(){return i.a.createElement(y,{video:this.state.currentVideo})}}]),t}(n.Component);var v=function(e){var t=e.image,a=t.url,n=t.title;return i.a.createElement("img",{id:n,alt:"floating rotating image",src:a})},x=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={imageIndex:0,currentImage:{},running:!1,ended:!0},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.checkImages()&&this.start()}},{key:"hasImageData",value:function(){if(!this.props.images.length)throw"no data found";try{if(this.props.images.length)return!0}catch(e){console.log(e)}}},{key:"imageIndexIsGood",value:function(){return this.state.imageIndex>-1&&this.state.imageIndex<this.props.images.length}},{key:"checkImages",value:function(){if(this.hasImageData()&&this.imageIndexIsGood())return!0}},{key:"start",value:function(){var e=Object(c.a)(u.a.mark(function e(){var t=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({imageIndex:0,currentImage:this.props.images[0],ended:!1,running:!0});case 2:setTimeout(function(){t.nextImage()},1e3*this.state.currentImage.delay);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"play",value:function(){this.setState({running:!0}),this.nextImage()}},{key:"playPause",value:function(){this.setState({running:!this.state.running})}},{key:"stop",value:function(){this.setState({ended:!0})}},{key:"nextImage",value:function(e){var t=this,a=++this.state.imageIndex;this.state.imageIndex===this.props.images.length?this.start():(this.setState({imageIndex:a,currentImage:this.props.images[a]}),setTimeout(function(){t.nextImage()},1e3*this.state.currentImage.delay))}},{key:"render",value:function(){return this.state.currentImage.url?i.a.createElement(v,{image:this.state.currentImage}):null}}]),t}(n.Component),I=function(){return i.a.createElement("div",{id:"mobileAlert"},"If your video does not begin playing automatically please play it :)")},w=(a(21),a(22),a(8)),E=a(9);var b=function(){return window.screen.width<=480?i.a.createElement("div",{className:"App"},i.a.createElement(I,null),i.a.createElement(l,{text:"Annette"}),i.a.createElement(f,{videos:w}),i.a.createElement(x,{images:E})):i.a.createElement("div",{className:"App"},i.a.createElement(l,{text:"Annette"}),i.a.createElement(f,{videos:w}),i.a.createElement(x,{images:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.c5a141c1.chunk.js.map