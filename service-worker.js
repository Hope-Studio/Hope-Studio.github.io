if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let f={};const d=e=>a(e,i),o={module:{uri:i},exports:f,require:d};s[i]=Promise.all(c.map((e=>o[e]||d(e)))).then((e=>(r(...e),f)))}}define(["./workbox-cc9d59eb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-3eda0b4c.js",revision:"b4e678ced250775c9862b09a691c6f07"},{url:"assets/404.html-f57bb609.js",revision:"d72525dcf9611cffbb4bb8c3334477f1"},{url:"assets/about.html-4802f818.js",revision:"1e0d44462bcc0883eaaa7f93ed01ac06"},{url:"assets/about.html-5afed8fe.js",revision:"0e694b7e25b8eb183485059cf28c372c"},{url:"assets/app-7788eb73.js",revision:"d1aedbfa4a4c35f5af395f42f742d5c4"},{url:"assets/component-3c594dc0.js",revision:"3ad73f261778d22caf80a5783c0f8e46"},{url:"assets/content.html-7079bb8e.js",revision:"9d13099e363fcfbcac309c3cbd889468"},{url:"assets/content.html-c2c645ad.js",revision:"2ce7d20de63d04653e6776ba84cc832d"},{url:"assets/framework-10635fcc.js",revision:"950bcc12c42c92bbf8c80f7def6cc9ab"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-27130b0f.js",revision:"84b3a6d5ea435fae1ccb955d44092f68"},{url:"assets/index.html-339f3b6c.js",revision:"b0862457beb598a09fffb2c62d02ed87"},{url:"assets/index.html-5d2982b0.js",revision:"663b08280fc2484a0f49561aef997fcb"},{url:"assets/index.html-acda5218.js",revision:"130efc7a3c3d5f8c3e7736af65392f4a"},{url:"assets/index.html-f805e1f4.js",revision:"1f3543b4e2d50deff7a9ed1035863192"},{url:"assets/index.html-ff562db2.js",revision:"69bffc186289603a51deea810d9e645c"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-d92a2fc9.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/need.html-2a8d2cec.js",revision:"22798a06a5294117487406421b7c16e7"},{url:"assets/need.html-d7d49640.js",revision:"39a6581f3305781caad0b21e69220ec3"},{url:"assets/notice.html-138d9d66.js",revision:"7104fe045ff44eb1f3182e2e5e616cc9"},{url:"assets/notice.html-cd8a7db2.js",revision:"3fe345b456ad1d4f0f08e23f1f2fe2f4"},{url:"assets/photoswipe.esm-04fddac6.js",revision:"9ad259a6b763e1045e31c1ec4984750d"},{url:"assets/reveal.esm-e5069ce0.js",revision:"383acd58551019bedc482d68f9eaddef"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style-2033c3ae.css",revision:"b84055976b2c2e0c3163ae08dab87da2"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"index.html",revision:"fd54f23c9f0b1cdb78b694b626a79367"},{url:"404.html",revision:"34b2c81a6b0366d382fae0d2e3c89857"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
