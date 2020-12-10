console.log(Math.PI);
console.log(Math.random()); //method
console.log(Math.floor(3.9)); //내림
//이미 만들어진 객체를 사용하지 않고 자바스크립트 애플리케이션을 만든다는 것은 사실상 불가능하다.!!!!!!!!!!!!!

var MyMath = {
    //1   PI: ~~~   --> MyMath.PI
    PI:Math.PI,    // = PI:3.141592......
    //2   random: ~~~ --> MyMath.random()
    random:function(){
        return Math.random();
    },
    //    floor: ~~~ --> MyMath.floor()   이런 방식으로 작동한다~!!
    floor:function(val){
        return Math.floor(val);
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(4.8)", MyMath.floor(4.8));


//디렉토리를 사용하지 않으면 아래처럼 하게 된다.
var MyMath_PI = Math.PI; // _를 통해 이름이 중복되는 것을 피할 수 있다.
function MyMath_random(){
    return Math.random();
}
function MyMath_floor(val){
    return Math.floor(val);
}