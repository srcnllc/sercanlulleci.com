const anasayfa=document.querySelector(".anasayfa");
const cerceve=document.querySelector(".cerceve");
const yazı=document.querySelector("#yazı");
const button=document.querySelector("#button");

function merhaba(){
    cerceve.style.display = 'none';
    yazı.style.display = 'none';
    anasayfa.style.display = 'flex';
  }

setTimeout(merhaba, 6000);

function sayfayagit(){
    location.href="anasayfa.html";
}

const indirözgecmis=() =>{
    location.href="https://drive.google.com/file/d/1GXQKdyl_aLkHYpnHAmWgU724X0hxfsPR/view?usp=sharing";
}
const indirtranskript=() =>{
    location.href="https://drive.google.com/file/d/1p0zzQNxjktipFqiKoupkJiuHjZ7Z5WHu/view?usp=sharing";
}
const indirjs=() =>{
    location.href="https://drive.google.com/file/d/1RLgPP0Wst9h4e3d5aQSCeDcLK8kZSmSG/view?usp=sharing";
}