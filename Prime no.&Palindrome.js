let count=0;
let num = 15;
    for (let x=0;x<=15;x++){
        if (num%2==0){
         count++;
        }
    }
    if(count==2){
        console.log("Yes");
    }else {
        console.log("No")
    }


let str="nrupul"
let bag="";
    for(i=(str.length-1); i>=0; i--){
        bag+=str[i];
   }   
    if (str==bag){
        console.log("Yes")
    }else {
        console.log("No")