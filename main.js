

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
    document.getElementById('next').addEventListener('click',page4);
}
const page3 = () =>{
    document.getElementById('next').removeEventListener('click',page3);
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'inline';
    document.getElementById('toKatalog').addEventListener('click',page4);
}
const page4 = () =>{
    document.getElementById('next').removeEventListener('click',page4);
    document.getElementById('back').removeEventListener('click',page4);
    document.getElementById('nextD').removeEventListener('click',darom2);
    document.getElementById('toKatalog').removeEventListener('click',page4);
    document.getElementById('n1').removeEventListener('click',Nhir);
    document.getElementById('n2').removeEventListener('click',Nsir);
    document.getElementById('n3').removeEventListener('click',Nlev);
    document.getElementById('mha1').removeEventListener('click',mhal2);
    document.getElementById('mha2').removeEventListener('click',mhal3);
    document.getElementById('mha3').removeEventListener('click',mhal4);
    document.getElementById('marhsK').removeEventListener('click',marhas2);
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
    document.getElementById('nextT1').removeEventListener('click',tiksuv2);
    document.getElementById('nextT2').removeEventListener('click',tiksuv9);
    document.getElementById('page2').style.display = 'none';
    document.getElementById('marhas').style.display = 'none';
    document.getElementById('fireArea').style.display = 'none';
    document.getElementById('back').style.display = 'none';
    // document.getElementById('trains').style.display = 'none';
    document.getElementById('mar1').style.display = 'none';
    document.getElementById('darom').style.display = 'none';
    document.getElementById('dar1').style.display = 'none';
    document.getElementById('nextD').style.display = 'none';
    document.getElementById('marcasNorth').style.display = 'none';
    document.getElementById('north1').style.display = 'none';
    document.getElementById('mal').style.display = 'none';
    document.getElementById('mal1').style.display = 'none';
    document.getElementById('tiksuv').style.display = 'none';
    document.getElementById('tik1').style.display = 'none';
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'inline';
    document.getElementById('toMarhas').addEventListener('click',marhas);
    document.getElementById('toFArea').addEventListener('click',fireArea);
    document.getElementById('toDarom').addEventListener('click',darom);
    document.getElementById('toMNorth').addEventListener('click',north);
    document.getElementById('toMhal').addEventListener('click',mhal);
    document.getElementById('toSvil').addEventListener('click',svil);
    document.getElementById('toTik').addEventListener('click',tiksuv);
    // document.getElementById('trains').addEventListener('click',seeTrain);
}
const seeTrain = () =>{
    document.getElementById('page4').style.display = 'none';
}
function addTrain (name){
    console.log(name);
    document.getElementById('training').innerHTML += `<li>${name}</li>`;
}
const tiksuv = () =>{
    document.getElementById('toMarhas').removeEventListener('click',marhas);
    document.getElementById('toFArea').removeEventListener('click',fireArea);
    document.getElementById('toDarom').removeEventListener('click',darom);
    document.getElementById('toMNorth').removeEventListener('click',north);
    document.getElementById('toMhal').removeEventListener('click',mhal);
    document.getElementById('toSvil').removeEventListener('click',svil);
    document.getElementById('toTik').removeEventListener('click',tiksuv);
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('mTik1').removeEventListener('click',tiksuv3);
    document.getElementById('mTik2').removeEventListener('click',tiksuv4);
    document.getElementById('mTik3').removeEventListener('click',tiksuv5);
    document.getElementById('mTik4').removeEventListener('click',tiksuv6);
    document.getElementById('mTik5').removeEventListener('click',tiksuv7);
    document.getElementById('mTik6').removeEventListener('click',tiksuv8);
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('page4').style.display = 'none';
    document.getElementById('tik2').style.display = 'none';
    document.getElementById('tik9').style.display = 'none';
    document.getElementById('back').style.display = 'inline';
    document.getElementById('tiksuv').style.display = 'inline';
    document.getElementById('tik1').style.display = 'inline';
    document.getElementById('back').addEventListener('click',page4);
    document.getElementById('nextT1').addEventListener('click',tiksuv2);
    document.getElementById('nextT2').addEventListener('click',tiksuv9);
}
const tiksuv2 = () =>{
    document.getElementById('back').removeEventListener('click',page4);
    document.getElementById('nextT1').removeEventListener('click',tiksuv2);
    document.getElementById('nextT2').removeEventListener('click',tiksuv9);
    document.getElementById('tik1').style.display = 'none';
    document.getElementById('tik3').style.display = 'none';
    document.getElementById('tik4').style.display = 'none';
    document.getElementById('tik5').style.display = 'none';
    document.getElementById('tik6').style.display = 'none';
    document.getElementById('tik7').style.display = 'none';
    document.getElementById('tik8').style.display = 'none';
    document.getElementById('tik2').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv);
    document.getElementById('mTik1').addEventListener('click',tiksuv3);
    document.getElementById('mTik2').addEventListener('click',tiksuv4);
    document.getElementById('mTik3').addEventListener('click',tiksuv5);
    document.getElementById('mTik4').addEventListener('click',tiksuv6);
    document.getElementById('mTik5').addEventListener('click',tiksuv7);
    document.getElementById('mTik6').addEventListener('click',tiksuv8);
}
const tiksuv3 = () =>{
    document.getElementById('mTik1').removeEventListener('click',tiksuv3);
    document.getElementById('mTik2').removeEventListener('click',tiksuv4);
    document.getElementById('mTik3').removeEventListener('click',tiksuv5);
    document.getElementById('mTik4').removeEventListener('click',tiksuv6);
    document.getElementById('mTik5').removeEventListener('click',tiksuv7);
    document.getElementById('mTik6').removeEventListener('click',tiksuv8);
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('tik2').style.display = 'none';
    document.getElementById('tik3').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv2);
}
const tiksuv4 = () =>{
    document.getElementById('mTik1').removeEventListener('click',tiksuv3);
    document.getElementById('mTik2').removeEventListener('click',tiksuv4);
    document.getElementById('mTik3').removeEventListener('click',tiksuv5);
    document.getElementById('mTik4').removeEventListener('click',tiksuv6);
    document.getElementById('mTik5').removeEventListener('click',tiksuv7);
    document.getElementById('mTik6').removeEventListener('click',tiksuv8);
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('tik2').style.display = 'none';
    document.getElementById('tik4').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv2);
}
const tiksuv5 = () =>{
    document.getElementById('mTik1').removeEventListener('click',tiksuv3);
    document.getElementById('mTik2').removeEventListener('click',tiksuv4);
    document.getElementById('mTik3').removeEventListener('click',tiksuv5);
    document.getElementById('mTik4').removeEventListener('click',tiksuv6);
    document.getElementById('mTik5').removeEventListener('click',tiksuv7);
    document.getElementById('mTik6').removeEventListener('click',tiksuv8);
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('tik2').style.display = 'none';
    document.getElementById('tik5').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv2);
}
const tiksuv6 = () =>{
    document.getElementById('mTik1').removeEventListener('click',tiksuv3);
    document.getElementById('mTik2').removeEventListener('click',tiksuv4);
    document.getElementById('mTik3').removeEventListener('click',tiksuv5);
    document.getElementById('mTik4').removeEventListener('click',tiksuv6);
    document.getElementById('mTik5').removeEventListener('click',tiksuv7);
    document.getElementById('mTik6').removeEventListener('click',tiksuv8);
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('tik2').style.display = 'none';
    document.getElementById('tik6').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv2);
}
const tiksuv7 = () =>{
    document.getElementById('mTik1').removeEventListener('click',tiksuv3);
    document.getElementById('mTik2').removeEventListener('click',tiksuv4);
    document.getElementById('mTik3').removeEventListener('click',tiksuv5);
    document.getElementById('mTik4').removeEventListener('click',tiksuv6);
    document.getElementById('mTik5').removeEventListener('click',tiksuv7);
    document.getElementById('mTik6').removeEventListener('click',tiksuv8);
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('tik2').style.display = 'none';
    document.getElementById('tik7').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv2);
}
const tiksuv8 = () =>{
    document.getElementById('mTik1').removeEventListener('click',tiksuv3);
    document.getElementById('mTik2').removeEventListener('click',tiksuv4);
    document.getElementById('mTik3').removeEventListener('click',tiksuv5);
    document.getElementById('mTik4').removeEventListener('click',tiksuv6);
    document.getElementById('mTik5').removeEventListener('click',tiksuv7);
    document.getElementById('mTik6').removeEventListener('click',tiksuv8);
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('tik2').style.display = 'none';
    document.getElementById('tik8').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv2);
}
const tiksuv9 = () =>{
    document.getElementById('back').removeEventListener('click',page4);
    document.getElementById('nextT1').removeEventListener('click',tiksuv2);
    document.getElementById('nextT2').removeEventListener('click',tiksuv9);
    document.getElementById('back').removeEventListener('click',tiksuv9);
    document.getElementById('tik1').style.display = 'none';
    document.getElementById('tik10').style.display = 'none';
    document.getElementById('tik11').style.display = 'none';
    document.getElementById('tik12').style.display = 'none';
    document.getElementById('tik13').style.display = 'none';
    document.getElementById('tik14').style.display = 'none';
    document.getElementById('tik9').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv);
    document.getElementById('Ttik1').addEventListener('click',tiksuv10);
    document.getElementById('Ttik2').addEventListener('click',tiksuv11);
    document.getElementById('Ttik3').addEventListener('click',tiksuv12);
    document.getElementById('Ttik4').addEventListener('click',tiksuv13);
    document.getElementById('Ttik5').addEventListener('click',tiksuv14);
}
const tiksuv10 = () =>{
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('Ttik1').removeEventListener('click',tiksuv10);
    document.getElementById('Ttik2').removeEventListener('click',tiksuv11);
    document.getElementById('Ttik3').removeEventListener('click',tiksuv12);
    document.getElementById('Ttik4').removeEventListener('click',tiksuv13);
    document.getElementById('Ttik5').removeEventListener('click',tiksuv14);
    document.getElementById('tik9').style.display = 'none';
    document.getElementById('tik10').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv9);
}
const tiksuv11 = () =>{
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('Ttik1').removeEventListener('click',tiksuv10);
    document.getElementById('Ttik2').removeEventListener('click',tiksuv11);
    document.getElementById('Ttik3').removeEventListener('click',tiksuv12);
    document.getElementById('Ttik4').removeEventListener('click',tiksuv13);
    document.getElementById('Ttik5').removeEventListener('click',tiksuv14);
    document.getElementById('tik9').style.display = 'none';
    document.getElementById('tik11').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv9);
}
const tiksuv12 = () =>{
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('Ttik1').removeEventListener('click',tiksuv10);
    document.getElementById('Ttik2').removeEventListener('click',tiksuv11);
    document.getElementById('Ttik3').removeEventListener('click',tiksuv12);
    document.getElementById('Ttik4').removeEventListener('click',tiksuv13);
    document.getElementById('Ttik5').removeEventListener('click',tiksuv14);
    document.getElementById('tik9').style.display = 'none';
    document.getElementById('tik12').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv9);
}
const tiksuv13 = () =>{
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('Ttik1').removeEventListener('click',tiksuv10);
    document.getElementById('Ttik2').removeEventListener('click',tiksuv11);
    document.getElementById('Ttik3').removeEventListener('click',tiksuv12);
    document.getElementById('Ttik4').removeEventListener('click',tiksuv13);
    document.getElementById('Ttik5').removeEventListener('click',tiksuv14);
    document.getElementById('tik9').style.display = 'none';
    document.getElementById('tik13').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv9);
}
const tiksuv14 = () =>{
    document.getElementById('back').removeEventListener('click',tiksuv);
    document.getElementById('Ttik1').removeEventListener('click',tiksuv10);
    document.getElementById('Ttik2').removeEventListener('click',tiksuv11);
    document.getElementById('Ttik3').removeEventListener('click',tiksuv12);
    document.getElementById('Ttik4').removeEventListener('click',tiksuv13);
    document.getElementById('Ttik5').removeEventListener('click',tiksuv14);
    document.getElementById('tik9').style.display = 'none';
    document.getElementById('tik14').style.display = 'inline';
    document.getElementById('back').addEventListener('click',tiksuv9);
}
const mhal = () =>{
    document.getElementById('toMarhas').removeEventListener('click',marhas);
    document.getElementById('toFArea').removeEventListener('click',fireArea);
    document.getElementById('toDarom').removeEventListener('click',darom);
    document.getElementById('toMNorth').removeEventListener('click',north);
    document.getElementById('toMhal').removeEventListener('click',mhal);
    document.getElementById('toSvil').removeEventListener('click',svil);
    document.getElementById('toTik').removeEventListener('click',tiksuv);
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('gd1').removeEventListener('click',gdudM1);
    document.getElementById('gd2').removeEventListener('click',gdudM2);
    document.getElementById('gd3').removeEventListener('click',gdudM3);
    document.getElementById('gd4').removeEventListener('click',gdudM4);
    document.getElementById('gd5').removeEventListener('click',gdudM5);
    document.getElementById('gd6').removeEventListener('click',gdudM6);
    document.getElementById('hat1').removeEventListener('click',hatM1);
    document.getElementById('hat2').removeEventListener('click',hatM2);
    document.getElementById('hat3').removeEventListener('click',hatM3);
    document.getElementById('hat4').removeEventListener('click',hatM4);
    document.getElementById('hat5').removeEventListener('click',hatM5);
    document.getElementById('hat6').removeEventListener('click',hatM6);
    document.getElementById('hat7').removeEventListener('click',hatM7);
    document.getElementById('page4').style.display = 'none';
    document.getElementById('mal2').style.display = 'none';
    document.getElementById('mal3').style.display = 'none';
    document.getElementById('mal4').style.display = 'none';
    document.getElementById('mal').style.display = 'inline';
    document.getElementById('mal1').style.display = 'inline';
    document.getElementById('back').style.display = 'inline';
    document.getElementById('back').addEventListener('click',page4);
    document.getElementById('mha1').addEventListener('click',mhal2);
    document.getElementById('mha2').addEventListener('click',mhal3);
    document.getElementById('mha3').addEventListener('click',mhal4);
}
const mhal2 = () =>{
    document.getElementById('mha1').removeEventListener('click',mhal2);
    document.getElementById('mha2').removeEventListener('click',mhal3);
    document.getElementById('mha3').removeEventListener('click',mhal4);
    document.getElementById('back').removeEventListener('click',page4);
    document.getElementById('back').removeEventListener('click',mhal2);
    document.getElementById('mal5').style.display = 'none';
    document.getElementById('mal6').style.display = 'none';
    document.getElementById('mal7').style.display = 'none';
    document.getElementById('mal8').style.display = 'none';
    document.getElementById('mal9').style.display = 'none';
    document.getElementById('mal10').style.display = 'none';
    document.getElementById('mal11').style.display = 'none';
    document.getElementById('mal12').style.display = 'none';
    document.getElementById('mal13').style.display = 'none';
    document.getElementById('mal1').style.display = 'none';
    document.getElementById('mal2').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal);
    document.getElementById('gd1').addEventListener('click',gdudM1);
    document.getElementById('gd2').addEventListener('click',gdudM2);
    document.getElementById('gd3').addEventListener('click',gdudM3);
    // document.getElementById('gd4').addEventListener('click',gdudM4);
    document.getElementById('gd5').addEventListener('click',gdudM5);
    document.getElementById('gd6').addEventListener('click',gdudM6);
}
const gdudM1 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('gd1').removeEventListener('click',gdudM1);
    document.getElementById('gd2').removeEventListener('click',gdudM2);
    document.getElementById('gd3').removeEventListener('click',gdudM3);
    document.getElementById('gd4').removeEventListener('click',gdudM4);
    document.getElementById('gd5').removeEventListener('click',gdudM5);
    document.getElementById('gd6').removeEventListener('click',gdudM6);
    document.getElementById('mal2').style.display = 'none';
    document.getElementById('mal5').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal2);
}
const gdudM2 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('gd1').removeEventListener('click',gdudM1);
    document.getElementById('gd2').removeEventListener('click',gdudM2);
    document.getElementById('gd3').removeEventListener('click',gdudM3);
    document.getElementById('gd4').removeEventListener('click',gdudM4);
    document.getElementById('gd5').removeEventListener('click',gdudM5);
    document.getElementById('gd6').removeEventListener('click',gdudM6);
    document.getElementById('mal2').style.display = 'none';
    document.getElementById('mal11').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal2);
}
const gdudM3 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('gd1').removeEventListener('click',gdudM1);
    document.getElementById('gd2').removeEventListener('click',gdudM2);
    document.getElementById('gd3').removeEventListener('click',gdudM3);
    document.getElementById('gd4').removeEventListener('click',gdudM4);
    document.getElementById('gd5').removeEventListener('click',gdudM5);
    document.getElementById('gd6').removeEventListener('click',gdudM6);
    document.getElementById('mal2').style.display = 'none';
    document.getElementById('mal8').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal2);
}
const gdudM4 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('gd1').removeEventListener('click',gdudM1);
    document.getElementById('gd2').removeEventListener('click',gdudM2);
    document.getElementById('gd3').removeEventListener('click',gdudM3);
    document.getElementById('gd4').removeEventListener('click',gdudM4);
    document.getElementById('gd5').removeEventListener('click',gdudM5);
    document.getElementById('gd6').removeEventListener('click',gdudM6);
    document.getElementById('mal2').style.display = 'none';
    document.getElementById('mal8').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal2);
}
const gdudM5 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('gd1').removeEventListener('click',gdudM1);
    document.getElementById('gd2').removeEventListener('click',gdudM2);
    document.getElementById('gd3').removeEventListener('click',gdudM3);
    document.getElementById('gd4').removeEventListener('click',gdudM4);
    document.getElementById('gd5').removeEventListener('click',gdudM5);
    document.getElementById('gd6').removeEventListener('click',gdudM6);
    document.getElementById('mal2').style.display = 'none';
    document.getElementById('mal7').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal2);
}
const gdudM6 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('gd1').removeEventListener('click',gdudM1);
    document.getElementById('gd2').removeEventListener('click',gdudM2);
    document.getElementById('gd3').removeEventListener('click',gdudM3);
    document.getElementById('gd4').removeEventListener('click',gdudM4);
    document.getElementById('gd5').removeEventListener('click',gdudM5);
    document.getElementById('gd6').removeEventListener('click',gdudM6);
    document.getElementById('mal2').style.display = 'none';
    document.getElementById('mal6').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal2);
}
const mhal3 = () =>{
    document.getElementById('mha1').removeEventListener('click',mhal2);
    document.getElementById('mha2').removeEventListener('click',mhal3);
    document.getElementById('mha3').removeEventListener('click',mhal4);
    document.getElementById('back').removeEventListener('click',page4);
    document.getElementById('back').removeEventListener('click',mhal3);
    document.getElementById('mal5').style.display = 'none';
    document.getElementById('mal6').style.display = 'none';
    document.getElementById('mal7').style.display = 'none';
    document.getElementById('mal8').style.display = 'none';
    document.getElementById('mal9').style.display = 'none';
    document.getElementById('mal10').style.display = 'none';
    document.getElementById('mal11').style.display = 'none';
    document.getElementById('mal12').style.display = 'none';
    document.getElementById('mal13').style.display = 'none';
    document.getElementById('mal1').style.display = 'none';
    document.getElementById('mal2').style.display = 'inline';
    document.getElementById('mal1').style.display = 'none';
    document.getElementById('mal3').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal);
    document.getElementById('hat1').addEventListener('click',hatM1);
    document.getElementById('hat2').addEventListener('click',hatM2);
    // document.getElementById('hat3').addEventListener('click',hatM3);
    document.getElementById('hat4').addEventListener('click',hatM4);
    document.getElementById('hat5').addEventListener('click',hatM5);
    document.getElementById('hat6').addEventListener('click',hatM6);
    document.getElementById('hat7').addEventListener('click',hatM7);
}
const hatM1 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('hat1').removeEventListener('click',hatM1);
    document.getElementById('hat2').removeEventListener('click',hatM2);
    document.getElementById('hat3').removeEventListener('click',hatM3);
    document.getElementById('hat4').removeEventListener('click',hatM4);
    document.getElementById('hat5').removeEventListener('click',hatM5);
    document.getElementById('hat6').removeEventListener('click',hatM6);
    document.getElementById('hat7').removeEventListener('click',hatM7);
    document.getElementById('mal3').style.display = 'none';
    document.getElementById('mal9').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal3);
}
const hatM2 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('hat1').removeEventListener('click',hatM1);
    document.getElementById('hat2').removeEventListener('click',hatM2);
    document.getElementById('hat3').removeEventListener('click',hatM3);
    document.getElementById('hat4').removeEventListener('click',hatM4);
    document.getElementById('hat5').removeEventListener('click',hatM5);
    document.getElementById('hat6').removeEventListener('click',hatM6);
    document.getElementById('hat7').removeEventListener('click',hatM7);
    document.getElementById('mal3').style.display = 'none';
    document.getElementById('mal10').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal3);
}
const hatM3 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('hat1').removeEventListener('click',hatM1);
    document.getElementById('hat2').removeEventListener('click',hatM2);
    document.getElementById('hat3').removeEventListener('click',hatM3);
    document.getElementById('hat4').removeEventListener('click',hatM4);
    document.getElementById('hat5').removeEventListener('click',hatM5);
    document.getElementById('hat6').removeEventListener('click',hatM6);
    document.getElementById('hat7').removeEventListener('click',hatM7);
    document.getElementById('mal3').style.display = 'none';
    document.getElementById('mal9').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal3);
}
const hatM4 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('hat1').removeEventListener('click',hatM1);
    document.getElementById('hat2').removeEventListener('click',hatM2);
    document.getElementById('hat3').removeEventListener('click',hatM3);
    document.getElementById('hat4').removeEventListener('click',hatM4);
    document.getElementById('hat5').removeEventListener('click',hatM5);
    document.getElementById('hat6').removeEventListener('click',hatM6);
    document.getElementById('hat7').removeEventListener('click',hatM7);
    document.getElementById('mal3').style.display = 'none';
    document.getElementById('mal9').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal3);
}
const hatM5 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('hat1').removeEventListener('click',hatM1);
    document.getElementById('hat2').removeEventListener('click',hatM2);
    document.getElementById('hat3').removeEventListener('click',hatM3);
    document.getElementById('hat4').removeEventListener('click',hatM4);
    document.getElementById('hat5').removeEventListener('click',hatM5);
    document.getElementById('hat6').removeEventListener('click',hatM6);
    document.getElementById('hat7').removeEventListener('click',hatM7);
    document.getElementById('mal3').style.display = 'none';
    document.getElementById('mal7').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal3);
}
const hatM6 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('hat1').removeEventListener('click',hatM1);
    document.getElementById('hat2').removeEventListener('click',hatM2);
    document.getElementById('hat3').removeEventListener('click',hatM3);
    document.getElementById('hat4').removeEventListener('click',hatM4);
    document.getElementById('hat5').removeEventListener('click',hatM5);
    document.getElementById('hat6').removeEventListener('click',hatM6);
    document.getElementById('hat7').removeEventListener('click',hatM7);
    document.getElementById('mal3').style.display = 'none';
    document.getElementById('mal12').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal3);
}
const hatM7 = () =>{
    document.getElementById('back').removeEventListener('click',mhal);
    document.getElementById('hat1').removeEventListener('click',hatM1);
    document.getElementById('hat2').removeEventListener('click',hatM2);
    document.getElementById('hat3').removeEventListener('click',hatM3);
    document.getElementById('hat4').removeEventListener('click',hatM4);
    document.getElementById('hat5').removeEventListener('click',hatM5);
    document.getElementById('hat6').removeEventListener('click',hatM6);
    document.getElementById('hat7').removeEventListener('click',hatM7);
    document.getElementById('mal3').style.display = 'none';
    document.getElementById('mal11').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal3);
}
const mhal4 = () =>{
    document.getElementById('mha1').removeEventListener('click',mhal2);
    document.getElementById('mha2').removeEventListener('click',mhal3);
    document.getElementById('mha3').removeEventListener('click',mhal4);
    document.getElementById('back').removeEventListener('click',page4);
    document.getElementById('mal1').style.display = 'none';
    document.getElementById('mal4').style.display = 'inline';
    document.getElementById('back').addEventListener('click',mhal);
}
const north = () =>{
    document.getElementById('toMarhas').removeEventListener('click',marhas);
    document.getElementById('toFArea').removeEventListener('click',fireArea);
    document.getElementById('toDarom').removeEventListener('click',darom);
    document.getElementById('toMNorth').removeEventListener('click',north);
    document.getElementById('toMhal').removeEventListener('click',mhal);
    document.getElementById('toSvil').removeEventListener('click',svil);
    document.getElementById('toTik').removeEventListener('click',tiksuv);
    document.getElementById('back').removeEventListener('click',north);
    document.getElementById('page4').style.display = 'none';
    document.getElementById('north2').style.display = 'none';
    document.getElementById('north3').style.display = 'none';
    document.getElementById('north4').style.display = 'none';
    document.getElementById('marcasNorth').style.display = 'inline';
    document.getElementById('north1').style.display = 'inline';
    document.getElementById('back').style.display = 'inline';
    document.getElementById('back').addEventListener('click',page4);
    document.getElementById('n1').addEventListener('click',Nhir);
    document.getElementById('n2').addEventListener('click',Nsir);
    document.getElementById('n3').addEventListener('click',Nlev);
}
const Nhir = () =>{
    document.getElementById('back').removeEventListener('click',page4);
    document.getElementById('n1').removeEventListener('click',Nhir);
    document.getElementById('n2').removeEventListener('click',Nsir);
    document.getElementById('n2').removeEventListener('click',Nlev);
    document.getElementById('north1').style.display = 'none';
    document.getElementById('north2').style.display = 'inline';
    document.getElementById('back').addEventListener('click',north);
}
const Nsir = () =>{
    document.getElementById('back').removeEventListener('click',page4);
    document.getElementById('n1').removeEventListener('click',Nhir);
    document.getElementById('n2').removeEventListener('click',Nsir);
    document.getElementById('n2').removeEventListener('click',Nlev);
    document.getElementById('north1').style.display = 'none';
    document.getElementById('north3').style.display = 'inline';
    document.getElementById('back').addEventListener('click',north);
}
const Nlev = () =>{
    document.getElementById('back').removeEventListener('click',page4);
    document.getElementById('n1').removeEventListener('click',Nhir);
    document.getElementById('n2').removeEventListener('click',Nsir);
    document.getElementById('n2').removeEventListener('click',Nlev);
    document.getElementById('north1').style.display = 'none';
    document.getElementById('north4').style.display = 'inline';
    document.getElementById('back').addEventListener('click',north);
}
const svil = () =>{
    document.getElementById('toMarhas').removeEventListener('click',marhas);
    document.getElementById('toFArea').removeEventListener('click',fireArea);
    document.getElementById('toDarom').removeEventListener('click',darom);
    document.getElementById('toMNorth').removeEventListener('click',north);
    document.getElementById('toMhal').removeEventListener('click',mhal);
    document.getElementById('toSvil').removeEventListener('click',svil);
    document.getElementById('toTik').removeEventListener('click',tiksuv);
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page3').style.display = 'inline';
    document.getElementById('toKatalog').addEventListener('click',page4);
}
const darom = () =>{
    document.getElementById('toMarhas').removeEventListener('click',marhas);
    document.getElementById('toFArea').removeEventListener('click',fireArea);
    document.getElementById('toDarom').removeEventListener('click',darom);
    document.getElementById('toMNorth').removeEventListener('click',north);
    document.getElementById('toMhal').removeEventListener('click',mhal);
    document.getElementById('toSvil').removeEventListener('click',svil);
    document.getElementById('toTik').removeEventListener('click',tiksuv);
    document.getElementById('back').removeEventListener('click',darom);
    document.getElementById('nextD2').removeEventListener('click',darom3);
    document.getElementById('page4').style.display = 'none';
    document.getElementById('dar2').style.display = 'none';
    document.getElementById('darom').style.display = 'inline';
    document.getElementById('dar1').style.display = 'inline';
    document.getElementById('nextD').style.display = 'inline';
    document.getElementById('back').style.display = 'inline';
    document.getElementById('back').addEventListener('click',page4);
    document.getElementById('nextD').addEventListener('click',darom2);
}
const darom2 = () =>{
    document.getElementById('back').removeEventListener('click',page4);
    document.getElementById('nextD').removeEventListener('click',darom2);
    document.getElementById('back').removeEventListener('click',darom2);
    document.getElementById('darom1').removeEventListener('click',Dhir);
    document.getElementById('darom2').removeEventListener('click',Dhhn);
    document.getElementById('darom3').removeEventListener('click',Dhsn);
    document.getElementById('darom4').removeEventListener('click',mikzoaot);
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
    document.getElementById('Dhir1').style.display = 'none';
    document.getElementById('Dhhn1').style.display = 'none';
    document.getElementById('Dhsn1').style.display = 'none';
    document.getElementById('mikzoaot').style.display = 'none';
    document.getElementById('mik1').style.display = 'none';
    document.getElementById('dar3').style.display = 'inline';
    document.getElementById('back').addEventListener('click',darom2);
    document.getElementById('darom1').addEventListener('click',Dhir);
    document.getElementById('darom2').addEventListener('click',Dhhn);
    document.getElementById('darom3').addEventListener('click',Dhsn);
    document.getElementById('darom4').addEventListener('click',mikzoaot);
}
const Dhir = () =>{
    document.getElementById('back').removeEventListener('click',darom2);
    document.getElementById('darom1').removeEventListener('click',Dhir);
    document.getElementById('darom2').removeEventListener('click',Dhhn);
    document.getElementById('darom3').removeEventListener('click',Dhsn);
    document.getElementById('darom4').removeEventListener('click',mikzoaot);
    document.getElementById('dar3').style.display = 'none';
    document.getElementById('Dhir1').style.display = 'inline';
    document.getElementById('back').addEventListener('click',darom3);
}
const Dhhn = () =>{
    document.getElementById('back').removeEventListener('click',darom2);
    document.getElementById('darom1').removeEventListener('click',Dhir);
    document.getElementById('darom2').removeEventListener('click',Dhhn);
    document.getElementById('darom3').removeEventListener('click',Dhsn);
    document.getElementById('darom4').removeEventListener('click',mikzoaot);
    document.getElementById('dar3').style.display = 'none';
    document.getElementById('Dhhn1').style.display = 'inline';
    document.getElementById('back').addEventListener('click',darom3);
}
const Dhsn = () =>{
    document.getElementById('back').removeEventListener('click',darom2);
    document.getElementById('darom1').removeEventListener('click',Dhir);
    document.getElementById('darom2').removeEventListener('click',Dhhn);
    document.getElementById('darom3').removeEventListener('click',Dhsn);
    document.getElementById('darom4').removeEventListener('click',mikzoaot);
    document.getElementById('dar3').style.display = 'none';
    document.getElementById('Dhsn1').style.display = 'inline';
    document.getElementById('back').addEventListener('click',darom3);
}
const mikzoaot = () =>{
    document.getElementById('back').removeEventListener('click',darom2);
    document.getElementById('darom1').removeEventListener('click',Dhir);
    document.getElementById('darom2').removeEventListener('click',Dhhn);
    document.getElementById('darom3').removeEventListener('click',Dhsn);
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
    document.getElementById('toMNorth').removeEventListener('click',north);
    document.getElementById('toMhal').removeEventListener('click',mhal);
    document.getElementById('toSvil').removeEventListener('click',svil);
    document.getElementById('toTik').removeEventListener('click',tiksuv);
    document.getElementById('back').removeEventListener('click',marhas);
    document.getElementById('page4').style.display = 'none';
    document.getElementById('mar2').style.display = 'none';
    document.getElementById('back').style.display = 'inline';
    document.getElementById('marhas').style.display = 'inline';
    document.getElementById('mar1').style.display = 'inline';
    document.getElementById('back').addEventListener('click',page4);
    document.getElementById('marhsK').addEventListener('click',marhas2);
}
const marhas2 = () =>{
    document.getElementById('marhsK').removeEventListener('click',marhas2);
    document.getElementById('back').removeEventListener('click',page4);
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
    document.getElementById('toMNorth').removeEventListener('click',north);
    document.getElementById('toMhal').removeEventListener('click',mhal);
    document.getElementById('toSvil').removeEventListener('click',svil);
    document.getElementById('toTik').removeEventListener('click',tiksuv);
    document.getElementById('back').removeEventListener('click',fireArea);
    document.getElementById('page4').style.display = 'none';
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
    document.getElementById('back').addEventListener('click',page4);
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
    document.getElementById('back').removeEventListener('click',page4);
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
    document.getElementById('back').removeEventListener('click',page4);
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
    document.getElementById('back').removeEventListener('click',page4);
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
    document.getElementById('back').removeEventListener('click',page4);
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
    document.getElementById('back').removeEventListener('click',page4);
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
    document.getElementById('back').removeEventListener('click',page4);
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
    document.getElementById('back').removeEventListener('click',page4);
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
    document.getElementById('back').removeEventListener('click',page4);
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
    document.getElementById('back').removeEventListener('click',page4);
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
    document.getElementById('back').removeEventListener('click',page4);
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
    document.getElementById('back').removeEventListener('click',page4);
    document.getElementById('fA1').style.display = 'none';
    document.getElementById('fA12').style.display = 'inline';
    document.getElementById('marhsAdd').style.display = 'inline';
    document.getElementById('back').addEventListener('click',fireArea);
    document.getElementById('marhsAdd').addEventListener('click',function(){
        addTrain('מתקן בראשית');
        document.getElementById('marhsAdd').removeEventListener('click',arguments.callee);
    });
}
