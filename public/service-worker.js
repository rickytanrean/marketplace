if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,f,i)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const b={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return s;case"module":return b;default:return e(c)}})).then(e=>{const c=i(...e);return s.default||(s.default=c),s})}))}}define("./service-worker.js",["./workbox-85cf717f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"nextshop"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/css/10.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/11.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/12.debbeb20.css",revision:"c16cde3db5ad73c8375a81ce4aba4037"},{url:"/css/13.f2cb05fa.css",revision:"7cafcf68ad64acdaf43339d9037523b3"},{url:"/css/14.08ca95e9.css",revision:"72eb2c485cfb75d1d86c1b5020144b11"},{url:"/css/8.7be82e54.css",revision:"00a54871ae897ba188247cd20628733d"},{url:"/css/9.b6967652.css",revision:"0b48bbaef9b3a7701678ad2da743331a"},{url:"/css/app.31bd41b9.css",revision:"8d0d3b723b0cb927e76150b92e802afa"},{url:"/css/canvas.css",revision:"f87be401d30b0805e4caaba91935e642"},{url:"/css/chunk-common.a4b6411e.css",revision:"8c002f747e9a336b413ee32f1dce018e"},{url:"/css/vendor.100acf1c.css",revision:"baa7cbbc2170165ddbb5364031f93a6d"},{url:"/fonts/Eva-Icons.2f2b9626.woff",revision:"a5ee087912cbedb6022426ea0b41f8bd"},{url:"/fonts/Eva-Icons.ac165c67.woff2",revision:"cae252678f70ff0200acde68a6e74640"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"/fonts/ionicons.175f391f.woff2",revision:"96f1c901c087fb64019f7665f7f8aca6"},{url:"/fonts/ionicons.bf69b013.woff",revision:"99b863497156d4478ec3489fefb3815c"},{url:"/icon/favicon.png",revision:"2e71913be148cf98b8edb40ab091763b"},{url:"/icon/icon-120x120.png",revision:"42db73b8e6ae8b9a4fe60a8934f3174f"},{url:"/icon/icon-128x128.png",revision:"eec3fab141cd00f9358e964486579bd0"},{url:"/icon/icon-144x144.png",revision:"302e936bd45aeab52491dce203d7a960"},{url:"/icon/icon-152x152.png",revision:"319e537294cdcd2806b6f25bdc384509"},{url:"/icon/icon-167x167.png",revision:"c5bf7048220f415cee20f91d3140751e"},{url:"/icon/icon-180x180.png",revision:"d1e985fc5667de60491c67d526b437c8"},{url:"/icon/icon-192x192.png",revision:"0fb9555cf950264ac9e06c49574e3455"},{url:"/icon/icon-256x256.png",revision:"b0a51c06528d3f0229f7451eea306b65"},{url:"/icon/icon-384x384.png",revision:"811a986291acaee7de4b735f3662a015"},{url:"/icon/icon-512x512.png",revision:"058577d0dd5a1811944e4c0ca9281b02"},{url:"/icon/icon-96x96.png",revision:"0fab17e38356f57913b63355f4266576"},{url:"/index.php",revision:"1b5f688017ff141141b3a9007b5d5525"},{url:"/js/10.0033acf5.js",revision:"f275b55439e67ef50ad323b111286c2c"},{url:"/js/11.ce231f45.js",revision:"bcf0acffaf8d92d04d78548b3976993f"},{url:"/js/12.6598ff87.js",revision:"ffcc33ababbf8f1e11021b2dfa9fed44"},{url:"/js/13.a8a881df.js",revision:"95cccee551ac8b1c53d42f946528b01c"},{url:"/js/14.1f64e0ba.js",revision:"a648c72d6ea5eb7300728e752909e907"},{url:"/js/15.f51f8e96.js",revision:"1aea08281c2ea6bef02e736b31b1f5b5"},{url:"/js/16.ede542ed.js",revision:"d02b8438bcdbdb60dbf3c991a20cb8e8"},{url:"/js/17.6d953a5c.js",revision:"89b0c0085cbd3f3a7d02826f8c83f34d"},{url:"/js/18.bd2574fb.js",revision:"75cde547b93358e66053279f8cfb3048"},{url:"/js/19.56ed1b85.js",revision:"fc6fd80deefd53d32148d8cf6c511d22"},{url:"/js/2.d9a52607.js",revision:"9738e93dceb394594e1b2ee7157aee45"},{url:"/js/20.5631158d.js",revision:"d79aef366d3ad19155d3604fa560bbe6"},{url:"/js/21.6ee48c13.js",revision:"36142a46c4cafcec54901a5c41144a6c"},{url:"/js/22.26de3111.js",revision:"962b543b19608061fdd3e0946544ac61"},{url:"/js/23.8454c18c.js",revision:"ef55c8f44124e1f316c24164584f50ed"},{url:"/js/24.7e50e5fa.js",revision:"5a5e1d6f34dfa444499f26f0355f7665"},{url:"/js/25.8efff4a7.js",revision:"3ba78b2508b1f6133e24b462ef2925eb"},{url:"/js/26.835e71c2.js",revision:"cbd15149cde9c92dd4bced4cb1411b49"},{url:"/js/27.a5b67380.js",revision:"53183e75b8d4b2e18245f35e7df7889b"},{url:"/js/28.0cbfbed8.js",revision:"1da54afbde0f320051890548ba516b9c"},{url:"/js/29.bc3f7641.js",revision:"7a897e1b551c8f8c9fc7faf555ee9171"},{url:"/js/3.965d7a03.js",revision:"1b7b7099453de3f26ed931074eec893a"},{url:"/js/30.9783ea53.js",revision:"5c87811acf7c45ec548d1cb387667607"},{url:"/js/31.edf1b509.js",revision:"254c8740d87866e34720c1ea77e0dec0"},{url:"/js/32.dfd39d45.js",revision:"b442c8e12ac43d4e1809fe82e19ffdfa"},{url:"/js/33.d3166e0c.js",revision:"aa6aca5c340f9a4280083a14d7a3c717"},{url:"/js/34.0d9365be.js",revision:"a12e28c292cddafe55561d6b0b2da9ae"},{url:"/js/35.11622a64.js",revision:"c47808e074be0e63f8d3dc76f0a89331"},{url:"/js/36.1ba4ab67.js",revision:"6a7b1f6428f213f7000c46cc87d8bc5a"},{url:"/js/37.ab902eb7.js",revision:"1d28c1e875c9b079bbc656e6ded92ab0"},{url:"/js/38.90b3d3d6.js",revision:"2b8f175c765a28e52ec5375ac9fb1d14"},{url:"/js/39.19ce28f7.js",revision:"b895e1802dd9f95cffe426a23e066eb3"},{url:"/js/4.4b5b238e.js",revision:"ea7517f3484928ca10bc2bd2fe45500e"},{url:"/js/40.240a0898.js",revision:"e6dbec8e31d09e46a06a5eb680c7058e"},{url:"/js/41.9beb4636.js",revision:"bc460a3d074efbdbe05a692e3ede9e0e"},{url:"/js/42.0b8853d2.js",revision:"cac3d1b3719a3020accc65ae2aef5328"},{url:"/js/43.0eaea3e4.js",revision:"9112eff89744304630a9a335ff6a92c7"},{url:"/js/44.7cd176cc.js",revision:"e71f75989690944439a8b458dd54d389"},{url:"/js/45.27850ee9.js",revision:"d00b4d74de765788bd678501527c33ed"},{url:"/js/46.bdde4fde.js",revision:"c3094062d77cd892d4d4bcc601be3312"},{url:"/js/47.007a37af.js",revision:"efd8f9629ce3affa28eec74802d530da"},{url:"/js/48.9cdc73a5.js",revision:"3c6b8bc51aa81f9f04555278334ff0c9"},{url:"/js/49.cead6062.js",revision:"638a554bdb88c86ebc742e67722219b3"},{url:"/js/5.d58520ab.js",revision:"d5ff671c771faf2aca2539096eae9647"},{url:"/js/50.f6204d70.js",revision:"97235aab55969aa22f083131f72b8f28"},{url:"/js/51.4e45757a.js",revision:"ce8a24edd1f70b4c281a50111e9cc312"},{url:"/js/52.512afc55.js",revision:"b798123b8e5fe6911e3e069188638695"},{url:"/js/53.dfd613f4.js",revision:"b73f383b2a780a09e91e54c296c8924c"},{url:"/js/54.8f8ea4fe.js",revision:"bd24157cc30c676625410c8010a1509e"},{url:"/js/55.4df3e5f8.js",revision:"f51edad7416965162cd7abcc71fd52a6"},{url:"/js/56.236bf67e.js",revision:"8d2b4ba38893689cbaee4d4b84dbd256"},{url:"/js/57.e8a4497d.js",revision:"10d3d5a6f1e3c96a29222ed23c074d53"},{url:"/js/58.8ef44abf.js",revision:"fe4eefbf6535cfdc0015cd97e0db40b1"},{url:"/js/59.3b5dc92d.js",revision:"b34f4e89cfbe60a75dc9a29ac34fedc2"},{url:"/js/6.ebe8ef24.js",revision:"b77d697e5230855fc8065e62a488a499"},{url:"/js/8.83deed40.js",revision:"1a8897318041ab9b05ac596541be27d5"},{url:"/js/9.02fec633.js",revision:"537d4098e6f8eb0c2bd2014b6783d915"},{url:"/js/app.5c4ad797.js",revision:"6ced13df4a657b635639be177116bdf9"},{url:"/js/chunk-common.4142ffeb.js",revision:"38f901cbf26af15db13c2135fb74eef7"},{url:"/js/vendor.a35c557f.js",revision:"0cc6ab972801460eeb3bf0948c2496e2"},{url:"/manifest.json",revision:"6bdd49ba2c80cf480be1b0e8504de745"},{url:"/static/banner-default.jpg",revision:"d0d2d843fe60b59298d0a37233229b67"},{url:"/static/material.png",revision:"a700e98fc6da7c5b8e71a6ee62f5bd94"},{url:"/static/no_image.png",revision:"82c7055ecf1dcd526c8aa9dfa9d2e4b6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.php"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
