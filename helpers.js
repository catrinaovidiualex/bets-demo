let setHome=()=>{
    
    let container=document.querySelector(".container")

    container.innerHTML=`

    <header>

        <h1>Bineti ati venit!</h1>
        <h2>Pentru a incepe jocul apasati butonul de START JOC<h2>

    </header>

    <main >

        <section>
           
            <img src="../img/paginaStart.jpg" alt="" class="primapagina">
            

        </section>

      
       <button class="myButton">Start Joc</button>

    </main>

    <footer>
  <p>Copyright Alex Catrina, 2021</p>

    </footer>
    `
}

let btnStartJoc =document.querySelector(".myButton")

btnStartJoc.addEventListener("click",()=>{
    setHome();
})