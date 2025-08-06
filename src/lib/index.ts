// place files you want to import through the `$lib` alias in this folder.

export function shuffle(array: Array<any>) {
    let currentIndex = array.length;

    while (currentIndex > 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}