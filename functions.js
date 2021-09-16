

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