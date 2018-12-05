class Bonhomme extends AcAnimated
{
    constructor(x,y)
    {
        super([
        "images/bonhommedroite1.png",
        "images/bonhommedroite2.png",
        "images/bonhommedroite3.png",
        "images/bonhommegauche1.png",
        "images/bonhommegauche2.png",
        "images/bonhommegauche3.png"],
        x,y,0, 0, 0, 0, 20000000000000000)

        this.setRange(0,2);
    }
}