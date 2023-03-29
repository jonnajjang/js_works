//놀이공원 입장료 계산
let age= prompt("나이를 입력하세요.","1");
age=parseInt(age);
let charge;

//if문 처리
if(age<8){
    document.write("취학전 아동입니다.<br>");
    charge=1000;
}

else if(age >= 8 && age < 14){
    document.write("초등학생입니다.<br>");
    charge=2000;
}
else if(age >= 15 && age < 20){
    document.write("중고등학생입니다.<br>");
    charge=3000;
}
else{
    document.write("일반인입니다.<br>");
    charge=4000;
}

document.write("입장료는<span class='access'>"+charge+"원</span> 입니다.")