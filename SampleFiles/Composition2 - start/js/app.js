str = 'Innovation distinguishes between a leader and a follower.';
let prepareString = function() {
    let str1 = str.trim();
    let str2 = str1.replace(/[?.,!]/g,'');
    let str3 = str2.toUpperCase();
    let arr = str3.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A' || arr[i] === 'AN' || arr[i] === 'THE') {
            arr.splice(i,1);
        }
    }
    return arr;
};