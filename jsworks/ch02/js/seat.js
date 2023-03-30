 //입장객 수에 따른 좌석 줄 계산
 let customer = prompt("몇명이 오나요");  //인원 수
 let colNum = prompt("한줄에 몇명씩 앉나요"); //열 수
 let rowNum; //행(줄)의 수

 //나머지가 있나 없나 처리
 if(customer == null || colNum == null){
     document.write("입력이 취소되었습니다.")
 }
 else{
     if(customer %colNum == 0){
         rowNum = customer / colNum;
     }else{
         rowNum = parseInt(customer / colNum)+1;

     }
     //document.write(rowNum+"개의 줄이 필요합니다.")
     
 }
 document.write("<table>")
 for(var i=0; i<rowNum;i++){
    document.write("<tr>")
    for(var j=1; j<=colNum;j++){
        var seatNum =colNum*i*j;
        if(seatNum>customer) //좌석번호가 고객수보다 클때 빠져나옴
            break;
        document.write("좌석"+seatNum+"");
    }
    document.write("<br>");
    document.write("</tr>");
   }
   document.write("</table>")