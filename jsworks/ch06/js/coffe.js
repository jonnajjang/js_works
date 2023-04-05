//상세 설명 보기
let view = document.getElementById("view");
let detail = document.getElementById("detail");

//토글 프로그래밍
let sw=true;
view.addEventListener("click", function(){
    if(sw){
        detail.style.display="block";
        view.innerText = "상세 설명 닫기";
        sw = false;
    }
    else{
        detail.style.display="none";
        view.innerText = "상세 설명 닫기";
        sw = true;
    }
})