class AcAnimated extends AcPhysic
{
    //fichierImages:tableau conteneant des noms de fichier d'image
    // x,y position de l'acteur
    //vx,vy: vitesse
    // ax,ay: acceleration
    //periode: temp entre chaque changementd'image exprimé
    //en nombre d'appel de la méthode onTimer()
    constructor(fichierImage, x,y,vx,vy,ax,ay,periode)
    {
        //appel de contructeur de la classe mère
        super(fichierImage[0],x,y,vx,vy,ax,ay);

        //cree un attribut pour stocker le tableau des noms d'images
        this.fichierImages = fichierImage;

        //Créer un attributpour stocker la periode.
        this.periode = periode;
    }

    onTimer()
    {
        //Appel de la méthode onTimer de la classe Acphysic
        //afin de récuperer le comportement issue de la classe mère.
        AcPhysic.prototype.onTimer.call(this);
    }
}