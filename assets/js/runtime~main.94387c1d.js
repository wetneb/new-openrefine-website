(()=>{"use strict";var e,c,f,d,b,a={},t={};function r(e){var c=t[e];if(void 0!==c)return c.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return a[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=a,r.c=t,e=[],r.O=(c,f,d,b)=>{if(!f){var a=1/0;for(i=0;i<e.length;i++){for(var[f,d,b]=e[i],t=!0,o=0;o<f.length;o++)(!1&b||a>=b)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,b<a&&(a=b));if(t){e.splice(i--,1);var n=d();void 0!==n&&(c=n)}}return c}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[f,d,b]},r.n=e=>{var c=e&&e.__esModule?()=>e.default:()=>e;return r.d(c,{a:c}),c},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var a={};c=c||[null,f({}),f([]),f(f)];for(var t=2&d&&e;"object"==typeof t&&!~c.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((c=>a[c]=()=>e[c]));return a.default=()=>e,r.d(b,a),b},r.d=(e,c)=>{for(var f in c)r.o(c,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:c[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((c,f)=>(r.f[f](e,c),c)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",107:"b254d37e",131:"49d51f77",133:"565f5baf",136:"f1f6017f",184:"d4d19352",224:"37ddb9cb",312:"981a63b1",326:"70b22c62",357:"a2de3dc5",387:"faea2077",408:"b885d967",466:"71ac541b",529:"d572ffe7",609:"fccd26a7",616:"b55eb55e",622:"da62c3fb",626:"e8a9f889",725:"5bdb7b11",735:"829d1b87",754:"884f524c",765:"47187e65",776:"d73560e9",787:"b79bee7c",840:"28fee6ef",857:"6d3dd125",879:"1e2658bd",933:"2dfa6e63",939:"108cd139",948:"4261d543",979:"774e9a9b",1014:"846420f2",1047:"7040c173",1077:"ff50f166",1112:"172a1fb7",1121:"83061e3c",1230:"6887578e",1301:"bce36725",1361:"3289d23a",1389:"865dd359",1420:"cd04a488",1509:"c17eb851",1557:"66a2c1b1",1720:"9ce9e018",1721:"fe0590e1",1815:"a25c1ab7",1879:"b237d7f7",1919:"f26391af",1923:"b7f34526",1954:"eb4823da",1959:"8d1d5362",1987:"f1ad9223",2009:"fa3c1347",2104:"eb57d707",2120:"45496db9",2155:"43502576",2162:"245951f6",2163:"d5c02068",2279:"9862920d",2331:"1cc190e6",2339:"fe308d3c",2524:"540d8682",2535:"814f3328",2555:"138a83bd",2591:"cbe1caad",2664:"3216fa22",2680:"97ff03d9",2736:"07822e4d",2755:"9df2caca",2805:"6233eecc",2832:"327d6520",2875:"592e3096",2940:"26fc84bb",2954:"5689a720",2975:"ad942e24",3e3:"18442a41",3021:"7a925ee7",3022:"258322e7",3054:"92d825d3",3085:"1f391b9e",3089:"a6aa9e1f",3119:"9efc0ea6",3176:"c81ea984",3201:"6867d105",3237:"1df93b7f",3329:"4e745057",3384:"9f51e973",3393:"b370873e",3404:"f85f2bd6",3485:"cdcb01ad",3556:"8d1517bb",3571:"733cad10",3598:"8f606af8",3606:"dec2e9db",3608:"9e4087bc",3649:"404161fd",3663:"7e76e653",3708:"56dfa739",3714:"261ee9fa",3758:"863b0228",3815:"362f664f",3886:"169874db",3907:"43e74644",3935:"1236719e",3937:"0d7eab7f",3994:"ec336a06",4038:"96b6f975",4048:"374ac941",4077:"b17dcd50",4095:"2d285188",4212:"ce7c2e2b",4244:"b9354da6",4410:"408ec2eb",4437:"ebbd2f06",4457:"8be64979",4469:"5f243a85",4500:"69d7497f",4658:"10903309",4660:"b9f84732",4662:"82deb8b2",4693:"63797813",4742:"cff932db",4809:"e03f9c81",4823:"ca0edf9f",4828:"4fd11503",4843:"409ccdf9",4867:"33e69d98",4879:"f3c33e8e",4918:"a498d82f",4921:"a2aa6d9d",4923:"e44c9e4d",5004:"a88b5783",5040:"5800f084",5043:"390d5dff",5099:"8b787512",5275:"dc0aa2c5",5301:"e1899c0f",5313:"55fb47dc",5337:"118223cd",5344:"97803c53",5389:"4b21b167",5602:"705d1767",5611:"bec1e1ca",5683:"4c2998ba",5741:"a7787a45",5787:"a3e60c8d",5814:"53ff3a3b",5824:"ab37b6c3",5850:"eca542c2",5895:"cec82543",5904:"906e80b4",5943:"adb83d49",5983:"9c7c7e78",6002:"f5767dce",6064:"d7ba5ab9",6082:"54df7475",6103:"ccc49370",6145:"c911c08d",6154:"7ff7d6bc",6198:"a661f275",6226:"b10b1489",6251:"7e9c0261",6259:"b87d31ed",6346:"9aaa4381",6499:"6655f990",6508:"49efa14d",6537:"12320688",6601:"0c6e9205",6686:"7bdabb8d",6718:"b06ce4b0",6726:"c73f4203",6735:"0f92218a",6813:"6d864325",6840:"49d178e0",6968:"a3b78f02",6971:"c377a04b",6996:"e7b22fe0",7003:"bafed007",7031:"f19928ad",7069:"8ec854ec",7077:"bd4a3e11",7082:"ad078c65",7147:"d026e4a6",7256:"2e705871",7261:"e5b11ce5",7275:"a88cbd37",7303:"99af7b3a",7319:"8cf79b55",7325:"7d82e14c",7341:"168d8aea",7403:"55bc4d93",7410:"9137219b",7413:"bc919b77",7429:"ac555d45",7579:"118e312c",7617:"e05cb20f",7635:"f8ee83d1",7676:"3e74a011",7741:"ac0642aa",7767:"57c9004c",7814:"bbe6bf31",7895:"2790b249",7918:"17896441",7920:"1a4e3797",7937:"28509827",8012:"0a01f0f9",8033:"820f941d",8119:"be081021",8128:"a993ecf5",8297:"97097368",8337:"28c3e8bb",8417:"ad738b1d",8466:"943131a6",8498:"03011f2e",8528:"2a5633c0",8592:"84731dd4",8639:"fb23a99c",8705:"ff78cd9e",8855:"ec166fd2",8857:"b6cfdb68",8914:"2e1fccc2",8922:"d6d72f8d",8928:"3d912e66",8959:"56ffac34",8971:"0fc3e79c",8972:"42c94aad",8989:"f339182e",9036:"74753468",9052:"8e33b65d",9070:"fcce2904",9211:"8d5e79f7",9224:"c1207984",9258:"7babcf7a",9282:"8cc737dd",9291:"35935086",9319:"22c74215",9359:"5bff52fe",9396:"e2797bb5",9399:"3e582c53",9403:"a8d4ce69",9421:"41201c4d",9431:"91d57943",9442:"fb474725",9447:"b3e4046e",9489:"441e6cf7",9514:"1be78505",9576:"a423b87c",9666:"5989e03e",9680:"8266f505",9683:"88c79ee8",9698:"f1664796",9729:"37908d6c",9768:"093c48f0",9789:"2cf77b84",9805:"649bba64",9811:"0eba42b1",9816:"09d6870d",9825:"885fd8c6",9862:"b85f658b",9872:"d09bf521",9878:"add4d859",9942:"0f90d605",9946:"34588fc3",9956:"c2787e54"}[e]||e)+"."+{53:"bd1f6611",107:"3cea8f8d",131:"320aee5c",133:"d0ebf1fa",136:"ca7d622f",184:"3851fea1",210:"e67157e2",224:"32cb09f8",312:"37b26246",326:"5134f3a1",357:"a1587d26",387:"940d8968",408:"30c06577",466:"303f14ee",529:"3fcd21b0",609:"a0bbf0c7",616:"3b00dead",622:"2711cf4e",626:"e2cdb554",725:"0dfb96c9",735:"2538e4d0",754:"1742f74f",765:"0d55f14d",776:"a4b1daaa",787:"351f1dff",840:"a5a64583",857:"e465e58b",879:"124e471c",933:"9de2378c",939:"3c73b779",948:"38e529d4",979:"160df7b5",1014:"e0ac42fb",1047:"739a541b",1077:"241e62c2",1112:"974ac3be",1121:"a6e1a295",1230:"955c127e",1301:"7cc3bf9e",1361:"24233bd2",1389:"da3be76d",1420:"66348415",1509:"c17770f5",1557:"eb8c03f1",1720:"fef1eb6b",1721:"17bd9a59",1815:"acebcef2",1879:"3540e73d",1919:"ae22efd4",1923:"5e669c6f",1954:"4e2f7d24",1959:"9f4843ba",1987:"29e88ee1",2009:"77176b9f",2104:"95afdc79",2120:"c37e9d11",2155:"74cdf9f0",2162:"973e4196",2163:"7caa3cd9",2279:"ecb35a9a",2331:"866bdf20",2339:"e4dce6d8",2524:"fc6a7222",2529:"c42e5d16",2535:"ca389a5f",2555:"3ad21209",2591:"9f0e37ab",2664:"f2ce9989",2680:"ac796656",2736:"5e84d31e",2755:"42fc5e4a",2805:"e5ae6e97",2832:"e678f004",2875:"51ee9e31",2940:"eee90029",2954:"34d786b4",2975:"8ebc1b95",3e3:"1a6d0403",3021:"e71df3a1",3022:"42b2bd20",3054:"ee003140",3085:"75d07db1",3089:"797f7bfc",3119:"6ad6160b",3176:"ece76033",3201:"d294e789",3237:"d5a4d0e8",3329:"969eb243",3384:"b7561f93",3393:"b04d145b",3404:"84283558",3485:"1b16b443",3556:"06432434",3571:"881b45a8",3598:"6e23785f",3606:"df65dc27",3608:"9706c932",3649:"6e3bdb98",3663:"f4542af1",3708:"5fb8ee5c",3714:"c88a447a",3758:"3e8e5ab7",3815:"b3e02014",3886:"4468aebe",3907:"e47a8495",3935:"01ee29a3",3937:"b4b789e9",3994:"85e99ada",4038:"6c671388",4048:"27f872c5",4077:"88f67e2c",4095:"c8a82f87",4212:"be4e0119",4244:"0cb18b2f",4410:"8310c5ee",4437:"91fccca0",4457:"309ec6d5",4469:"3fcfb731",4500:"11533c44",4658:"c2f7708a",4660:"ce1c71a2",4662:"98f2d02c",4693:"7aed77cc",4742:"7c41880d",4809:"aa356b38",4823:"98d8c6ba",4828:"cb9fd91c",4843:"71083c5a",4867:"6e2b2389",4879:"af474e9c",4918:"5548a71b",4921:"9af03ac3",4923:"6574c9e9",4972:"18a57d49",5004:"8d1b57a9",5040:"93108524",5043:"2c2e9ec8",5099:"5044e866",5275:"875eb82e",5301:"0ecdf860",5313:"f6cc08b3",5337:"089290ec",5344:"2221027b",5389:"658d8318",5602:"682ad601",5611:"9a05f526",5683:"c6747f23",5741:"bdad53e6",5787:"de6e065f",5814:"062bfb31",5824:"9093f588",5850:"8fc950b3",5895:"68cfc9cf",5904:"dac0cec9",5943:"84ee0385",5983:"a2178096",6002:"1ab9684b",6064:"0dd653e9",6082:"928b161c",6103:"54be515a",6145:"b965dbc3",6154:"7ac59d70",6198:"13cec484",6226:"27be5b78",6251:"da197d17",6259:"a751fd4b",6346:"6c7a8ace",6499:"b0ae5c62",6508:"cf1b96f1",6537:"a409323e",6601:"40049ee2",6686:"4eab62df",6718:"ce7e9a8f",6726:"ccac1365",6735:"e1eb350b",6780:"e4843b21",6813:"990b9089",6840:"a08a6116",6945:"4bd2be81",6968:"03cd7bee",6971:"a141a830",6996:"1db1814c",7003:"7ed25dd3",7031:"def5938a",7069:"4fd697dd",7077:"6fd146a3",7082:"d2c7a938",7147:"f63b9abc",7256:"de2e84b5",7261:"7ab61db0",7275:"06c281c9",7303:"8b8b5873",7319:"6931b5eb",7325:"08d5fd6c",7341:"eeef71a1",7403:"50c9a502",7410:"9badee7e",7413:"c84306ef",7429:"003ad657",7579:"68ee99c4",7617:"8fbe9234",7635:"04313359",7676:"ffdf17d8",7741:"9d336422",7767:"f75c6df2",7814:"90d44bee",7895:"1bfcdce3",7918:"eaf942be",7920:"3060dbdb",7937:"c9157a09",8012:"b181fa26",8033:"fb17ee10",8119:"150e2364",8128:"06b68aed",8297:"41dda6d0",8337:"7ecfc74c",8417:"2de6b588",8466:"1cca239e",8498:"9d8c6b4e",8528:"b36d10e7",8592:"aae915dc",8639:"870c03db",8705:"f84ce0b7",8855:"18f61793",8857:"fa632624",8894:"a927b59f",8914:"1eebaa59",8922:"32a6f82f",8928:"e67f117a",8959:"8766d221",8971:"fc1f4a46",8972:"d5a93ebf",8989:"3462559d",9036:"08eaf19e",9052:"c1b8dc80",9070:"53f4aaff",9211:"3d9f9f0e",9224:"5a8fd728",9258:"5508a92e",9282:"3075c55b",9291:"05173e07",9319:"f6fb3b67",9359:"f96bdbc7",9396:"c590a4d4",9399:"4fb8cd10",9403:"3f822c26",9421:"fe0bbba1",9431:"c3c10d0b",9442:"34272261",9447:"4ae46cf4",9489:"a04554f2",9514:"5720c4f0",9576:"c9589a71",9666:"21a8f703",9680:"557d7f33",9683:"65503b43",9698:"1fd26a09",9729:"4804bac0",9768:"daeaffe2",9789:"a03ad160",9805:"672b0fd3",9811:"1bf39e83",9816:"89f3599d",9825:"5a5fd1e5",9862:"ad5024b9",9872:"4e90bfd7",9878:"744d111b",9942:"d116b14b",9946:"e8d5c6b2",9956:"b9539a73"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,c)=>Object.prototype.hasOwnProperty.call(e,c),d={},b="OpenRefine-Documentation:",r.l=(e,c,f,a)=>{if(d[e])d[e].push(c);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+f),t.src=e),d[e]=[c];var l=(c,f)=>{t.onerror=t.onload=null,clearTimeout(s);var b=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(f))),c)return c(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/new-openrefine-website/",r.gca=function(e){return e={10903309:"4658",12320688:"6537",17896441:"7918",28509827:"7937",35935086:"9291",43502576:"2155",63797813:"4693",74753468:"9036",97097368:"8297","935f2afb":"53",b254d37e:"107","49d51f77":"131","565f5baf":"133",f1f6017f:"136",d4d19352:"184","37ddb9cb":"224","981a63b1":"312","70b22c62":"326",a2de3dc5:"357",faea2077:"387",b885d967:"408","71ac541b":"466",d572ffe7:"529",fccd26a7:"609",b55eb55e:"616",da62c3fb:"622",e8a9f889:"626","5bdb7b11":"725","829d1b87":"735","884f524c":"754","47187e65":"765",d73560e9:"776",b79bee7c:"787","28fee6ef":"840","6d3dd125":"857","1e2658bd":"879","2dfa6e63":"933","108cd139":"939","4261d543":"948","774e9a9b":"979","846420f2":"1014","7040c173":"1047",ff50f166:"1077","172a1fb7":"1112","83061e3c":"1121","6887578e":"1230",bce36725:"1301","3289d23a":"1361","865dd359":"1389",cd04a488:"1420",c17eb851:"1509","66a2c1b1":"1557","9ce9e018":"1720",fe0590e1:"1721",a25c1ab7:"1815",b237d7f7:"1879",f26391af:"1919",b7f34526:"1923",eb4823da:"1954","8d1d5362":"1959",f1ad9223:"1987",fa3c1347:"2009",eb57d707:"2104","45496db9":"2120","245951f6":"2162",d5c02068:"2163","9862920d":"2279","1cc190e6":"2331",fe308d3c:"2339","540d8682":"2524","814f3328":"2535","138a83bd":"2555",cbe1caad:"2591","3216fa22":"2664","97ff03d9":"2680","07822e4d":"2736","9df2caca":"2755","6233eecc":"2805","327d6520":"2832","592e3096":"2875","26fc84bb":"2940","5689a720":"2954",ad942e24:"2975","18442a41":"3000","7a925ee7":"3021","258322e7":"3022","92d825d3":"3054","1f391b9e":"3085",a6aa9e1f:"3089","9efc0ea6":"3119",c81ea984:"3176","6867d105":"3201","1df93b7f":"3237","4e745057":"3329","9f51e973":"3384",b370873e:"3393",f85f2bd6:"3404",cdcb01ad:"3485","8d1517bb":"3556","733cad10":"3571","8f606af8":"3598",dec2e9db:"3606","9e4087bc":"3608","404161fd":"3649","7e76e653":"3663","56dfa739":"3708","261ee9fa":"3714","863b0228":"3758","362f664f":"3815","169874db":"3886","43e74644":"3907","1236719e":"3935","0d7eab7f":"3937",ec336a06:"3994","96b6f975":"4038","374ac941":"4048",b17dcd50:"4077","2d285188":"4095",ce7c2e2b:"4212",b9354da6:"4244","408ec2eb":"4410",ebbd2f06:"4437","8be64979":"4457","5f243a85":"4469","69d7497f":"4500",b9f84732:"4660","82deb8b2":"4662",cff932db:"4742",e03f9c81:"4809",ca0edf9f:"4823","4fd11503":"4828","409ccdf9":"4843","33e69d98":"4867",f3c33e8e:"4879",a498d82f:"4918",a2aa6d9d:"4921",e44c9e4d:"4923",a88b5783:"5004","5800f084":"5040","390d5dff":"5043","8b787512":"5099",dc0aa2c5:"5275",e1899c0f:"5301","55fb47dc":"5313","118223cd":"5337","97803c53":"5344","4b21b167":"5389","705d1767":"5602",bec1e1ca:"5611","4c2998ba":"5683",a7787a45:"5741",a3e60c8d:"5787","53ff3a3b":"5814",ab37b6c3:"5824",eca542c2:"5850",cec82543:"5895","906e80b4":"5904",adb83d49:"5943","9c7c7e78":"5983",f5767dce:"6002",d7ba5ab9:"6064","54df7475":"6082",ccc49370:"6103",c911c08d:"6145","7ff7d6bc":"6154",a661f275:"6198",b10b1489:"6226","7e9c0261":"6251",b87d31ed:"6259","9aaa4381":"6346","6655f990":"6499","49efa14d":"6508","0c6e9205":"6601","7bdabb8d":"6686",b06ce4b0:"6718",c73f4203:"6726","0f92218a":"6735","6d864325":"6813","49d178e0":"6840",a3b78f02:"6968",c377a04b:"6971",e7b22fe0:"6996",bafed007:"7003",f19928ad:"7031","8ec854ec":"7069",bd4a3e11:"7077",ad078c65:"7082",d026e4a6:"7147","2e705871":"7256",e5b11ce5:"7261",a88cbd37:"7275","99af7b3a":"7303","8cf79b55":"7319","7d82e14c":"7325","168d8aea":"7341","55bc4d93":"7403","9137219b":"7410",bc919b77:"7413",ac555d45:"7429","118e312c":"7579",e05cb20f:"7617",f8ee83d1:"7635","3e74a011":"7676",ac0642aa:"7741","57c9004c":"7767",bbe6bf31:"7814","2790b249":"7895","1a4e3797":"7920","0a01f0f9":"8012","820f941d":"8033",be081021:"8119",a993ecf5:"8128","28c3e8bb":"8337",ad738b1d:"8417","943131a6":"8466","03011f2e":"8498","2a5633c0":"8528","84731dd4":"8592",fb23a99c:"8639",ff78cd9e:"8705",ec166fd2:"8855",b6cfdb68:"8857","2e1fccc2":"8914",d6d72f8d:"8922","3d912e66":"8928","56ffac34":"8959","0fc3e79c":"8971","42c94aad":"8972",f339182e:"8989","8e33b65d":"9052",fcce2904:"9070","8d5e79f7":"9211",c1207984:"9224","7babcf7a":"9258","8cc737dd":"9282","22c74215":"9319","5bff52fe":"9359",e2797bb5:"9396","3e582c53":"9399",a8d4ce69:"9403","41201c4d":"9421","91d57943":"9431",fb474725:"9442",b3e4046e:"9447","441e6cf7":"9489","1be78505":"9514",a423b87c:"9576","5989e03e":"9666","8266f505":"9680","88c79ee8":"9683",f1664796:"9698","37908d6c":"9729","093c48f0":"9768","2cf77b84":"9789","649bba64":"9805","0eba42b1":"9811","09d6870d":"9816","885fd8c6":"9825",b85f658b:"9862",d09bf521:"9872",add4d859:"9878","0f90d605":"9942","34588fc3":"9946",c2787e54:"9956"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(c,f)=>{var d=r.o(e,c)?e[c]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var b=new Promise(((f,b)=>d=e[c]=[f,b]));f.push(d[2]=b);var a=r.p+r.u(c),t=new Error;r.l(a,(f=>{if(r.o(e,c)&&(0!==(d=e[c])&&(e[c]=void 0),d)){var b=f&&("load"===f.type?"missing":f.type),a=f&&f.target&&f.target.src;t.message="Loading chunk "+c+" failed.\n("+b+": "+a+")",t.name="ChunkLoadError",t.type=b,t.request=a,d[1](t)}}),"chunk-"+c,c)}},r.O.j=c=>0===e[c];var c=(c,f)=>{var d,b,[a,t,o]=f,n=0;if(a.some((c=>0!==e[c]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(c&&c(f);n<a.length;n++)b=a[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},f=self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[];f.forEach(c.bind(null,0)),f.push=c.bind(null,f.push.bind(f))})()})();