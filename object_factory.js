var ktw = {
    name:'ktw',
    first:10,
    second:20, 
    third:30,  // 만약 객체에 또 다른 내용이 추가 된다면
    sum:function(){
        return this.first + this.second + this.third; //여기도 수정해야 함
    }
}
var kim = {
    name:'kim',
    first:10,
    second:10,
    third:10,
    sum:function(){
        return this.first + this.second + this.third;
    }
}
console.log("ktw.sum()",ktw.sum());
console.log("kim.sum()",kim.sum());

var d1 = new Date('2020-03-20');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth()); // Month를 물어 볼 때는 0부터 세기 때문에 2가 출력된다