var ktw = {    // var ktw = kim = { } 이라고 하면 ktw, kim 둘 다 적용 됨
    name:'ktw',
    first:10,
    second:20,
    sum:function(f, s){
        //return f + s;
        //return ktw.first + ktw.second;
        return this.first + this.second;   // 이제 객체의 이름이 변경되어도 잘 적용된다.
    }
}
console.log("sum", ktw.sum(ktw.first, ktw.second));  //아쉬운 점이 있다.  --> ktw라는 객체는 점수를 내부적으로 
                                                     //이미 가지고 있지만 한번 더 언급하게 됨 --> f+s를 수정
console.log(ktw.sum());  // this를 사용하여 간단히 작성할 수 있다.

