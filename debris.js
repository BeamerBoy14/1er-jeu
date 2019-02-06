class Debris extends AcAnimated
{
    constructor( x, y, vx, vy )
    {
        // Appel du constructeur de la classe mère
        super( [
        "images/debris1.png",
        "images/debris2.png",
        "images/debris3.png",
        "images/debris4.png"],
        x, y, vx, vy, 0, 0.1, 10 ) ;

        // La taille de l'image d'un débris est de 11x11 pixels
        this.width = 11 ;
        this.height = 11 ;

        // Duree de vie du debris
        this.tempsDeVie = 100 ;
    }

    decrementTempsDeVie( uneScene )
    {
        // Decremente le temps de vie
        this.tempsDeVie-- ;

        // Quand le temps de vie tombe a 0
        // Le débris est supprimé
        if( !this.tempsDeVie ) uneScene.remove( this ) ;
    }
}