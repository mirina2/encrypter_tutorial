let alphabet = new Array();
let first = 97;
for(var i = 0; i<26; i++) {
    alphabet[i] = String.fromCharCode(first);
    first++;
}
function cipher1(key,plaintext) {
    let codeArr = new Array();
    var codeStr = '';
    let num;
    plaintext = plaintext.toLowerCase();
    let len = plaintext.length;
    if(typeof(key) != 'number') {
        console.log("Key must be number.");
        return 0;
    }
    
    if(26%key == 0 || key%26 == 0 || key == 0) {
        console.log("This key is BAD KEY. try again.");
        return 0;
    }
    for(var k = 1;k<=26;k++) {
        let mod = (k*key)%26;
        if(mod == 0) mod = 26;
        codeArr[k] = alphabet[mod-1];
        console.log(codeArr[k]);
    }
    for(var n = 0;n<len;n++) {
        num = plaintext[n].charCodeAt();
        if(plaintext[n] == ' ') {
            continue;
        }
        else if(num<97 || num>122 ) {
            codeStr+=plaintext[n];
        }
        else {
            codeStr+=codeArr[num-96];
        }
    }
    return codeStr;
}   
console.log(cipher1(3,"put plaintext here"));
