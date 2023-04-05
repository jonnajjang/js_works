//이미지 바꾸기
let bigPic = document.getElementById("cup");
let smallPics = document.querySelectorAll(".small");
console.log(smallPics.length);

//smallPics[0].onclick = showBig;

//클릭 이벤트 발생
for(let i=0;i<smallPics.length;i++){
    //smallPics[i].onclick = showBig;//showBig()호출
    //addEventListener()이벤트 처리기(접두어 'on'을 붙이지)
    smallPics[i].addEventListener("click", function(){
    console.log(this.src);
    bigPic.setAttribute("src", this.src);
    })
}

// function showBig(){
//     console.log(this.src);
//     bigPic.setAttribute("src", this.src);
// }