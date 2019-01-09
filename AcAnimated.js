

class AcAnimated extends AcPhysic
{
    // fichierImages: tableau contenant des noms de fichier d'image
    // x,y: Position de l'acteur
    // vx, vy: Vitesse
    // ax, ay: Accelération
    // periode: Temps entre chaque changement d'image exprimé
    // en nombre d'appel de la méthode onTimer()
    constructor( fichierImages, x, y, vx, vy, ax, ay, periode )
    {
        // Appel du constructeur de la classe mère
        super( fichierImages[0], x, y, vx, vy, ax, ay ) ;

        // Cree un attribut pour stocker le tableau des noms d'image
        this.fichierImages = fichierImages ;

        // Cree un attribut pour stocker la periode
        this.periode = periode ;

        // Cree et initialise un attribut contenant l'indice de l'image
        // courante
        this.currentIndex = 0 ;

        // Cree et initialise un attribut pour compter le nombre
        // d'exécution de la méthode onTimer
        this.nbExecutionDeOnTimer = 0 ;

        // Cree les attributs permettant de borner les index des images
        // utilisées.
        this.startIndex = 0 ;
        this.endIndex = this.fichierImages.length-1 ;
    }

    onTimer( uneScene )
    {
        // Appel de la méthode onTimer de la classe AcPhysic
        // afin de récupérer le comportement issue de la classe mère.
        AcPhysic.prototype.onTimer.call( this, uneScene ) ;

        // Traitement d'animation

        if( this.nbExecutionDeOnTimer >= this.periode )
        {
            // Remise à 0 du compteur
            this.nbExecutionDeOnTimer = 0 ;

            // Copie du nom de fichier d'image courrant dans
            // la propriété src de l'image.
            this.img.src = this.fichierImages[this.currentIndex] ;

            // Incremente l'index courrant d'image pour passer à l'image
            // suivante.
            this.currentIndex++ ;

            // Remise a 0 de l'index courrant d'image quand on arrive
            // après la derniere case du tableau
            if( this.currentIndex > this.endIndex )
                this.currentIndex = this.startIndex ;
        }

        // Comptage du nombre d'exécution
        this.nbExecutionDeOnTimer++ ;
    }

    setRange( startIndex, endIndex )
    {
        // Mise à jour des attributs
        this.startIndex = startIndex ;
        this.endIndex = endIndex ;

        // Mise a de currentIndex pour démarrer avec la bonne image
        this.currentIndex = this.startIndex ;
    }

        // Cette méthode est appellée à la suppression de l'acteur
    // et elle se charge de libérer toutes les ressouces utilisées par ce dernier.
    onRemove()
    {
        // Supprime l'image courante
        Acteur.prototype.onRemove.call( this ) ;

        // Supprime le tableau contenant les nom de fichier
        // d'image.
        this.fichierImages = null ;
    }
}