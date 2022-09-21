let vitoria = ['a1,a2,a3','b1,b2,b3','c1,c2,c3','a1,b1,c1','a2,b2,c2','a3,b3,c3','a1,b2,c3','c1,b2,a3'];
let game = {a1: '', a2: '',a3: '',b1: '',b2: '',b3: '',c1: '',c2: '',c3: ''};
let player = {1: 'X', 2: 'O'};
let actualplayer = 1;

document.querySelectorAll('.casatabuleiro').forEach(el=>{
    el.addEventListener('click',()=>{
        if(el.innerHTML==''){
            el.innerHTML = player[actualplayer];
            game[el.getAttribute('id')] = player[actualplayer];
            setTimeout(() => {
                checkWin(); 
            }, 50);                      
        }             
    });
})

function tooglePlayer(){
    actualplayer == 1 ? actualplayer = 2: actualplayer = 1;    
}

function checkWin(){
    vitoria.forEach(el=>{
        let count = 0;
        el.split(',').forEach(casa=>{            
            if(game[casa]==player[actualplayer]){
                count++
            };
            if(count==3){
                alert(`${player[actualplayer]} venceu!`);
                document.querySelectorAll('.casatabuleiro').forEach(el=>{
                    el.innerHTML = '';
                    game[el.getAttribute('id')] = '';                                      
                });             
            }
        })
    })
    tooglePlayer();  
}