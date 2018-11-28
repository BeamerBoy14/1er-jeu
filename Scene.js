class Scene
{
    constructor(fichierImage, x, y, vx=0, vy=0, ax=0, ay=0)
    {
        //on crée l'attribut lesActeurs initilisé avec la référence d'un tableau stockant les référence de tous les acteeurs présent 
        //dans la scène
        this.lesActeurs = new Array();
    }

    add(unActeur)
    {
        //ajout la référnece de l'acteur dans la scène
        this.lesActeurs.push(unActeur);
    }

    //La méthode onTimer simule le mouvement d'un point à partir des lois de la mécanique classique du point
    onTimer()
    {
        //Parcours le tableau lesActeurs et appele pour chacun sa méthode onTimer
        for(var i=0; i<this.lesActeurs.length; i++)
        {
            this.lesActeurs[i].onTimer();
        }
    }
}