class Bonhomme extends AcAnimated
{
    constructor( x, y )
    {
        // Appel du constructeur de la classe mère
        super( [
        "images/bonhommedroite1.png",
        "images/bonhommedroite2.png",
        "images/bonhommedroite3.png",
        "images/bonhommegauche1.png",
        "images/bonhommegauche2.png",
        "images/bonhommegauche3.png"], 
        x, y, 0, 0, 0, 0.1, 2000000000 ) ;

        this.setRange( 0, 2 ) ;

        this.tempsDeVie = 1000 ;
    }

    onKeyDown( uneScene, keyCode )
    {
        if( keyCode == 37 ) // Flêche gauche
        {
            this.vx = -1 ;
            this.setRange( 3, 5 ) ;
            this.periode = 20 ;
        }
        else if( keyCode == 39 ) // Flêche droite
        {
            this.vx = 1 ;
            this.setRange( 0, 2 ) ;
            this.periode = 20 ;
        }
        else if( keyCode == 32 ) // Espace
        {
            this.vx = 0 ;
            this.setRange( 0, 2 ) ;
            this.periode = 200000000 ;
        }
        else if( keyCode == 38 ) // Flêche haute
        {
            this.vy = -5 ;
        }
    }
}