import { type Picture } from 'vite-imagetools';


export const games: Game[] = [{
    title: "Spooky Bodies",
    logo: "/static/assets/2025/games/spooky_bodies/logo.svg",
    image: "/static/assets/2025/games/spooky_bodies/feature.png?enhanced",
    link: "https://store.steampowered.com/app/3711220/Spooky_Bodies/",
    uni: "HSMW",
    team: "Hero Saplings",
}]


export interface Game {
    title: string,
    image: Picture | string,
    logo: Picture | string,
    link: string,
    team: string,
    uni: string,
}