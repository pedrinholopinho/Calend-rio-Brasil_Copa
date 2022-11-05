function createGame(player1,hora,player2){
    return`
    <li>
    <img src="assets/icon-${player1}.svg"/>
    <strong>${hora}</strong>
    <img src="assets/icon-${player2}.svg"/>
</li>
    `
}
function createCard(date,day,games){
    return `
    <div class="card">
                <h2>${date}<span>${day} </span></h2> 
                <ul>
                  ${games}  
                </ul>
            </div>      
    `
}


document.querySelector('#cards').innerHTML=
             
            
            createCard("24/11","Segunda",createGame('suica','7:00','camaroes') +
            createGame('uruguai','10:00','coreia') + createGame('portugal','13:00','gana')+
            createGame('brasil','16:00','Serbia'))+
            
           createCard("28/11","Quinta",createGame('camaroes','07:00','serbia')+
            createGame('coreia','10:00','gana')+createGame('brasil','13:00','suica')+
            createGame('portugal','16:00','uruguai')
            )+

            createCard("02/12","Sexta",createGame('coreia','12:00','portugal')+
            createGame('gana','12:00','uruguai')+
            createGame('serbia','16:00','suica')+createGame('camaroes','16:00','brasil'))

           