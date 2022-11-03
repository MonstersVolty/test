//Début
$('.card-fer').click(function() {
    //$('.card-fer').click(function() = Commencer une fonction qui prendra la carte du site web et lorsque qu'on clique dessus, elle va éxécuter sa fonction.
    //Analyser la carte cliquée
    let priceFer = 0.39;
    //Prix par défaut
    let nbFer = prompt('Tapez le nombre de ferrailles que vous souhaitez commander.');
    //Poser la question
    let nbFerPrice = nbFer * priceFer;
    //Fait le calcul du prix total
    alert('Le prix total de ferrailles que vous souhaitez commander est donc de : ' + nbFerPrice + '$');
    //afficher le résultat
});
//Fin

//Début
$('.card-eng').click(function() {
    //Analyser la carte cliquée
    let priceEng = 30;
    //Prix par défaut
    let nbEng = prompt('Tapez le nombre des engrais biologique que vous souhaitez commander.');
    //Poser la question
    let nbEngPrice = nbEng * priceEng;
    //Fait le calcul du prix total
    alert('Le prix total des engrais biologique que vous souhaitez commander est donc de : ' + nbEngPrice + '$');
    //afficher le résultat
  
});
//Fin

// jquery -> une amélioration de javascript qui permet de faire des choses + en profondeur et plus rapidment, elle est souvent utilisée pour les sites qui nécessitent beaucoup d'interaction au niveau utilisateur, graphiquement etc...