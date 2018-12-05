class AcAnimated extends AcPhysic
{
    //fichierImages:tableau conteneant des noms de fichier d'image
    // x,y position de l'acteur
    // vx,vy: vitesse
    // ax,ay: acceleration
    //periode: temp entre chaque changementd'image exprimé
    //en nombre d'appel de la méthode onTimer()
    constructor(fichierImages, x,y,vx,vy,ax,ay,periode)
    {
        //appel de contructeur de la classe mère
        super(fichierImages[0],x,y,vx,vy,ax,ay);

        //cree un attribut pour stocker le tableau des noms d'images
        this.fichierImages = fichierImages;

        //Créer un attributpour stocker la periode.
        this.periode = periode;

        // Crée et initialise un attribut contenant l'indice de l'image courante.
        this.currentIndex = 0;

        //Crée et initialise un attribut pour comptet le nombre d'exécution de la méthode onTimer.
        this.nbExecutionDeOnTimer = 0;

        //Crée les attributs permettant de borner les indexdes images utilisées.
        this.startIndex = 0;
        this.endIndex = this.fichierImages.length - 1;
    }

    setRange(startIndex, endIndex)
    {
        //Mise à jour des attributs.
        this.startIndex = startIndex;
        this.endIndex = endIndex;

        //mise à jour des currentIndexpour démarrer avec la bonne image.
        this.currentIndex = this.startIndex;
    }

    onTimer()
    {
        //Appel de la méthode onTimer de la classe Acphysic
        //afin de récuperer le comportement issue de la classe mère.
        AcPhysic.prototype.onTimer.call(this);

        //Traitemeant d'animations.
        if(this.nbExecutionDeOnTimer >= this.periode)
        {
            this.nbExecutionDeOnTimer = 0;

            //Copie du nom de fichier d'image courrant dnas la propriété src de l'image.
            this.img.src = this.fichierImages[this.currentIndex];

            //Incrémente l'index courrant d'image pour passer a l'image suivante.
            this.currentIndex++;

            //Remise a 0 de l'index courrant d'image quand on arrive après la dernieère case du tableau.
            if(this.currentIndex > this.endIndex)
            {
                this.currentIndex = this.startIndex;
            }

        }

        //Comptage du nombre d'exécution.
        this.nbExecutionDeOnTimer++;
    }
}