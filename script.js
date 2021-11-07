// Création de la fonction qui définit les options et leurs valeurs
function options(citadine, berline, couleur, musik, m120, m140, m200) {
  concessionnaire(citadine, berline, couleur, musik, m120, m140, m200);
}
options(10000, 15000, 2000, 2000, 1500, 3000, 4000);

// Crétion de la fonction qui affiche les options en fonction du budget restant
function optionRestante(budget) {
  if (budget >= 4000) {
    choix = prompt(
      "Vous pouvez maintenant choisir une option : \n 1- couleur \n 2- musik \n 3- moteur 120 ch \n 4- moteur 140 ch \n 5- moteur 200 ch \n 6- sortir \n 7- consulter mon panier"
    );
  } else if (budget >= 3000 && budget < 4000) {
    choix = prompt(
      "Vous pouvez chosir parmis les options suivantes : \n 1- couleur \n 2- musik \n 3- moteur 120ch \n 4- moteur 140ch \n 6- sortir \n 7- consulter mon panier"
    );
  } else if (budget >= 2000 && budget < 3000) {
    choix = prompt(
      "Vous pouvez choisir les options suivantes : \n 1- couleur \n 2- musik \n 3- moteur 120ch \n 6- sortir \n 7- consulter mon panier"
    );
  } else if (budget >= 1500 && budget < 2000) {
    choix = prompt(
      "Vous pouvez choisir les options suivantes : \n 3- moteur 120ch \n 6-sortir \n 7- consulter mon panier"
    );
  } else if (budget < 1500) {
    choix = prompt(
      "Vous pouvez choisir les options suivantes : \n 6- sortir \n 7- consulter mon panier"
    );
    return;
  }
}

// Création de la fonction principale
function concessionnaire(citadine, berline, couleur, musik, m120, m140, m200) {
  let budget = prompt("Veuillez entrer votre budget : ");
  // Affichage du choix de voiture
  choix = prompt("Souhaitez vous : \n 1- citadine \n 2- berline \n 3- sortir");
  if (choix == 1) {
    if (budget < 10000) {
      alert("Fond insuffisant");
    } else if (budget >= 10000) {
      alert(
        "Felicitations vous venez d'acquérir une citadine votre budget et maintenant de" +
          " " +
          (budget -= citadine)
      );
      panier = citadine;

      // Boucle qui permet d'afficher les options restantes en foction du choix et du budget
      while (budget > 0 && choix != 6) {
        optionRestante(budget);

        // Affichage des conditions
        if (choix == 1) {
          if (budget >= 2000) {
            alert(
              "Bravo, vous venez d'ajouter l'option couleur à votre voiture, il vous reste maintenant" +
                " " +
                // Calcul du nouveau budget
                (budget -= couleur)
            );
            // Calcul du panier
            panier += couleur;
          } else {
            alert("Crédit insuffisant, choisissez une autre option svp");
          }
        } else if (choix == 2) {
          if (budget >= 2000) {
            alert(
              "Bravo, vous venez d'ajouter l'option musik à votre voiture, il vous reste maintenant" +
                " " +
                (budget -= musik)
            );
            panier += musik;
          } else {
            alert("Crédit insuffisant, choisissez une autre option svp");
          }
        } else if (choix == 3) {
          if (budget >= 1500) {
            alert(
              "Bravo, vous venez d'ajouter l'option moteur 120 chevaux à votre voiture, il vous reste maintenant" +
                " " +
                (budget -= m120)
            );
            panier += m120;
          } else {
            alert("Crédit insuffisant, choisissez une autre option svp");
          }
        } else if (choix == 4) {
          if (budget >= 3000) {
            alert(
              "Bravo, vous venez d'ajouter l'option moteur 140 chevaux à votre voiture, il vous reste maintenant" +
                " " +
                (budget -= m140)
            );
            panier += m140;
          } else {
            alert("Crédit insuffisant, choisissez une autre option svp");
          }
        } else if (choix == 5) {
          if (budget >= 4000) {
            alert(
              "Bravo, vous venez d'ajouter l'option moteur 200 chevaux à votre voiture, il vous reste maintenant" +
                " " +
                (budget -= m200)
            );
            panier += m200;
          } else {
            alert("Crédit insuffisant, choisissez une autre option svp");
          }
        } else if (choix == 7) {
          alert("Le montant de votre panier est :" + " " + panier);
        } else {
          if (choix == 6) {
            alert("Merci de votre visite");
            return;
          }
        }
      }
    }

    // Affichage des conditions si choix numero 2
  } else if (choix == 2) {
    if (budget < 15000) {
      alert("Fond insuffisants");
    } else if (budget > 15000) {
      alert(
        "Felicitations vous venez d'acquérir une berline votre budget et maintenant de" +
          " " +
          // Calcul du nouveau budget
          (budget -= berline)
      );
      // Calcul du panier
      panier = berline;

      // Boucle affichant les options restantes en fonction du choix et du budget
      while (budget > 0 && choix != 6) {
        optionRestante(budget);

        if (choix == 1) {
          if (budget >= 2000) {
            alert(
              "Bravo, vous venez d'ajouter l'option couleur à votre voiture, il vous reste maintenant" +
                " " +
                (budget -= couleur)
            );
            panier += couleur;
          } else {
            alert("Crédit insuffisant, choisissez une autre option svp");
          }
        } else if (choix == 2) {
          if (budget >= 2000) {
            alert(
              "Bravo, vous venez d'ajouter l'option musik à votre voiture, il vous reste maintenant" +
                " " +
                (budget -= musik)
            );
            panier += musik;
          } else {
            alert("Crédit insuffisant, choisissez une autre option svp");
          }
        } else if (choix == 3) {
          if (budget >= 1500) {
            alert(
              "Bravo, vous venez d'ajouter l'option moteur 120 chevaux à votre voiture, il vous reste maintenant" +
                " " +
                (budget -= m120)
            );
            panier += m120;
          } else {
            alert("Crédit insuffisant, choisissez une autre option svp");
          }
        } else if (choix == 4) {
          if (budget >= 3000) {
            alert(
              "Bravo, vous venez d'ajouter l'option moteur 140 chevaux à votre voiture, il vous reste maintenant" +
                " " +
                (budget -= m140)
            );
            panier += m140;
          } else {
            alert("Crédit insuffisant, choisissez une autre option svp");
          }
        } else if (choix == 5) {
          if (budget >= 4000) {
            alert(
              "Bravo, vous venez d'ajouter l'option moteur 200 chevaux à votre voiture, il vous reste maintenant" +
                " " +
                (budget -= m200)
            );
            panier += m200;
          } else {
            alert("Crédit insuffisant, choisissez une autre option svp");
          }
        } else if (choix == 7) {
          alert("Le montant de votre panier est :" + " " + panier);
        } else {
          if (choix == 6) {
            alert("Merci de votre visite");
            return;
          }
        }
      }
    }
  } else {
    if (choix == 3) {
      alert("Merci, au revoir !");
      return;
    }
  }
}
