

//######## Beak Loop######
// let dishes = []
// for (a=0;a<=50;a++){
//     fav_dsh=prompt("Tell me your favorite dish name or press q to quit")
//     if (fav_dsh !='q'){
//         dishes.push(fav_dsh)
//     }
//     else{
//         break
//     }
// }
// console.log(dishes)

//########## While Loop ##########

// counter =0
// while(counter<10){
//     console.log(counter**2)
//     counter++
// }


// counter =0
// while(counter<10){
//     square = counter**2
//     if (square >50){
//         break
//          } 
//          else{
                 
//         console.log(counter**2)
//          counter++

//     }
    
// }


// Counter = 0
// while(Counter<10){
//     Counter++
//     square = Counter**2
//     if (square<50){
//         console.log(square)
//     }
//     else{
//         break
//     }

// }


// counter =10
// while(counter>0){
//     counter = counter - 1
//     square = counter **2
//     if (square>5){
//         console.log(square)
//     }
//     else{
//         break
//     }
// }


let dishes = []
flag = true
while(true){
    dishname = prompt("Enter dishname or press q to quit")
    if (dishname!='q'){
        dishes.push(dishname)
    }
    else{
        flag = false
    }
}
console.log(dishes)