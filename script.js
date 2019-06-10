const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageout = document.querySelector('#messageOut');
const firstOutput = document.querySelector('#firstOutput');

sendBtn.addEventListener('click', sendMsg);


function sendMsg(){
    let content = messageIn.value;
    //console.log(content);
    if(content === ''){
        firstOutput.innerHTML = 'No wish?';
        alert('No wish?');
    }else{
        messageout.innerHTML = content;
        firstOutput.innerHTML = 'Wish is recived HO HO HOO';
        messageIn.value = '';
    }
    
   
}