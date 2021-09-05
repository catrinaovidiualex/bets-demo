

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







let btn=document.querySelector('#score');




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




generateMatch();
btn.addEventListener('click', ()=>{



     generateMatch();
})