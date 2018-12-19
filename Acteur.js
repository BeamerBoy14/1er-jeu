    class Acteur
    {
        constructor(fichierImage,x,y)
        {
            //création et initialisation des attributs x et y
            this.x = x;
            this.y = y;

            //Création et initialisation des attributs pour la largeur et la hauteur
            this.width = 32;
            this.height = 32;

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

        //Cette méthode renvoie true si l'acteur est en collision avec celui référencé par l'argument unActeur
        isCollisioningwith(unActeur)
        {
            //Cas ou unActeur est à gauche du bord de this
            if(unActeur.x + unActeur.width <= this.x) return false;
            //Cas ou unActeur est à droit du bord de this
            if(unActeur.x >= unActeur.width + this.x) return false;
            //Cas ou unActeur est au dessus du bord superieur de this
            if(unActeur.y + unActeur.height <= this.y) return false;
            //Cas ou unActeur est en dessous du bord inférieur de this
            if(unActeur.y >= unActeur.height + this.y) return false;
            //Le reste des cas ne sont que des collisons
            return true;
        }

        //cette methode est apellé par le timer tous les 10 ms pour permttre à un acteur de s'animer
        onTimer()
        {

        }

        //Cette méthode est apppelée à chaque frappe du clavier. L'argument keyCode contient la valeur ASCII de la touche enfoncée
        onKeyDown(keyCode)
        {
            
        }

        onRemove()
        {
            var terrain = document.getElementById("TerrainDeJeu");
            terrain.removeChild(this.img);
            this.img = null;
        }
    }