//아이템 리스트
let itemList=[];

let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addList);

//아이템 추가 함수
function addList(){
    let item = document.getElementById("item").value;
    itemList.push(item);
    document.getElementById("item").value="";//기존 리스트 초기화
    document.getElementById("item").focus();//텍스트 커서 자동위치

    showList();
}

function showList(){
    let list = "<ul>"; //목록 리스트 변수
    for(let i=0; i<itemList.length;i++){
        list += "<li>"+itemList[i]+"<span class='close' id="+i+">x</span></li>"
    }
    list+="</ul>"
    document.getElementById("itemList").innerHTML = list;
 
    //아이템 삭제
    //'x'를 선택
    let removeList = document.querySelectorAll(".close");

    for(let i=0; i<removeList.length;i++){
        removeList[0].addEventListener("click", remove);
    }

    function remove(){
        console.log(this);
        let id = this.getAttribute("id");
        itemList.splice(id,1);

        //목록보기
        showList();
    }
}