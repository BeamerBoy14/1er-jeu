class CmExplosion extends CollisionManager
{
    /**
     * 
     * @constructor
     * @param {*} classeActeurMobile: Classe de l'acteur mobile
     * @param {*} classeActeurCible: Classe de l'acteur cible
     * @param {int} collisionTypes: Types de collision (par le haut, par le bas, 
     * par la gauche, par la droite ) gérés par le gestionnaire de 
     * collision
     * @param {boolean} removeActeurCible: Précise si l'acteur cible doit être supprimé
     * @param {int} nbDebris: Précise le nombre de débris à créer
     * @param {float} vxMin: Vitesse horizontale minimale d'un débris
     * @param {float} vxMax: Vitesse horizontale maximale d'un débris
     * @param {float} vyMin: Vitesse verticale minimale d'un débris
     * @param {float} vyMax: Vitesse verticale maximale d'un débris
     * @param {function(x,y,vx,vy)} fctFabriqueDeDebris: Référence
     * d'une fonction de fabrique qui créer et renvoie la référence
     * d'un débri
     */
    constructor( classeActeurMobile, classeActeurCible, 
        collisionTypes, removeActeurCible=true, 
        nbDebris=0, vxMin=0, vxMax=0, vyMin=0, vyMax=0,
        fctFabriqueDeDebris=null )
    {
        super( classeActeurMobile, classeActeurCible, collisionTypes ) ;

        // Crée et met à jour l'attribut removeActeurCible
        this.removeActeurCible = removeActeurCible ;

        this.nbDebris = nbDebris ;
        this.vxMin = vxMin ;
        this.vxMax = vxMax ;
        this.vyMin = vyMin ;
        this.vyMax = vyMax ;
        this.fctFabriqueDeDebris = fctFabriqueDeDebris ;
        
        // Enregistre la référence de l'acteur mobile en collision
        // afin de distinguer les multiples appels de la même méthode
        // de traitement de collision associés à chaque cible.
        this.currentActeurMobile = null ;
    }

    /**
     * 
     * @param {Scene} uneScene: Référence de la scène
     * @param {int} x: Position initiale des débris
     * @param {int} y : Position initiale des débris
     * @description Cette méthode génère une explosion de débris 
     * dans le cas où une fabrique est renseignée
     */
    genereExplosionDeDebris( uneScene, x, y )
    {
        if( this.fctFabriqueDeDebris )
        {
            for( let i=0 ; i<this.nbDebris; i++ )
            {
                // Crée la vitesse aléatoire 
                let vx = Math.random() * (this.vxMax - this.vxMin) + this.vxMin ;
                let vy = Math.random() * (this.vyMax - this.vyMin) + this.vyMin ;

                // Crée un débri
                let d = this.fctFabriqueDeDebris( x, y, vx, vy ) ;

                // Ajoute le débris dans la scène
                uneScene.add( d ) ;
            }
        }
    }

    /**
     * 
     * @param {*} uneScene: Référence de la scène
     * @param {*} acteurMobile: Référence de l'acteur mobile
     * @param {*} acteurCible : Référence de l'acteur cible
     * @description Cette méthode gére une collision de l'acteur mobile
     * entrant par la gauche dans l'acteur cible
     */
    manageCollisionByLeft( uneScene, acteurMobile, acteurCible ) 
    {
        // Detecte le premier passage
        if( this.currentActeurMobile != acteurMobile )
        {
            // Premier passage
            // On supprime l'acteur mobile
            uneScene.remove( acteurMobile ) ;

            // Génère l'explosion à gauche de l'acteur
            this.genereExplosionDeDebris( uneScene, acteurMobile.x, acteurMobile.y ) ;

            this.currentActeurMobile = acteurMobile ;
        }

        // Suppression de l'acteur cible
        if( this.removeActeurCible ) uneScene.remove( acteurCible ) ;
    }

    /**
     * 
     * @param {*} uneScene: Référence de la scène
     * @param {*} acteurMobile: Référence de l'acteur mobile
     * @param {*} acteurCible : Référence de l'acteur cible
     * @description Cette méthode gére une collision de l'acteur mobile
     * entrant par la droite dans l'acteur cible
     */
    manageCollisionByRight( uneScene, acteurMobile, acteurCible ) 
    {
        // Detecte le premier passage
        if( this.currentActeurMobile != acteurMobile )
        {
            // Premier passage
            // On supprime l'acteur mobile
            uneScene.remove( acteurMobile ) ;

            // Génère l'explosion à droite de l'acteur mobile
            this.genereExplosionDeDebris( uneScene, 
                acteurMobile.x + acteurMobile.width, acteurMobile.y ) ;

            this.currentActeurMobile = acteurMobile ;
        }
        // Suppression de l'acteur cible
        if( this.removeActeurCible ) uneScene.remove( acteurCible ) ;
    }

    /**
     * 
     * @param {*} uneScene: Référence de la scène
     * @param {*} acteurMobile: Référence de l'acteur mobile
     * @param {*} acteurCible : Référence de l'acteur cible
     * @description Cette méthode gére une collision de l'acteur mobile
     * entrant par le haut dans l'acteur cible
     */
    manageCollisionByTop( uneScene, acteurMobile, acteurCible ) 
    {
        // Detecte le premier passage
        if( this.currentActeurMobile != acteurMobile )
        {
            // Premier passage
            // On supprime l'acteur mobile
            uneScene.remove( acteurMobile ) ;

            // Génère l'explosion en haut de l'acteur mobile
            this.genereExplosionDeDebris( uneScene, 
                acteurMobile.x, acteurMobile.y ) ;

            this.currentActeurMobile = acteurMobile ;
        }

        // Suppression de l'acteur cible
        if( this.removeActeurCible ) uneScene.remove( acteurCible ) ;
    }

    /**
     * 
     * @param {*} uneScene: Référence de la scène
     * @param {*} acteurMobile: Référence de l'acteur mobile
     * @param {*} acteurCible : Référence de l'acteur cible
     * @description Cette méthode gére une collision de l'acteur mobile
     * entrant par le bas dans l'acteur cible
     */
    manageCollisionByBottom( uneScene, acteurMobile, acteurCible ) 
    {
        // Detecte le premier passage
        if( this.currentActeurMobile != acteurMobile )
        {
            // Premier passage
            // On supprime l'acteur mobile
            uneScene.remove( acteurMobile ) ;

            // Génère l'explosion en bas de l'acteur mobile
            this.genereExplosionDeDebris( uneScene, 
                acteurMobile.x, acteurMobile.y + acteurMobile.height ) ;

            this.currentActeurMobile = acteurMobile ;
        }

        // Suppression de l'acteur cible
        if( this.removeActeurCible ) uneScene.remove( acteurCible ) ;
    }
}