    class Acteur
    {
        constructor(fichierImage,x,y)
        {
            //création et initialisation des attributs x et y
            this.x = x;
            this.y = y;

            //création d'un objet de type HtmlElementImage
            this.img = document.createElement("IMG");

            // spécifie le fichier à utiliser
            this.img.src = fichierImage;

            //rend l'image déplacable et on la positionne sur l'écran
            this.img.style.position = "absolute";
            this.img.style.left = this.x;
            this.img.style.top = this.y;

            //insère l'images dans le terrain de jeu
            var terrain = document.getElementById("TerrainDeJeu");
            terrain.appendChild(this.img);
        }

        moveTo(x,y)
        {
            //met a jour les attribut x et y
            this.x = x;
            this.y = y;

            //On repositionne l'image
            this.img.style.left = x;
            this.img.style.top = y;
        }
        //cette methode est apellé par le timer tous les 10 ms pour permttre à un acteur de s'animer
        onTimer()
        {

        }
    }