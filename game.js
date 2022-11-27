const my_card = [
    {name: 'aa' , id : 1},
    {name: 'bb' , id : 2},
    {name: 'cc' , id : 3},
    {name: 'aa' , id : 1},
    {name: 'bb' , id : 2},
    {name: 'cc' , id : 3},
    ];

let tor = 0
let tor1 = ""

init_game()

function init_game(){
    shake()
    shake()
    shake()

    for (let i = 0 ; i <= 5 ; i++){
        document.getElementById(`img${i}`).disabled = false;
    }
    document.getElementById(`play_again`).disabled = true;
    document.getElementById('my_p').innerHTML = ""
}

function shake(){
    let shake_card = my_card.sort(function () {
        return Math.random() - 0.5;
    });
}

function opp(x){
    if (x == tor1){
        return
    }
    else{
        document.getElementById(`img${x}`).src = `card/${my_card[x].name}.jpg`
        tor++
        
        if (tor % 2 == 0){
            if( Similar(x , tor1) == false){
                setTimeout(
                    ()=> {
                        document.getElementById(`img${x}`).src = `card/back.png`
                        document.getElementById(`img${tor1}`).src = `card/back.png`
                        tor1 = ""
                      //  end_game()
                    },
                    900
                );
            }
        } 
        else{
            tor1 = x
        }
    }
}

function Similar(x , y){
    if (my_card[x].id == my_card[y].id){
        setTimeout(
            ()=> {
                document.getElementById(`img${x}`).style.visibility = "hidden"
                document.getElementById(`img${x}`).disabled = true;
                document.getElementById(`img${y}`).style.visibility = "hidden"
                document.getElementById(`img${y}`).disabled = true;
                my_card[x].id = undefined
                my_card[y].id = undefined
                return true
            },
            900
        );
    }
    return false
}

function end_game(){
    if (5 > 0){
        document.getElementById('my_p').innerHTML += "TADAMMM!"
        document.getElementById(`play_again`).disabled = false;
    }

}