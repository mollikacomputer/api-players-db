document.getElementById('error-message').style.display = 'block';
const errorMessage = ()=>{
        document.getElementById('error-message').style.display = 'block';
        const displayContainer = document.getElementById('display-container');
        displayContainer.textContent = '';
}

document.getElementById('search-btn').addEventListener('click', function(){
    const searchInputBox = document.getElementById('search-input-box');
    const searchText = searchInputBox.value;
    if(searchInputBox.value=== ''){
        errorMessage();
    }else{
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;
        fetch(url)
        .then(response => response.json())
        .then(data => displayPlayer(data.player));
        searchInputBox.value = '';
    }
    
})



const displayPlayer = players =>{
    const displayContainer = document.getElementById('display-container');
    displayContainer.textContent = '';

    if(players==null){
        errorMessage();
    }
        players.forEach(player=>{
            // console.log(player);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="playerInfo( ${player} )" class="card h-100">
                    <img src="${player.strThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${player.strPlayer} </h5>
                    <p class="card-text"> </p>
                </div>
                <div class="card-footer">
                    <small class="text-muted"> ${player.strFacebook} </small>
                    <button id='info-btn' type="button" class="btn btn-primary">Show Details</button>
                </div>
            </div>
            `;

            displayContainer.appendChild(div);
        });
}

function playerInfo(player){
    const playerInfoBox = document.getElementById('player-info-container');
    playerInfoBox.innerText = 'Player info ';
}