let cards = document.querySelectorAll('.card-body');
let btn = document.querySelector('#btn_page1');
btn.disabled=true;
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
           /*  btn.style.opacity="1"; */
           btn.disabled=false;
        console.log(selectedCard);



        //////////
        //Page 2
        let page1 = document.getElementById('page1');
        let page2 = document.getElementById('page2');
        let eventName = document.querySelector('#event-content h2');
        let paragraphs = document.querySelectorAll('#event-content p');
        let reste = document.querySelector('#event-content p span');
        let btn_pre = document.getElementById("btn_pre");
        
        eventName.innerHTML = selectedCard.title;
        paragraphs[0].innerHTML = selectedCard.date;
        paragraphs[1].innerHTML = selectedCard.lieu;
        paragraphs[2].innerHTML = selectedCard.prix;
        reste.innerHTML = selectedCard.restants;
       
        console.log(reste.innerHTML);
        
        
    })
    
})
btn.addEventListener('click', () => {
    page1.style.display = "none";
    page2.style.display = "block";
   /*  restant_billets=selectedCard.restants; 
    console.log(restant_billets); */
    
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
let reste = document.querySelector('#event-content p span');
btn_next.disabled=true;

let count=0;
let nbr_max=0;
function updateDisplay() {
    
    nombre.innerText = count; 
    if(count!=0){
        btn_next.disabled=false;
    } else{
        btn_next.disabled=true;
    }
    if (count == 0) {
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
    reste.innerHTML--;
    /* selectedCard.restants-=1;
    console.log(selectedCard.restants); */
})
btn_decr.addEventListener('click',()=>{
    count--; 
if(count<=selectedCard.restants){
        
    btn_incr.removeAttribute("disabled");
         alert.style.display="none";
    }

    updateDisplay();
    reste.innerHTML++;   
})
btn_next.addEventListener('click',()=>{
        page2.style.display="none"; 
    document.getElementById('page3').style.display="block";
    nbr_max=count;
    console.log(nbr_max);
    document.querySelector('#h4 #span2').textContent=nbr_max;
    console.log(parseInt(selectedCard.restants-=nbr_max));
    

})



/////
///Page3
/*regex*/
const nameRegex = /^[a-zA-Z\u0600-\u06FF\s.'-]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telRegex = /^\+?[\d\s-().]{7,20}$/
/**/ 
let myform=document.getElementById('myform');
let participant=document.getElementById('participant');
let h4=document.querySelector('#h4 #span1');
let nom=document.getElementById('first_name');
let prenom=document.getElementById('last_name');
let email=document.getElementById('email');
let tel=document.getElementById('tel');
let submit=document.getElementById('submit');
let btn_next_page3=document.getElementById('btn_page3');
let participants=[];
let i=1;
h4.innerHTML=i;
myform.addEventListener('submit',(e)=>{
    e.preventDefault();
   
   /*  if (!nameRegex.test(nom.value) || !nameRegex.test(prenom.value)) {
        document.getElementById('first_name').style.boxShadow="0 0 5px rgba(231, 76, 60, 0.8)";
        document.getElementById('first_name_error').innerHTML="Champ invalid";
        return;
    }
    if (!emailRegex.test(email.value)) {
        document.getElementById('email_error').innerHTML="Invalid email format. Please use the format: [name@example.com].";
        document.getElementById('email').style.boxShadow="0 0 5px rgba(231, 76, 60, 0.8)";
        return;
    }
    if ( tel.value.trim() === '' && !telRegex.test(tel.value)) { 
        document.getElementById('tel_error').innerHTML="Phone number is required.Use 10 numbers";
        document.getElementById('tel').style.boxShadow="0 0 5px rgba(231, 76, 60, 0.8)";
        return;
    } */
    const nouveauParticipant={
        nom:nom.value.trim(),
        prenom:prenom.value.trim(),
        email:email.value.trim(),
        tel:tel.value.trim(),
    }
    participants.push(nouveauParticipant);
    console.log(participants);
    
    const ul=document.createElement('ul');
    ul.innerHTML=`
    <h3>Participant${i}</h3>
    <li>${nom.value} ${prenom.value}</li>
    <li>${email.value}</li>
    <li>${tel.value}</li>
    <button class="btn btn-supp btn-danger">Supprimer</button>
    `
    participant.appendChild(ul); 
    
    
    let btn_supp=ul.querySelector('ul .btn-supp');
    btn_supp.addEventListener('click',()=>{
        ul.remove();
        i--;
        h4.innerHTML=i;
        if(i<=nbr_max){
            submit.disabled=false;
        }

        
    })
    myform.reset();
    i++;
    h4.innerHTML=i;   
    if(i-1==nbr_max){
        submit.setAttribute('disabled','true');
        h4.innerHTML=i-1;
    }   
})


let page4=document.getElementById('page4');
let page4_content=document.getElementById('page4_content');

btn_next_page3.addEventListener('click',function(){ 
 
    page4.style.display="block";
    document.getElementById('page3').style.display="none";
    console.log(selectedCard);
    page4_content.innerHTML=`
        <h2>Récapitulatif</h2>
        <p>Evenement : ${selectedCard.title}</p>
        <p>Nombre des billets : ${count}</p>
        <p>Participants :</p>
    `;    
    participants.forEach(par=>{
        console.log(par);
        
        page4_content.innerHTML+=`
        <ul class='list-participants'>
            <strong>Nom complet:</strong> ${par.nom} ${par.prenom} <br>
            <strong>Email:</strong> ${par.email} <br>
            <strong>Tél:</strong> ${par.tel}
        </ul>
        `
    }) 
})
document.getElementById('btn_pre-page3').addEventListener('click',function(){
    document.getElementById('page3').style.display="none";
     document.getElementById('page2').style.display="block"; 
})

///Page4
/* let page4=document.getElementById('page4_content');
let participants=document.querySelectorAll('#participant ul li')
page4.innerHTML=`<p>${participants}</p>`
console.log(participants);
 */






