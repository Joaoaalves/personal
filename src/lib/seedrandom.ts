export default class RNG {
    private m: number;
    private a: number;
    private c: number;
    private state: number;

    constructor(seed?: number) {
        this.m = 0x80000000;
        this.a = 1103515245;
        this.c = 999999000001;

        this.state = seed ?? Math.floor(Math.random() * (this.m - 1));
    }

    nextInt(): number {
        this.state = (this.a * this.state + this.c) % this.m;
        return this.state;
    }

    nextFloat(): number {
        return this.nextInt() / (this.m - 1);
    }
}
