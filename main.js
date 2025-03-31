

// const myFunction = () =>{
//     var input, filter, ul, li, a, i;
//     input = document.getElementById('mySearch');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById('myMenu');
//     li = ul.getElementsByTagName('li');
//     for(i = 0; i<li.length;i++){
//         a = li[i].getElementsByTagName('a')[0];
//         if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
//             li[i].style.display = '';
//             li[i].style.position = 'absolute';
//             li[i].style.zIndex = '2';
//         }else{
//             li[i].style.position = 'static';
//             li[i].style.display = 'none';
//             li[i].style.zIndex = '-2';
//         }
//     }
// }
window.addEventListener("load", (event) => {
    let timer = setTimeout(() => {
        page2();
    }
        , 4000);
})

const page2 = () =>{
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'inline';
    document.getElementById('next').addEventListener('click',page3);
}
const page4 = () =>{
    document.getElementById('next').removeEventListener('click',page3);
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'inline';
    document.getElementById('toKatalog').addEventListener('click',page3);
}
const page3 = () =>{
    document.getElementById('next').removeEventListener('click',page3);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('nextD').removeEventListener('click',darom2);
    document.getElementById('page2').style.display = 'none';
    document.getElementById('marhas').style.display = 'none';
    document.getElementById('fireArea').style.display = 'none';
    document.getElementById('back').style.display = 'none';
    // document.getElementById('trains').style.display = 'none';
    document.getElementById('mar1').style.display = 'none';
    document.getElementById('darom').style.display = 'none';
    document.getElementById('dar1').style.display = 'none';
    document.getElementById('nextD').style.display = 'none';
    document.getElementById('page3').style.display = 'inline';
    document.getElementById('toMarhas').addEventListener('click',marhas);
    document.getElementById('toFArea').addEventListener('click',fireArea);
    document.getElementById('toDarom').addEventListener('click',darom);
    // document.getElementById('trains').addEventListener('click',seeTrain);
}
const seeTrain = () =>{
    document.getElementById('page3').style.display = 'none';
}
function addTrain (name){
    console.log(name);
    document.getElementById('training').innerHTML += `<li>${name}</li>`;
}
const darom = () =>{
    document.getElementById('toMarhas').removeEventListener('click',marhas);
    document.getElementById('toFArea').removeEventListener('click',fireArea);
    document.getElementById('toDarom').removeEventListener('click',darom);
    document.getElementById('back').removeEventListener('click',darom);
    document.getElementById('nextD2').removeEventListener('click',darom3);
    document.getElementById('page3').style.display = 'none';
    document.getElementById('dar2').style.display = 'none';
    document.getElementById('darom').style.display = 'inline';
    document.getElementById('dar1').style.display = 'inline';
    document.getElementById('nextD').style.display = 'inline';
    document.getElementById('back').style.display = 'inline';
    document.getElementById('back').addEventListener('click',page3);
    document.getElementById('nextD').addEventListener('click',darom2);
}
const darom2 = () =>{
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('nextD').removeEventListener('click',darom2);
    document.getElementById('back').removeEventListener('click',darom2);
    document.getElementById('dar1').style.display = 'none';
    document.getElementById('nextD').style.display = 'none';
    document.getElementById('dar3').style.display = 'none';
    document.getElementById('nextD2').style.display = 'inline';
    document.getElementById('dar2').style.display = 'inline';
    document.getElementById('back').addEventListener('click',darom);
    document.getElementById('nextD2').addEventListener('click',darom3);
} 
const darom3 = () =>{
    document.getElementById('back').removeEventListener('click',darom);
    document.getElementById('nextD2').removeEventListener('click',darom3);
    document.getElementById('back').removeEventListener('click',darom3);
    document.getElementById('mikz1').removeEventListener('click',mikzoaot2);
    document.getElementById('mikz2').removeEventListener('click',mikzoaot3);
    document.getElementById('mikz3').removeEventListener('click',mikzoaot4);
    document.getElementById('mikz4').removeEventListener('click',mikzoaot5);
    document.getElementById('mikz5').removeEventListener('click',mikzoaot6);
    document.getElementById('mikz6').removeEventListener('click',mikzoaot7);
    document.getElementById('mikz7').removeEventListener('click',mikzoaot8);
    document.getElementById('darom').style.display = 'inline'; 
    document.getElementById('nextD2').style.display = 'none';
    document.getElementById('dar2').style.display = 'none';
    document.getElementById('mikzoaot').style.display = 'none';
    document.getElementById('mik1').style.display = 'none';
    document.getElementById('dar3').style.display = 'inline';
    document.getElementById('back').addEventListener('click',darom2);
    document.getElementById('darom4').addEventListener('click',mikzoaot);
}
const mikzoaot = () =>{
    document.getElementById('darom4').removeEventListener('click',mikzoaot);
    document.getElementById('back').removeEventListener('click',mikzoaot);
    document.getElementById('darom').style.display = 'none'; 
    document.getElementById('mik2').style.display = 'none';
    document.getElementById('mik3').style.display = 'none';
    document.getElementById('mik4').style.display = 'none';
    document.getElementById('mik5').style.display = 'none';
    document.getElementById('mik6').style.display = 'none';
    document.getElementById('mik7').style.display = 'none';
    document.getElementById('mik8').style.display = 'none';
    document.getElementById('marhsAdd').style.display = 'none';
    // document.getElementById('back').style.display = 'inline';
    // document.getElementById('trains').style.display = 'inline';
    document.getElementById('mikzoaot').style.display = 'inline';
    document.getElementById('mik1').style.display = 'inline';
    document.getElementById('back').addEventListener('click',darom3);
    document.getElementById('mikz1').addEventListener('click',mikzoaot2);
    document.getElementById('mikz2').addEventListener('click',mikzoaot3);
    document.getElementById('mikz3').addEventListener('click',mikzoaot4);
    document.getElementById('mikz4').addEventListener('click',mikzoaot5);
    document.getElementById('mikz5').addEventListener('click',mikzoaot6);
    document.getElementById('mikz6').addEventListener('click',mikzoaot7);
    document.getElementById('mikz7').addEventListener('click',mikzoaot8);
}
const mikzoaot2 = () =>{
    document.getElementById('back').removeEventListener('click',darom3);
    document.getElementById('mikz1').removeEventListener('click',mikzoaot2);
    document.getElementById('mikz2').removeEventListener('click',mikzoaot3);
    document.getElementById('mikz3').removeEventListener('click',mikzoaot4);
    document.getElementById('mikz4').removeEventListener('click',mikzoaot5);
    document.getElementById('mikz5').removeEventListener('click',mikzoaot6);
    document.getElementById('mikz6').removeEventListener('click',mikzoaot7);
    document.getElementById('mikz7').removeEventListener('click',mikzoaot8);
    document.getElementById('mik1').style.display = 'none';
    document.getElementById('mik2').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mikzoaot);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון מגמת קליעה');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const mikzoaot3 = () =>{
    document.getElementById('back').removeEventListener('click',darom3);
    document.getElementById('mikz1').removeEventListener('click',mikzoaot2);
    document.getElementById('mikz2').removeEventListener('click',mikzoaot3);
    document.getElementById('mikz3').removeEventListener('click',mikzoaot4);
    document.getElementById('mikz4').removeEventListener('click',mikzoaot5);
    document.getElementById('mikz5').removeEventListener('click',mikzoaot6);
    document.getElementById('mikz6').removeEventListener('click',mikzoaot7);
    document.getElementById('mikz7').removeEventListener('click',mikzoaot8);
    document.getElementById('mik1').style.display = 'none';
    document.getElementById('mik3').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mikzoaot);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון מגמת נמ"ח');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const mikzoaot4 = () =>{
    document.getElementById('back').removeEventListener('click',darom3);
    document.getElementById('mikz1').removeEventListener('click',mikzoaot2);
    document.getElementById('mikz2').removeEventListener('click',mikzoaot3);
    document.getElementById('mikz3').removeEventListener('click',mikzoaot4);
    document.getElementById('mikz4').removeEventListener('click',mikzoaot5);
    document.getElementById('mikz5').removeEventListener('click',mikzoaot6);
    document.getElementById('mikz6').removeEventListener('click',mikzoaot7);
    document.getElementById('mikz7').removeEventListener('click',mikzoaot8);
    document.getElementById('mik1').style.display = 'none';
    document.getElementById('mik4').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mikzoaot);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון מגמת מרגמות');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const mikzoaot5 = () =>{
    document.getElementById('back').removeEventListener('click',darom3);
    document.getElementById('mikz1').removeEventListener('click',mikzoaot2);
    document.getElementById('mikz2').removeEventListener('click',mikzoaot3);
    document.getElementById('mikz3').removeEventListener('click',mikzoaot4);
    document.getElementById('mikz4').removeEventListener('click',mikzoaot5);
    document.getElementById('mikz5').removeEventListener('click',mikzoaot6);
    document.getElementById('mikz6').removeEventListener('click',mikzoaot7);
    document.getElementById('mikz7').removeEventListener('click',mikzoaot8);
    document.getElementById('mik1').style.display = 'none';
    document.getElementById('mik5').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mikzoaot);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון מגמת נגמשים');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const mikzoaot6 = () =>{
    document.getElementById('back').removeEventListener('click',darom3);
    document.getElementById('mikz1').removeEventListener('click',mikzoaot2);
    document.getElementById('mikz2').removeEventListener('click',mikzoaot3);
    document.getElementById('mikz3').removeEventListener('click',mikzoaot4);
    document.getElementById('mikz4').removeEventListener('click',mikzoaot5);
    document.getElementById('mikz5').removeEventListener('click',mikzoaot6);
    document.getElementById('mikz6').removeEventListener('click',mikzoaot7);
    document.getElementById('mikz7').removeEventListener('click',mikzoaot8);
    document.getElementById('mik1').style.display = 'none';
    document.getElementById('mik6').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mikzoaot);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון מגמת צלפים');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const mikzoaot7 = () =>{
    document.getElementById('back').removeEventListener('click',darom3);
    document.getElementById('mikz1').removeEventListener('click',mikzoaot2);
    document.getElementById('mikz2').removeEventListener('click',mikzoaot3);
    document.getElementById('mikz3').removeEventListener('click',mikzoaot4);
    document.getElementById('mikz4').removeEventListener('click',mikzoaot5);
    document.getElementById('mikz5').removeEventListener('click',mikzoaot6);
    document.getElementById('mikz6').removeEventListener('click',mikzoaot7);
    document.getElementById('mikz7').removeEventListener('click',mikzoaot8);
    document.getElementById('mik1').style.display = 'none';
    document.getElementById('mik7').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mikzoaot);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון מגמת רתק');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const mikzoaot8 = () =>{
    document.getElementById('back').removeEventListener('click',darom3);
    document.getElementById('mikz1').removeEventListener('click',mikzoaot2);
    document.getElementById('mikz2').removeEventListener('click',mikzoaot3);
    document.getElementById('mikz3').removeEventListener('click',mikzoaot4);
    document.getElementById('mikz4').removeEventListener('click',mikzoaot5);
    document.getElementById('mikz5').removeEventListener('click',mikzoaot6);
    document.getElementById('mikz6').removeEventListener('click',mikzoaot7);
    document.getElementById('mikz7').removeEventListener('click',mikzoaot8);
    document.getElementById('mik1').style.display = 'none';
    document.getElementById('mik8').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mikzoaot);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון מגמת אוהד');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const marhas = () =>{
    document.getElementById('toMarhas').removeEventListener('click',marhas);
    document.getElementById('toFArea').removeEventListener('click',fireArea);
    document.getElementById('toDarom').removeEventListener('click',darom);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('page3').style.display = 'none';
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('back').style.display = 'inline';
    document.getElementById('marhas').style.display = 'inline';
    document.getElementById('mar1').style.display = 'inline';
    document.getElementById('back').addEventListener('click',page3);
    document.getElementById('marhsK').addEventListener('click',marhas2);
}
const marhas2 = () =>{
    document.getElementById('marhsK').removeEventListener('click',marhas2);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('back').removeEventListener('click',marhas2);
    document.getElementById('k1').removeEventListener('click',kurs1);
    document.getElementById('k2').removeEventListener('click',kurs2);
    document.getElementById('k3').removeEventListener('click',kurs3);
    document.getElementById('k4').removeEventListener('click',kurs4);
    document.getElementById('mar1').style.display = 'none';
    document.getElementById('mar3').style.display = 'none';
    document.getElementById('mar4').style.display = 'none';
    document.getElementById('mar5').style.display = 'none';
    document.getElementById('mar6').style.display = 'none';
    document.getElementById('mar7').style.display = 'none';
    document.getElementById('mar8').style.display = 'none';
    document.getElementById('mar9').style.display = 'none';
    document.getElementById('mar10').style.display = 'none';
    document.getElementById('mar11').style.display = 'none';
    document.getElementById('mar12').style.display = 'none';
    document.getElementById('mar13').style.display = 'none';
    document.getElementById('mar14').style.display = 'none';
    document.getElementById('mar15').style.display = 'none';
    document.getElementById('marhsAdd').style.display = 'none';
    document.getElementById('mar2').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas);
    document.getElementById('train3').addEventListener('click',marhas3);
    document.getElementById('train4').addEventListener('click',marhas4);
    document.getElementById('train5').addEventListener('click',marhas5);
    document.getElementById('train6').addEventListener('click',marhas6);
    document.getElementById('train7').addEventListener('click',marhas7);
    document.getElementById('train8').addEventListener('click',marhas8);
    document.getElementById('train9').addEventListener('click',marhas9);
    document.getElementById('train10').addEventListener('click',marhas10);
    document.getElementById('train11').addEventListener('click',marhas11);
    document.getElementById('train12').addEventListener('click',marhas12);
    document.getElementById('train13').addEventListener('click',marhas13);
    document.getElementById('train14').addEventListener('click',marhas14);
    document.getElementById('train15').addEventListener('click',marhas15);
}
const marhas3 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('mar3').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון מכין לחימה');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const marhas4 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('mar4').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון מפג"ד');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const marhas5 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('mar5').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון מחס"ר');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const marhas6 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('mar6').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון סוללה');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const marhas7 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('mar7').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון פרט');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const marhas8 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas8);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('kures1').style.display = 'none';
    document.getElementById('kures2').style.display = 'none';
    document.getElementById('kures3').style.display = 'none';
    document.getElementById('kures4').style.display = 'none';
    document.getElementById('marhsAdd').style.display = 'none';
    document.getElementById('mar8').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('k1').addEventListener('click',kurs1);
    document.getElementById('k2').addEventListener('click',kurs2);
    document.getElementById('k3').addEventListener('click',kurs3);
    document.getElementById('k4').addEventListener('click',kurs4);
}
const kurs1 = () =>{
    document.getElementById('back').removeEventListener('click',marhas2);
    document.getElementById('k1').removeEventListener('click',kurs1);
    document.getElementById('k2').removeEventListener('click',kurs2);
    document.getElementById('k3').removeEventListener('click',kurs3);
    document.getElementById('k4').removeEventListener('click',kurs4);
    document.getElementById('mar8').style.display = 'none';
    document.getElementById('kures1').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas8);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון מס"ח');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const kurs2 = () =>{
    document.getElementById('back').removeEventListener('click',marhas2);
    document.getElementById('k1').removeEventListener('click',kurs1);
    document.getElementById('k2').removeEventListener('click',kurs2);
    document.getElementById('k3').removeEventListener('click',kurs3);
    document.getElementById('k4').removeEventListener('click',kurs4);
    document.getElementById('mar8').style.display = 'none';
    document.getElementById('kures2').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas8);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('קורס נגדי סיוע');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const kurs3 = () =>{
    document.getElementById('back').removeEventListener('click',marhas2);
    document.getElementById('k1').removeEventListener('click',kurs1);
    document.getElementById('k2').removeEventListener('click',kurs2);
    document.getElementById('k3').removeEventListener('click',kurs3);
    document.getElementById('k4').removeEventListener('click',kurs4);
    document.getElementById('mar8').style.display = 'none';
    document.getElementById('kures3').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas8);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('קורס קמבצ"י סיוע');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const kurs4 = () =>{
    document.getElementById('back').removeEventListener('click',marhas2);
    document.getElementById('k1').removeEventListener('click',kurs1);
    document.getElementById('k2').removeEventListener('click',kurs2);
    document.getElementById('k3').removeEventListener('click',kurs3);
    document.getElementById('k4').removeEventListener('click',kurs4);
    document.getElementById('mar8').style.display = 'none';
    document.getElementById('kures4').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas8);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('קורס מפקדי מכלול');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const marhas9 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('mar9').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון מכלול אחוד מלא');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const marhas10 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('mar10').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון אימון מכלול כחלק מאימון מכין');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const marhas11 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('mar11').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון צימודים');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const marhas12 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('mar12').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון שמירת כשרות למפקדים');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const marhas13 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('mar13').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון קש"אים/ קס"גים');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const marhas14 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('mar14').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון פלת"צ');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const marhas15 = () =>{
    document.getElementById('train3').removeEventListener('click',marhas3);
    document.getElementById('train4').removeEventListener('click',marhas4);
    document.getElementById('train5').removeEventListener('click',marhas5);
    document.getElementById('train6').removeEventListener('click',marhas6);
    document.getElementById('train7').removeEventListener('click',marhas7);
    document.getElementById('train8').removeEventListener('click',marhas8);
    document.getElementById('train9').removeEventListener('click',marhas9);
    document.getElementById('train10').removeEventListener('click',marhas10);
    document.getElementById('train11').removeEventListener('click',marhas11);
    document.getElementById('train12').removeEventListener('click',marhas12);
    document.getElementById('train13').removeEventListener('click',marhas13);
    document.getElementById('train14').removeEventListener('click',marhas14);
    document.getElementById('train15').removeEventListener('click',marhas15);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('mar15').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',marhas2);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('אימון חניכת ציר האש בתרח"ט/ תרג"ד');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    }); 
}
const fireArea = () =>{
    document.getElementById('toMarhas').removeEventListener('click',marhas);
    document.getElementById('toFArea').removeEventListener('click',fireArea);
    document.getElementById('toDarom').removeEventListener('click',darom);
    document.getElementById('back').removeEventListener('click',fireArea);
    document.getElementById('page3').style.display = 'none';
    document.getElementById('fA2').style.display = 'none';
    document.getElementById('fA3').style.display = 'none';
    document.getElementById('fA4').style.display = 'none';
    document.getElementById('fA5').style.display = 'none';
    document.getElementById('fA6').style.display = 'none';
    document.getElementById('fA7').style.display = 'none';
    document.getElementById('fA8').style.display = 'none';
    document.getElementById('fA9').style.display = 'none';
    document.getElementById('fA10').style.display = 'none';
    document.getElementById('fA11').style.display = 'none';
    document.getElementById('fA12').style.display = 'none';
    document.getElementById('marhsAdd').style.display = 'none';
    document.getElementById('back').style.display = 'inline';
    document.getElementById('fA1').style.display = 'inline';
    document.getElementById('fireArea').style.display = 'inline';
    document.getElementById('back').addEventListener('click',page3);
    document.getElementById('fireA2').addEventListener('click',fireArea2);
    document.getElementById('fireA3').addEventListener('click',fireArea3);
    document.getElementById('fireA4').addEventListener('click',fireArea4);
    document.getElementById('fireA5').addEventListener('click',fireArea5);
    document.getElementById('fireA6').addEventListener('click',fireArea6);
    document.getElementById('fireA7').addEventListener('click',fireArea7);
    document.getElementById('fireA8').addEventListener('click',fireArea8);
    document.getElementById('fireA9').addEventListener('click',fireArea9);
    document.getElementById('fireA10').addEventListener('click',fireArea10);
    document.getElementById('fireA11').addEventListener('click',fireArea11);
    document.getElementById('fireA12').addEventListener('click',fireArea12);
}
const fireArea2 = () =>{
    document.getElementById('fireA2').removeEventListener('click',fireArea2);
    document.getElementById('fireA3').removeEventListener('click',fireArea3);
    document.getElementById('fireA4').removeEventListener('click',fireArea4);
    document.getElementById('fireA5').removeEventListener('click',fireArea5);
    document.getElementById('fireA6').removeEventListener('click',fireArea6);
    document.getElementById('fireA7').removeEventListener('click',fireArea7);
    document.getElementById('fireA8').removeEventListener('click',fireArea8);
    document.getElementById('fireA9').removeEventListener('click',fireArea9);
    document.getElementById('fireA10').removeEventListener('click',fireArea10);
    document.getElementById('fireA11').removeEventListener('click',fireArea11);
    document.getElementById('fireA12').removeEventListener('click',fireArea12);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('fA1').style.display = 'none';
    document.getElementById('fA2').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',fireArea);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('מתקן רותם');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const fireArea3 = () =>{
    document.getElementById('fireA2').removeEventListener('click',fireArea2);
    document.getElementById('fireA3').removeEventListener('click',fireArea3);
    document.getElementById('fireA4').removeEventListener('click',fireArea4);
    document.getElementById('fireA5').removeEventListener('click',fireArea5);
    document.getElementById('fireA6').removeEventListener('click',fireArea6);
    document.getElementById('fireA7').removeEventListener('click',fireArea7);
    document.getElementById('fireA8').removeEventListener('click',fireArea8);
    document.getElementById('fireA9').removeEventListener('click',fireArea9);
    document.getElementById('fireA10').removeEventListener('click',fireArea10);
    document.getElementById('fireA11').removeEventListener('click',fireArea11);
    document.getElementById('fireA12').removeEventListener('click',fireArea12);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('fA1').style.display = 'none';
    document.getElementById('fA3').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',fireArea);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('מתקן רותם דרום');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const fireArea4 = () =>{
    document.getElementById('fireA2').removeEventListener('click',fireArea2);
        document.getElementById('fireA3').removeEventListener('click',fireArea3);
    document.getElementById('fireA4').removeEventListener('click',fireArea4);
    document.getElementById('fireA5').removeEventListener('click',fireArea5);
    document.getElementById('fireA6').removeEventListener('click',fireArea6);
    document.getElementById('fireA7').removeEventListener('click',fireArea7);
    document.getElementById('fireA8').removeEventListener('click',fireArea8);
    document.getElementById('fireA9').removeEventListener('click',fireArea9);
    document.getElementById('fireA10').removeEventListener('click',fireArea10);
    document.getElementById('fireA11').removeEventListener('click',fireArea11);
    document.getElementById('fireA12').removeEventListener('click',fireArea12);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('fA1').style.display = 'none';
    document.getElementById('fA4').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',fireArea);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('מתקן מבודדת');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const fireArea5 = () =>{
    document.getElementById('fireA2').removeEventListener('click',fireArea2);
        document.getElementById('fireA3').removeEventListener('click',fireArea3);
    document.getElementById('fireA4').removeEventListener('click',fireArea4);
    document.getElementById('fireA5').removeEventListener('click',fireArea5);
    document.getElementById('fireA6').removeEventListener('click',fireArea6);
    document.getElementById('fireA7').removeEventListener('click',fireArea7);
    document.getElementById('fireA8').removeEventListener('click',fireArea8);
    document.getElementById('fireA9').removeEventListener('click',fireArea9);
    document.getElementById('fireA10').removeEventListener('click',fireArea10);
    document.getElementById('fireA11').removeEventListener('click',fireArea11);
    document.getElementById('fireA12').removeEventListener('click',fireArea12);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('fA1').style.display = 'none';
    document.getElementById('fA5').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',fireArea);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('מתקן אריאל א');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const fireArea6 = () =>{
    document.getElementById('fireA2').removeEventListener('click',fireArea2);
        document.getElementById('fireA3').removeEventListener('click',fireArea3);
    document.getElementById('fireA4').removeEventListener('click',fireArea4);
    document.getElementById('fireA5').removeEventListener('click',fireArea5);
    document.getElementById('fireA6').removeEventListener('click',fireArea6);
    document.getElementById('fireA7').removeEventListener('click',fireArea7);
    document.getElementById('fireA8').removeEventListener('click',fireArea8);
    document.getElementById('fireA9').removeEventListener('click',fireArea9);
    document.getElementById('fireA10').removeEventListener('click',fireArea10);
    document.getElementById('fireA11').removeEventListener('click',fireArea11);
    document.getElementById('fireA12').removeEventListener('click',fireArea12);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('fA1').style.display = 'none';
    document.getElementById('fA6').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',fireArea);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('מתקן אריאל ב');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const fireArea7 = () =>{
    document.getElementById('fireA2').removeEventListener('click',fireArea2);
        document.getElementById('fireA3').removeEventListener('click',fireArea3);
    document.getElementById('fireA4').removeEventListener('click',fireArea4);
    document.getElementById('fireA5').removeEventListener('click',fireArea5);
    document.getElementById('fireA6').removeEventListener('click',fireArea6);
    document.getElementById('fireA7').removeEventListener('click',fireArea7);
    document.getElementById('fireA8').removeEventListener('click',fireArea8);
    document.getElementById('fireA9').removeEventListener('click',fireArea9);
    document.getElementById('fireA10').removeEventListener('click',fireArea10);
    document.getElementById('fireA11').removeEventListener('click',fireArea11);
    document.getElementById('fireA12').removeEventListener('click',fireArea12);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('fA1').style.display = 'none';
    document.getElementById('fA7').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',fireArea);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('מתקן מאלא');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const fireArea8 = () =>{
    document.getElementById('fireA2').removeEventListener('click',fireArea2);
        document.getElementById('fireA3').removeEventListener('click',fireArea3);
    document.getElementById('fireA4').removeEventListener('click',fireArea4);
    document.getElementById('fireA5').removeEventListener('click',fireArea5);
    document.getElementById('fireA6').removeEventListener('click',fireArea6);
    document.getElementById('fireA7').removeEventListener('click',fireArea7);
    document.getElementById('fireA8').removeEventListener('click',fireArea8);
    document.getElementById('fireA9').removeEventListener('click',fireArea9);
    document.getElementById('fireA10').removeEventListener('click',fireArea10);
    document.getElementById('fireA11').removeEventListener('click',fireArea11);
    document.getElementById('fireA12').removeEventListener('click',fireArea12);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('fA1').style.display = 'none';
    document.getElementById('fA8').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',fireArea);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('מתקן רותם מערב');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const fireArea9 = () =>{
    document.getElementById('fireA2').removeEventListener('click',fireArea2);
        document.getElementById('fireA3').removeEventListener('click',fireArea3);
    document.getElementById('fireA4').removeEventListener('click',fireArea4);
    document.getElementById('fireA5').removeEventListener('click',fireArea5);
    document.getElementById('fireA6').removeEventListener('click',fireArea6);
    document.getElementById('fireA7').removeEventListener('click',fireArea7);
    document.getElementById('fireA8').removeEventListener('click',fireArea8);
    document.getElementById('fireA9').removeEventListener('click',fireArea9);
    document.getElementById('fireA10').removeEventListener('click',fireArea10);
    document.getElementById('fireA11').removeEventListener('click',fireArea11);
    document.getElementById('fireA12').removeEventListener('click',fireArea12);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('fA1').style.display = 'none';
    document.getElementById('fA9').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',fireArea);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('מתקן שיקגו');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const fireArea10 = () =>{
    document.getElementById('fireA2').removeEventListener('click',fireArea2);
        document.getElementById('fireA3').removeEventListener('click',fireArea3);
    document.getElementById('fireA4').removeEventListener('click',fireArea4);
    document.getElementById('fireA5').removeEventListener('click',fireArea5);
    document.getElementById('fireA6').removeEventListener('click',fireArea6);
    document.getElementById('fireA7').removeEventListener('click',fireArea7);
    document.getElementById('fireA8').removeEventListener('click',fireArea8);
    document.getElementById('fireA9').removeEventListener('click',fireArea9);
    document.getElementById('fireA10').removeEventListener('click',fireArea10);
    document.getElementById('fireA11').removeEventListener('click',fireArea11);
    document.getElementById('fireA12').removeEventListener('click',fireArea12);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('fA1').style.display = 'none';
    document.getElementById('fA10').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',fireArea);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('מתקן דנילוב');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const fireArea11 = () =>{
    document.getElementById('fireA2').removeEventListener('click',fireArea2);
        document.getElementById('fireA3').removeEventListener('click',fireArea3);
    document.getElementById('fireA4').removeEventListener('click',fireArea4);
    document.getElementById('fireA5').removeEventListener('click',fireArea5);
    document.getElementById('fireA6').removeEventListener('click',fireArea6);
    document.getElementById('fireA7').removeEventListener('click',fireArea7);
    document.getElementById('fireA8').removeEventListener('click',fireArea8);
    document.getElementById('fireA9').removeEventListener('click',fireArea9);
    document.getElementById('fireA10').removeEventListener('click',fireArea10);
    document.getElementById('fireA11').removeEventListener('click',fireArea11);
    document.getElementById('fireA12').removeEventListener('click',fireArea12);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('fA1').style.display = 'none';
    document.getElementById('fA11').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',fireArea);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('מתקן לבנון');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
const fireArea12 = () =>{
    document.getElementById('fireA2').removeEventListener('click',fireArea2);
        document.getElementById('fireA3').removeEventListener('click',fireArea3);
    document.getElementById('fireA4').removeEventListener('click',fireArea4);
    document.getElementById('fireA5').removeEventListener('click',fireArea5);
    document.getElementById('fireA6').removeEventListener('click',fireArea6);
    document.getElementById('fireA7').removeEventListener('click',fireArea7);
    document.getElementById('fireA8').removeEventListener('click',fireArea8);
    document.getElementById('fireA9').removeEventListener('click',fireArea9);
    document.getElementById('fireA10').removeEventListener('click',fireArea10);
    document.getElementById('fireA11').removeEventListener('click',fireArea11);
    document.getElementById('fireA12').removeEventListener('click',fireArea12);
    document.getElementById('back').removeEventListener('click',page3);
    document.getElementById('fA1').style.display = 'none';
    document.getElementById('fA12').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',fireArea);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('מתקן בראשית');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
