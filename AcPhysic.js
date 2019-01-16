class AcPhysic extends Acteur
{
    constructor( fichierImage, x, y, vx=0, vy=0, ax=0, ay=0 )
    {
        // Appel du constructeur de la classe mère
        super( fichierImage, x, y ) ;

        // Cree et initialise les attributs vx, vy, ax, ay
        this.vx = vx ;
        this.vy = vy ;
        this.ax = ax ;
        this.ay = ay ;
    }

    // La méthode onTimer simule le mouvement d'un point
    // à partir des lois de la mécanique classique du point
    onTimer( uneScene )
    {
        // Test de collision sur un déplacement horizontal
        this.x += this.vx ;
        var collisions = uneScene.whoIsCollisioningWith( this ) ;
        this.x -= this.vx ;

        // Traiter la ou les collisions éventuelles
        if( collisions.length > 0 )
        {
            this.vx = 0 ;
        }

        // Test de collision sur un déplacement vertical
        this.y += this.vy ;
        collisions = uneScene.whoIsCollisioningWith( this ) ;
        this.y -= this.vy ;

        // Traiter la ou les collisions éventuelles
        if( collisions.length > 0 )
        {
            if( this instanceof Bonhomme )
            { 
                if( collisions[0] instanceof Sol )
                {
                    this.vy = 0 ;
                }
                if( collisions[0] instanceof Mur )
                {
                    this.vy = 0 ;
                }
            }

            if( this instanceof Bombe )
            {
                if( collisions[0] instanceof Sol )
                {
                    collisions.forEach( (cible)=>
                    {
                        uneScene.remove( cible ) ;
                    }) ;

                    uneScene.remove( this ) ;
                }
                if( collisions[0] instanceof Mur )
                {
                    for( let i=0 ; i<collisions.length; i++ )
                    {
                        uneScene.remove( collisions[i] ) ;
                    }
                    uneScene.remove( this ) ;
                }
            }

        }
        
        // On incremente la position à partir de la vitesse
        this.moveTo( uneScene, this.x + this.vx, this.y + this.vy ) ;

        // On incremente la vitesse à partir de l'accélération
        this.vx += this.ax ;
        this.vy += this.ay ;
    }
}