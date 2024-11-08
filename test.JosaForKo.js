import { JosaForKo } from "./JosaForKo.js";

const jfk = new JosaForKo();

console.log('TEST hasJongseong()');
["가","각","갛","히","힉","힝","한글"].forEach(v => {
    let r = jfk.hasJongseong(v); 
    console.log(v,'=>',r);
});
console.log('-------=--------------------');

console.log('TEST appendJosa()');
["동물","강아지","단풍","단풍나무"].forEach(v => {
    let r = jfk.appendJosa(v,'은','는'); 
    let r2 = jfk.appendJosa(v,'이','가'); 
    let r3 = jfk.appendJosa(v,'을','를'); 
    let r4 = jfk.appendJosa(v,'과','와'); 
    console.log(v,'=>',r,r2,r3,r4);
});
console.log('-------=--------------------');

console.log('TEST convertString()');
let str = "마법의 성을 지나 늪을(를) 건너\n어둠의 동굴 속 멀리 그대이(가) 보여\n이제 나의 손을(를) 잡아보아요\n우리의 몸이(가) 떠오르은(는) 것을(를) 느끼죠";
let r = jfk.convertString(str);
console.log(str+'\n=>\n'+r);
console.log('-------=--------------------');