import { Database } from '$lib/data/db.js'
import { error } from '@sveltejs/kit';

const db = new Database();
export async function load({ params }) {
    console.log("load page game");
    await db.ready();
    const game = await db.getGame(parseInt(params.gameId), params.eventId);
    if (!game) {
        error(404);
    }
    console.log(game);
    return { game };
}