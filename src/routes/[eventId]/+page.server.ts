import { Database } from '$lib/data/db.js'
import { error } from '@sveltejs/kit';

const db = new Database();
export async function load({ params }) {
    console.log("load page");
    await db.ready();
    const event = await db.getEvent(params.eventId);
    if (!event) {
        error(404);
    }
    const games = await db.getAllGamesOfOneEvent(params.eventId);
    return { event, games };
}