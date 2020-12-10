var memberArray = ['rlaxodn0320', 'good', 'nice'];
console.group('array loop');
var i = 0;
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');
var memberObject = {
    manager:'rlaxodn0320',
    developer:'good',
    designer:'nice'
}
console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]); //.뒤에 변수는 못 옴
}
console.groupEnd('object loop');