
// Note : L'exercice suivant comporte un objet, l'utilisation d'une class n'est pas nécessaire 
// ### Exercice uniquement sur un objet
// - Créer un objet Personnage avec des propriétés : 
//     - idendite:{nom, prenom}
//     - argent
//     - lieu
//     - humeur 
// - une méthode propre à l'objet qui va changer son humeur aléatoirement.(Soit positif, soit négatif)
// - Créer une fonction (attention ce n'est pas une méthode propre à l'objet mais belle est bien une FONCTION classique) qui va permettre au personnage de changer son lieu. De base, il est chez lui, par la fonction, il se déplacera à son lieu de travail.
// - Créer une autre fonction qui va lui permettre de gagner de l'argent. Il gagnera 10€ pour 8 heure si son humeur est négative. Par contre il gagnera 15€ pour 8heures si son humeur est positive. (Une itération vaut 1 heure).
// - (Bonus:faite en sorte qu'une itération se fasse tous les 2sec)
// - Pour la fonction qui lui permet de gagner de l'argent, si son humeur est positive, tous les 2 heures, il dira via une console.log : "J'aime mon travail", mais par contre si son humeur est négative, il dira "je préfére mon lit"


let personnage = {
    identite:{
        nom : "kanen",
        prenom : "philippe",
    },
    argent: 0,
    lieu: "maison",
    humeur:"",
    changeHumeur(){
        let random = Math.trunc(Math.random()* 10) +1
        console.log(random);
        if (random %2 == 0) {
            this.humeur = "positif"
            
        }
        else{
            this.humeur = "negatif"
        }
    }
            
}

const deplacer =(a,b)=>{

    a.lieu = b

}

const money =()=>{
    if (personnage.humeur == "positif") {
        for (let i = 0; i < 8; i++) {
            personnage.argent += 15;
            console.log(`${i+1}j'aime mon travaille`);
            
        }
       

        
    }
    else{
        for (let i = 0; i < 8; i++) {
           personnage.argent += 10
           console.log(`${i+1} je préfère mon lit`);
            
        }
    }
}

personnage.changeHumeur();
console.log(`l'humeur du personnage est : ${personnage.humeur}`);

deplacer(personnage,`${personnage.identite.prenom} se déplace à son lieux de travaille`);
console.log(personnage.lieu);

money();
console.log(`${personnage.identite.prenom} est d'humeur ${personnage.humeur} du coup il gagne:${personnage.argent} £`);

deplacer('maison');
console.log(personnage);




    



