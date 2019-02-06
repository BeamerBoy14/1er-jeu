class GoutteEau extends AcPhysic
{
    constructor( x, y, vx, vy )
    {
        // Appel du constructeur de la classe mère
        // Acceleration 0, 0.1 simulant la pesenteur
        super( "images/goutteeau.png", x, y, vx, vy, 0, 0.1 ) ;

        // L'image possède une taille 8x8 pixels
        this.width = 8 ;
        this.height = 8 ;
    }
}