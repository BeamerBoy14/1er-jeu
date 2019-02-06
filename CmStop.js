class CmStop extends CollisionManager
{
    /**
     * 
     * @constructor
     * @param {*} classeActeurMobile: Classe de l'acteur mobile
     * @param {*} classeActeurCible: Classe de l'acteur cible
     * @param {*} collisionTypes: Types de collision (par le haut, par le bas, 
     * par la gauche, par la droite ) gérés par le gestionnaire de 
     * collision
     */
    constructor( classeActeurMobile, classeActeurCible, collisionTypes )
    {
        super( classeActeurMobile, classeActeurCible, collisionTypes ) ;
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
        // On arrête l'acteur mobile dans son déplacement
        acteurMobile.vx = 0 ;
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
        // On arrête l'acteur mobile dans son déplacement
        acteurMobile.vx = 0 ;
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
        // On arrête l'acteur mobile dans son déplacement
        acteurMobile.vy = 0 ;
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
        // On arrête l'acteur mobile dans son déplacement
        acteurMobile.vy = 0 ;
    }
}

/**
 * Attributs de classe définissant les types de collision de l'acteur
 * mobile sur l'acteur cible, respectivement par la gauche,
 * par le haut, par la droite et par le bas
 */
CollisionManager.prototype.ByLeft = 0x01 ;
CollisionManager.prototype.ByTop = 0x02 ;
CollisionManager.prototype.ByRight = 0x04 ;
CollisionManager.prototype.ByBottom = 0x08 ;