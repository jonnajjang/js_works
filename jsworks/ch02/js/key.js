//'y' 키를 누르면 "계속 반복"
//'n'키를 누르면 "반복 중단"
//그 이외의 키는 "입력 오류"

while(true){
    let key=prompt("계속 반복 할까요?", "y/n");
    if(key=='y'||key=='Y'){
        alert("계속 반복");
    }
    else if(key=='n'||key=='N'){
        alert("반복 중단");
        break;
    }
    else{alert("입력 오류")};
}
document.write("프로그램 종료")