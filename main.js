let cards = document.querySelectorAll('.card-body');
let btn = document.querySelector('.btn-success');
let selectedCard = null;
cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('displayed'));
        card.classList.add("displayed");
        let card_text = card.querySelectorAll('.card-text');
        selectedCard = {
            title: card.querySelector('h5').innerHTML,
            date: card_text[0].innerHTML,
            lieu: card_text[1].innerHTML,
            prix: card_text[2].innerHTML,
            restants: card_text[3].querySelector('span').innerHTML,
        }
            btn.style.opacity="1";
        console.log(selectedCard);



        //////////
        //Page 2
        let page1 = document.getElementById('page1');
        let page2 = document.getElementById('page2');
        let eventName = document.querySelector('#event-content h1');
        let paragraphs = document.querySelectorAll('#event-content p');
        let reste = document.querySelector('#event-content p span');
        let btn_pre = document.getElementById("btn_pre");
        
        eventName.innerHTML = selectedCard.title;
        paragraphs[0].innerHTML = selectedCard.date;
        paragraphs[1].innerHTML = selectedCard.lieu;
        paragraphs[2].innerHTML = selectedCard.prix;
        reste.innerHTML = selectedCard.restants;
       
        console.log(reste);
        
        
    })
    
})
btn.addEventListener('click', () => {
    page1.style.display = "none";
    page2.style.display = "block";
    restant_billets=selectedCard.restants;
    
    
})

btn_pre.addEventListener('click',()=>{
    page1.style.display = "block";
    page2.style.display = "none";
    nombre.innerHTML=0;
    alert.style.display="none";
})

////change  state counter
let nombre=document.getElementById('nombre');
let btn_incr=document.getElementById('increment');
let btn_decr=document.getElementById('decrement');
let alert=document.querySelector('.alert-danger');
let btn_next=document.getElementById("btn-page2");
let count=0;
function updateDisplay() {
    nombre.innerText = count;   
    if (count <= 0) {
        btn_decr.disabled = true;
    } else {
        btn_decr.disabled = false;
    }  
}
updateDisplay();
btn_incr.addEventListener('click',()=>{
    count++;
    if(count==selectedCard.restants){
        btn_incr.setAttribute("disabled","true");
        alert.style.display="block";
    }
    else{
        btn_incr.removeAttribute("disabled"); 
    }
    updateDisplay();
    
})
btn_decr.addEventListener('click',()=>{
    count--; 
if(count<=selectedCard.restants){
        
    btn_incr.removeAttribute("disabled");
         alert.style.display="none";
    }

    updateDisplay();
   
})
btn_next.addEventListener('click',()=>{
    
    page2.style.display="none"; 
    document.getElementById('page3').style.display="block";
})


/////
///Page3
let myform=document.getElementById('myform');
let participant=document.getElementById('participant');
let h4=document.getElementById('h4');
let nom=document.getElementById('first_name');
let prenom=document.getElementById('last_name');
let email=document.getElementById('email');
let tel=document.getElementById('tel');
let submit_btn=document.getElementById('submit');

myform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const ul=document.createElement('ul');
    ul.innerHTML=`
    <li>${nom.value}</li>
    <li>${prenom.value}</li>
    <li>${email.value}</li>
    <li>${tel.value}</li>
    <button class="btn btn-supp btn-danger">Supprimer</button>
    `
    participant.appendChild(ul);
    myform.reset();
})
// --- 2. التعامل مع زر الحذف (باستخدام تفويض الأحداث - FIX) ---
// نُرفق المُستمع بالعنصر الأب الثابت (participant)
participant.addEventListener('click', (e) => {
    // نتحقق مما إذا كان العنصر الذي تم النقر عليه يحتوي على الفئة 'btn-supp'
    if (e.target.classList.contains('btn-supp')) {
        
        // نجد أقرب عنصر أب من نوع <ul> ونقوم بإزالته
        // هذا يضمن حذف معلومات المشارك بالكامل
        e.target.closest('ul').remove();
    }
});






