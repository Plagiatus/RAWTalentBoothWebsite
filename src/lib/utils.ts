export function delay(ms: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

export function compareNumbers(a: number, b: number, epsilon: number): boolean {
    return Math.abs(a - b) < epsilon;
}

export function shuffle(array: Array<any>) {
    let currentIndex = array.length;

    while (currentIndex > 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}