import type { GameEngine } from "$lib/data/hardcoded"

type RTGame = {
    event: string,
    id: number,
    name: string,
    teamName: string,
    teamMembers: string,
    shortDescription: string,
    tags: string[],
    trailer: string,
    links: string[],
    gameEngine: GameEngine | string,
    university: string,
    aiUsed?: boolean,
    ageRating: string,
    images: {
        cover: string,
        capsule: string,
        additional: string[],
    },
}

// TODO: add more infos to the event, like universities, games, images, etc.
type RTEvent = {
    id: string,
    name: string,
    year: number,
}

type University = {
    id: string,
    name: string,
    img: string,
    url: string,
}

type Sponsor = {
    id: string,
    name: string,
    img: string,
    url: string,
}

type VIP = {
    name: string,
    position: string,
    status: boolean,
    atRawtalent: number,
    img: string,
}