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
        var cibles = uneScene.whoIsCollisioningWith( this ) ;
        this.x -= this.vx ;

        // Traiter la ou les collisions éventuelles
        if( cibles.length > 0 )
        {
            cibles.forEach( (cible)=>
            {
                if( cible.x > this.x )
                {

                    uneScene.manageCollision(this, cible, CollisionManager.ByLeft);

                    // Collision par la gauche, on cherche le premier 
                    // gestionnaire de collision capable de traiter la 
                    // collision entre l'acteur mobile this et l'acteur
                    // cible par la gauche.
                    /*
                    let cm = uneScene.whoCanManageCollision( this, cible,
                        CollisionManager.ByLeft ) ;
                    */
                    // On demande au gestionnaire de collision de gérer la
                    // collision par la gauche entre l'acteur mobile et la
                    // cible
                    /*
                    if( cm ) cm.manageCollisionByLeft( uneScene, this, cible ) ;
                    */
                }
                else
                {
                    
                    uneScene.manageCollision(this, cible, CollisionManager.ByRight);
                    // Collision par la droite
                    /*
                    let cm = uneScene.whoCanManageCollision( this, cible,
                        CollisionManager.ByRight ) ;

                    if( cm ) cm.manageCollisionByRight( uneScene, this, cible ) ;
                    */
                }
            }) ;
        }

        // Test de collision sur un déplacement vertical
        this.y += this.vy ;
        cibles = uneScene.whoIsCollisioningWith( this ) ;
        this.y -= this.vy ;

        // Traiter la ou les collisions éventuelles
        if( cibles.length > 0 )
        {
            cibles.forEach( (cible)=>
            {
                if( cible.y > this.y )
                {
                    uneScene.manageCollision(this, cible, CollisionManager.ByTop);
                    // Collision par le haut, on cherche le premier 
                    // gestionnaire de collision capable de traiter la 
                    // collision entre l'acteur mobile this et l'acteur
                    // cible par le haut.
                    /*
                    let cm = uneScene.whoCanManageCollision( this, cible,
                        CollisionManager.ByTop ) ;*/

                    // On demande au gestionnaire de collision de gérer la
                    // collision par le haut entre l'acteur mobile et la
                    // cible
                    // if( cm ) cm.manageCollisionByTop( uneScene, this, cible ) ;
                }
                else
                {
                    uneScene.manageCollision( this, cible, CollisionManager.ByBottom );

                    // Collision par le bas
                    /*let cm = uneScene.whoCanManageCollision( this, cible,
                        CollisionManager.ByBottom ) ;

                    if( cm ) cm.manageCollisionByBottom( uneScene, this, cible ) ;*/
                }
            }) ;
        }
        
        // On incremente la position à partir de la vitesse
        this.moveTo( uneScene, this.x + this.vx, this.y + this.vy ) ;

        // On incremente la vitesse à partir de l'accélération
        this.vx += this.ax ;
        this.vy += this.ay ;
    }
}