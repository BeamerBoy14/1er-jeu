class Acteur
{

    constructor( fichierImage, x, y )
    {               
        // Creation et initialisation des attributs x et y
        this.x = x ;
        this.y = y ;

        // Creation et initialisation des attributs pour
        // la largeur et la hauteur
        this.width = 32 ;
        this.height = 32 ;

        // Creation d'un objet de type HtmlElementImage
        this.img = document.createElement( "IMG" ) ;

        // Specifie le fichier à utiliser
        this.img.src = fichierImage ;

        // Rend l'image déplaçable et on la position 
        // sur l'écran
        this.img.style.position = "absolute" ;
        this.img.style.left = this.x ;
        this.img.style.top = this.y ;

        // Insere l'image dans le terrain de jeu
        var terrain = document.getElementById( "TerrainDeJeu" ) ;
        terrain.appendChild( this.img ) ;
    }

    // Cette méthode est appellée à la suppression de l'acteur
    // et elle se charge de libérer toutes les ressouces utilisées par ce dernier.
    onRemove()
    {
        // Supprime l'image du terrain de jeu
        var terrain = document.getElementById( "TerrainDeJeu" ) ;
        terrain.removeChild( this.img ) ;

        // Supprimer l'image en la déréférençant de manière
        // quelle soit suprimmée par le carbage collector.
        this.img = null ;
    }

    moveTo( uneScene, x, y )
    {
        // Met à jour les attributs x et y
        this.x = x ;
        this.y = y ;

        // On repositionne l'image
        if( this.img )
        {
            this.img.style.left = x ;
            this.img.style.top = y ;
        }

        // Test de sortie de l'acteur de la scène
        var aSupprimer = false ;

        // L'acteur tombe en dessous de la scène
        if( this.y > uneScene.y + uneScene.height ) aSupprimer = true ;

        // L'acteur vole au dessus de la scène
        if( this.y + this.height < uneScene.y ) aSupprimer = true ;

        // L'acteur est à gauche de la scène
        if( this.x + this.width < uneScene.x ) aSupprimer = true ;

        // L'acteur est à droite de la scène
        if( this.x > uneScene.x + uneScene.width ) aSupprimer = true ;

        if( aSupprimer ) uneScene.remove( this ) ;
    }

    // Cette méthode renvoie true si l'acteur est en collision avec
    // celui référencé par l'argument unActeur
    isCollisioningWith( unActeur )
    {
        // Cas où unActeur est à gauche du bord gauche de this
        if( unActeur.x + unActeur.width <= this.x ) return false ;

        // Cas où unActeur est à droite du bord droite de this
        if( unActeur.x >= this.x + this.width ) return false ;

        // Cas où unActeur est au dessus du bord supérieur de this
        if( unActeur.y + unActeur.height <= this.y ) return false ;

        // Cas où unActeur est en dessous du bord inférieur de this
        if( unActeur.y >= this.y + this.height ) return false ;

        // Le reste des cas ne sont que des collisions
        return true ;
    }

    // Cette méthode est appelée par le timer tous les
    // 10 ms pour permettre à un acteur de s'animer.
    onTimer( uneScene)
    {
    }

    // Cette méthode est appelée à chaque frappe du clavier.
    // L'argument keyCode contient la valeur ASCII de la touche 
    // enfoncée.
    onKeyDown( uneScene, keyCode )
    {
    }
}  