

class Balle extends AcPhysic
{
    constructor( x, y, vx, vy )
    {
        // Appel du constructeur de la classe mère
        // Acceleration 0, 0.1 simulant la pesenteur
        super( "images/balleRouge.png", x, y, vx, vy, 0, 0.1 ) ;
    }
}