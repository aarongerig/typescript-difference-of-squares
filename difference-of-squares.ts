class Squares {
    constructor(private readonly amount: number) {}

    get squareOfSum(): number {
        let sum = 0;

        for (let i = 1; i <= this.amount; i++) {
            sum += i;
        }

        return sum * sum;
    }

    get sumOfSquares(): number {
        let sum = 0;

        for (let i = 1; i <= this.amount; i++) {
            sum += i * i;
        }

        return sum;
    }

    get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }
}

export default Squares;
