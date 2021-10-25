
export class Preke {
    public kiekis: number = 0;
    constructor(
        public pavadinimas: string,
        public kaina: number,
        public img?: string
    ) { }
    public uzsakyti() {
        this.kiekis++;
    }
    public atsaukti() {
        this.kiekis--;
    }
    public krepselyje(): boolean {
        if (this.kiekis > 0) {
            return true;
        } else {
            return false;

        }
    }
}