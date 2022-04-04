const element=document.getElementsByTagName('h1')
// console.log(element)
console.log(element[0].innerText)


// var e=document.getElementById('h1')
// console.log(e.innerHTML)

function clickme(){
    const text=document.getElementById('data');
    text[0].innerText='Good by !!!!!';

    text[0].style.color='darkred';
    text[0].style.backgroundColor='grey';
    text[0].style.margin='0px';
    text[0].style.padding='50px';
}

function clickme(){
    const text1=document.getElementsByTagName('h1');
    text1[0].innerText='by ';
    // text1[0].style.display='none'

}
function innertext(){
    const element=document.getElementById('task')
    alert(element.innerText)
}


function innerhtml(){
    const e=document.getElementById('task')
    alert(e.innerHTML)
}


function create(){
    //for create
    const ele=document.createElement('span')
    ele.setAttribute('class','heading')
    ele.innerText='i am span'
    //for screen
    const parent= document.getElementById('parent')
    parent.appendChild(ele)
    console.log(ele)
}