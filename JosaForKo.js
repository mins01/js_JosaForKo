export class JosaForKo{
    // charCode_가 = 44032;
    // charCode_각 = 44033;
    // charCode_갛 = 44059;

    // charCode_히 = 55176;
    // charCode_힉 = 55177;
    // charCode_힝 = 55197;
    
    // an initial consonant (초성 | choseong)
    // a vowel (중성 | jungseong)
    // an optional final consonant (종성 | jongseong)

    /**
     * 
     * @param {String} str 
     * @returns NFC 처리된 문자열
     */
    ConvertNFC(str){
        return str.normalize('NFC');
    }

    /**
     * 
     * @param {String} word 
     * @returns true: 종성 있음, false: 종성 없음 또는 이상한 문자열
     */
    hasJongseong(word){
        let len = word.length;
        if(!len){ return false; }
        let lastCharCode = word.charCodeAt(len-1);
        if(lastCharCode < 44032 || lastCharCode > 55197){ return false; }
        return !!((lastCharCode-44032)%28);
        
    }

    appendJosa(word,josa_1,josa_0){
        return word+((this.hasJongseong(word))?josa_1:josa_0)
    }

    convertString(str){
        // let matches = str.matchAll(/.(?:은\(는\)|이\(가\)|을\(를\)|와\(과\))/g).toArray().reverse();
        let matches = [...str.matchAll(/.(?:은\(는\)|이\(가\)|을\(를\)|와\(과\))/g)].reverse();
        matches.forEach(r => {
            let word = r[0];
            let char = word.substring(0,1);
            let josa_1 = word.replace(/^.(.+)\(.+\)$/,'$1');
            let josa_0 = word.replace(/^..+\((.+)\)$/,'$1');
            let replace_word = this.hasJongseong(char)?char+josa_1:char+josa_0;
            let s1 = str.substring(0,r['index']);
            // let s2 = str.substring(r['index'],r['index']+word.length);
            let s2 = replace_word;
            let s3 = str.substring(r['index']+word.length);
            
            // console.log(r['index'],s1+"["+word+'=>'+s2+"]"+s3)
            str = s1+s2+s3;
        });
        return str;
    }
}

// 은/는
// 이/가
// 을/를
// 와/과