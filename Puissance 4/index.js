P4 = [];
var turn = 1;
var cptLigne = 0;
var cptDiago = 0;
var cptVerti = 0;

tab();
var name;
name = prompt("quel est ton nom?");

function tab() {
    for(var i = 0; i < 7; i++) {
        P4[i] = [];
        for(var j = 0; j < 7; j++){
            P4[i][j] = 0;
        }
    }
};

function column() {
    var col, raw = 6;
        if (turn === 1) col = parseInt(prompt("Dans quelle colonne veux-tu jouer? (0 à 6)"));
        else col = Math.floor(Math.random()* 7);
    console.log(col);
    while(raw >= 0) {
        if (turn === 1 && P4[col][raw] === 0){
            P4[col][raw] = 1;
        }
        if (turn === 2 && P4[col][raw] === 0){
            P4[col][raw] = 2;
        }
        raw--;
    }
};
 
function turn(){
    if (turn === 1) turn = 2;
    else turn = 1;
};

do{
column();
check();
console.table(P4);
turn();
}while(cptVerti === 4 || cptDiago === 4 || cptLigne === 4)

function check(){
    for(var j = 0; j < 7; j++) {
        for(var i = 0; i < 7; i++){
            cptLigne = 0;
            cptDiago = 0;
            cptVerti = 0;
                if(P4[j][i] === 1) {
                    cptLigne++;
                    cptVerti++;
                    cptDiago++;
                    switch (P4[j + 1][i]){
                        case 2 || 0:
                            cptVerti = 0;
                            break;
                        case 1:
                            cptVerti++;
                            if(P4[j + 2][i] === 1) {
                                cptVerti++;
                                switch (P4[j + 3][i]){
                                    case 2 || 0:
                                        cptVerti = 0;
                                    break;
                                    case 1:
                                        cptVerti++;
                                        if (cptVerti === 4){
                                            alert("Joueur " + name +"gagne")
                                        }
                                        break;
                                }
                            break;
                            }
                    }
                    switch (P4[j + 3][i + 1]){
                        case 2 || 0:
                            cptDiago = 0;
                            break;
                        case 1 :
                            cptDiago++;
                            if(P4[j + 2][i + 2] === 1){
                                cptDiago++
                                switch (P4[j + 3][i + 3]){
                                    case 2 || 0:
                                        cptDiago = 0;
                                        break;
                                    case 1 :
                                        cptDiago++;
                                        if(cptDiago === 4){
                                            alert( name + " gagne !");
                                        }
                                        break;
                                }
                            }
                            break;
                    }  
                    switch (P4[j][i+ 1]){
                        case 2 || 0:
                            cptLigne = 0;
                            break;
                        case 1 :
                            cptLigne++;
                            if(P4[j][i + 2] === 1){
                                cptLigne++
                                switch (P4[j][i + 3]){
                                    case 2 || 0:
                                        cptLigne = 0;
                                        break;
                                    case 1 :
                                        cptLigne++;
                                        if(cptLigne === 4){
                                            alert( name + " gagne !");
                                        }
                                        break;
                                }
                            }
                            break;
                    }  
                }
            if(P4[j][i] === 2) {
                cptLigne++;
                cptVerti++;
                cptDiago++;
                switch (P4[j + 1][i]){
                    case 1 || 0:
                        cptVerti = 0;
                    break;
                    case 2:
                        cptVerti++;
                        if(P4[j + 2][i] === 2) {
                            cptVerti++;
                            switch (P4[j + 3][i]){
                                case 1 || 0:
                                    cptVerti = 0;
                                break;
                                case 2:
                                    cptVerti++;
                                    if (cptVerti === 4){
                                        alert("L'ordinateur gagne")
                                    }
                                    break;
                            }
                        }
                        break;
                }
                switch (P4[j][i+ 1]){
                    case 1 || 0:
                        cptLigne = 0;
                        break;
                    case 2 :
                        cptLigne++;
                        if(P4[j][i + 2] === 2){
                            cptLigne++
                            switch (P4[j][i + 1]){
                                case 1 || 0:
                                    cptLigne = 0;
                                    break;
                                case 2 : 
                                    cptLigne++;
                                    if(cptLigne === 4){
                                        alert("L'ordinateur gagne");
                                    }
                                    break;
                            }
                        }
                        break;
                }
                switch (P4[j + 1][i+ 1]){
                    case 1 || 0:
                        cptDiago = 0;
                        break;
                    case 2 :
                        cptDiago++;
                        if(P4[j + 2][i + 2] === 2){
                            cptDiago++
                            switch (P4[j + 3][i + 3]){
                                case 1 || 0:
                                    cptDiago = 0;
                                    break;
                                case 2 :
                                    cptDiago++;
                                    if(cptDiago === 4){
                                        alert("L'ordinateur gagne");
                                    }
                                    break;
                            }
                        }
                        break;  
                }
            }
        }
    }
};      