class Scene
{
    constructor( x, y, width, height )
    {
        // On cree l'attribut lesActeurs initialisé avec la 
        // référence d'un tableau stockant les références de tous 
        // les acteurs présents dans la scène.
        this.lesActeurs = new Array() ;

        // On cree un tableau pour stocker une liste de gestionnaire 
        // de collision.
        this.lesCollisionManagers = new Array() ;

        this.x = x ;
        this.y = y ;
        this.width = width ;
        this.height = height ;
    }

    addCollisionManager( unCollisionManager )
    {
        this.lesCollisionManagers.push({collisionManager: unCollisionManager, stop: stop });
        // this.lesCollisionManagers.push( unCollisionManager ) ;
    }
    /*
    whoCanManageCollision( acteurMobile, acteurCible, collisionType )
    {
        for( let i=0 ; i<this.lesCollisionManagers.length; i++ )
        {
            if( this.lesCollisionManagers[i].canManageCollision( acteurMobile, acteurCible, collisionType ) )
                return this.lesCollisionManagers[i] ;
        }

        return null ;
    }
    */

    manageCollision( acteurMobile, acteurCible, collisionType )
    {
        for( let i=0 ; i<this.lesCollisionManagers.length; i++ )
        {
            let cm = this.lesCollisionManagers[i] ;

            if( cm.collisionManager.canManageCollision( acteurMobile, acteurCible, collisionType ) )
            {
                switch( collisionType )
                {
                    case CollisionManager.ByLeft:
                        cm.collisionManager.manageCollisionByLeft( this, acteurMobile, acteurCible ) ;
                        break;
                    case CollisionManager.ByRight:
                        cm.collisionManager.manageCollisionByRight( this, acteurMobile, acteurCible ) ;
                        break;
                    case CollisionManager.ByTop:
                        cm.collisionManager.manageCollisionByTop( this, acteurMobile, acteurCible ) ;
                        break;
                    case CollisionManager.ByBottom:
                        cm.collisionManager.manageCollisionByBottom( this, acteurMobile, acteurCible ) ;
                        break;
                }
                if( cm.stop ) return ;
            }
        }
    }

    add( unActeur )
    {
        // Réutilisation des cases vides.
        // On cherche la première case vide du tableau et on lui affecte
        // la référence du nouvel acteur.
        for( var i=0; i<this.lesActeurs.length; i++ )
        {
            if( !this.lesActeurs[i] )
            {
                this.lesActeurs[i] = unActeur ;
                return ;
            }
        }
        
        // Ajoute la référence de l'acteur dans la scene
        this.lesActeurs.push( unActeur ) ;
    }

    remove( unActeur )
    {
        // Demande à l'acteur de libérer ses ressources
        unActeur.onRemove() ;

        // Recherche du n° de la case du tableau lesActeurs qui contient
        // la référence de l'acteur à supprimer
        var i = this.lesActeurs.indexOf( unActeur ) ;
        this.lesActeurs[i] = null ;
    }

    whoIsCollisioningWith( unActeur )
    {
        var collisions = [] ;

        for( var i=0; i<this.lesActeurs.length; i++ )
        {
            if( this.lesActeurs[i] && this.lesActeurs[i] != unActeur )
            {
                if( unActeur.isCollisioningWith( this.lesActeurs[i]) )
                {
                    collisions.push( this.lesActeurs[i] ) ;
                }
            }
        }
        return collisions ;
    }

    // La méthode onTimer simule le mouvement d'un point
    // à partir des lois de la mécanique classique du point
    onTimer()
    {
        // Parcours le tableau lesActeurs et appele pour
        // chacun sa méthode onTimer
        for( var i=0; i<this.lesActeurs.length; i++ )
        {
            if( this.lesActeurs[i] ) // <=> this.lesActeurs[i] != null
                this.lesActeurs[i].onTimer( this ) ;
        }
    }

    // La méthode onKeyDown est appelée à chaque frappe du clavier
    // et propage l'événement à tous les acteurs de la scène.
    onKeyDown( keyCode )
    {
        // Parcours le tableau lesActeurs et appele pour
        // chacun sa méthode onKeyDown
        for( var i=0; i<this.lesActeurs.length; i++ )
        {
            if( this.lesActeurs[i] ) // <=> this.lesActeurs[i] != null
                this.lesActeurs[i].onKeyDown( this, keyCode ) ;
        }
    }

}