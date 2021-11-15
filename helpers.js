let setHome=()=>{

    let container=document.querySelector(".container")

    container.innerHTML=`

    <header>

        <h1>Bineti ati venit!</h1>
        <h2>Pentru a incepe jocul apasati butonul de START JOC<h2>

    </header>

    <main >

        <section>
           
            <img src="/img/paginaStart.jpg" alt="" class="primapagina">
            

        </section>

      
       <button class="myButton">Start Joc</button>

    </main>

    <footer>
  <p>Copyright Alex Catrina, 2021</p>

    </footer>
    `





    let btn =document.querySelector(".myButton");



    btn.addEventListener("click",()=>{

        setStartJoc();

         
    })
}

let setStartJoc=()=>{
    let container=document.querySelector(".container")

    container.innerHTML=`
    <header>

        <h1>Meciul etapei:</h1>

    </header>

    <main >

        <section class="gazde echipa">
            <h3>Gazde</h3>
            <img src="/img/Dinamo.png" alt="gazde">
            <p>Scor1</p>


        </section>

        <section class="oaspeti echipa">
            <h3>Oapseti</h3>
            <img src="/img/FCSB.jpg"alt="oaspeti">
            <p>Scor2</p>
        </section>
        

        <section class ="generare_meciScor">
            <p> Selecteaza meci</p>
        </section>
        <button class="exitButton">Final Joc</button>

      
       

    </main>

    <footer>
  <p>Copyright Alex Catrina, 2021</p>

    </footer>
    
    `


let gazde=document.querySelector(".gazde");



let oaspeti=document.querySelector(".oaspeti");






function generateScore(){


    return  Math.floor(Math.random()*5+1);

}


function choseTeam(){


    let number=Math.floor(Math.random()* data.length);

    return data[number];
}


function generateTeams(){

     let alese=[];

     let team1=choseTeam();

     team1.scor=generateScore();


     let team2=choseTeam();

     while(team2.name===team1.name){

        team2=choseTeam();
     }


     team2.scor=generateScore();



     alese.push(team2);
     alese.push(team1);


     return alese;



    

}


function generateMatch(){

    let genM=generateTeams();
    
    
    
      gazde.innerHTML=`
      <h3>${genM[0].name}
      <img src="${genM[0].url}" alt="gazde">
      <p>${genM[0].scor}
    `
    oaspeti.innerHTML=`
    <h3>${genM[1].name}
    <img src="${genM[1].url}" alt="oaspeti">
    <p>${genM[1].scor}
    `
    






}


function existentaEchipa(echipa){

    for(let i=0; i<data.length;i++){

        if(echipa==data[i].name){

            return data[i];
        }
    }

    return "";
    
  }


function generateMeci(){

     let genSG=generateScore();
     let genSO=generateScore();

     let echipaG=prompt("Selectati echipa gazda:");


     let echipaO=prompt("Selectati echipa oaspete:");



     let objG=existentaEchipa(echipaG);


        while(objG==""){

             alert("Selectati o alta echipa");
             let echipaG=prompt("Selectati echipa gazda:");
             objG=existentaEchipa(echipaG);


        }


     let objO=existentaEchipa(echipaO);

     while(objO==""){

        alert("Selectati o alta echipa");
        let echipaO=prompt("Selectati echipa oaspete:");
        objO=existentaEchipa(echipaO);
   }


   gazde.innerHTML=`
   <h3>${echipaG}</h3>
   <img src="${objG.url}" alt="gazde">
   <p>${genSG}</p>
  
   `

   oaspeti.innerHTML=`
   <h3>${echipaO}</h3>
   <img src="${objO.url}" alt="oaspeti">
   <p>${genSO}</p>
  `




}


let b=document.querySelector(".generare_meciScor");



b.addEventListener("click",()=>{

     generateMeci();
})


let btnIesire=document.querySelector(".exitButton");

btnIesire.addEventListener("click",()=>{
    setIesireJoc();
})
}

let setIesireJoc=()=>{
    let container=document.querySelector(".container");

    container.innerHTML=`
    <header>

    <h1>Va multumim!</h1>
    <h2>Pentru a incepe un joc nou apasati butonul de RESTART JOC<h2>

</header>

<main >

    <section>
       
        <img src="/img/paginafinala.jpg" alt="" class="primapagina">
        

    </section>

  
   <button class="myButton">Restart Joc</button>

</main>

<footer>
<p>Copyright Alex Catrina, 2021</p>

</footer>

    `

    let btnRestartJoc=document.querySelector(".myButton");

    btnRestartJoc.addEventListener("click",()=>{
        setStartJoc();
    })

}





