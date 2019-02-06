

class CmExplosion extends CollisionManager
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
        // on supprime l'acteur mobile dans son déplacement
        uneScene.remove(acteurMobile);
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
        // on supprime l'acteur mobile dans son déplacement
        uneScene.remove(acteurMobile);
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
        // on supprime l'acteur mobile dans son déplacement
        uneScene.remove(acteurMobile);
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
        // on supprime l'acteur mobile dans son déplacement
        uneScene.remove(acteurMobile);
    }
}