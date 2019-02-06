class CollisionManager
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
        this.classeActeurMobile = classeActeurMobile ;
        this.classeActeurCible = classeActeurCible ;
        this.collisionTypes = collisionTypes ;
    }

    /**
     * 
     * @param {*} acteurMobile: Référence de l'acteur mobile
     * @param {*} acteurCible : Référence de l'acteur cible
     * @param {*} collisionType: Type de collision (par le haut, par le bas, 
     * @description Cette méthode renvoie true si le gestionnaire de
     * collison est capable de gérer la collision entre l'acteur mobile
     * et l'acteur cible donnés en argument et selon la direction donnée
     * dans l'argument collisionTypes
     */
    canManageCollision( acteurMobile, acteurCible, collisionType ) 
    {
        if( acteurMobile instanceof this.classeActeurMobile
            && acteurCible instanceof this.classeActeurCible
            && ( collisionType & this.collisionTypes) )
            return true ;
        return false ;
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

    }
}

/**
 * Attributs de classe définissant les types de collision de l'acteur
 * mobile sur l'acteur cible, respectivement par la gauche,
 * par le haut, par la droite et par le bas
 */
CollisionManager.ByLeft = 0x01 ;
CollisionManager.ByTop = 0x02 ;
CollisionManager.ByRight = 0x04 ;
CollisionManager.ByBottom = 0x08 ;