import { Database } from '$lib/data/db'
import { error } from '@sveltejs/kit';

const db = new Database();
const eventId = "gamescom-2026"; // TODO: maybe load this from db
export async function load() {
    console.log("load page");
    await db.ready();
    const event = await db.getEvent(eventId);
    if (!event) {
        error(404);
    }
    const games = await db.getAllGamesOfOneEvent(eventId);
    console.log(event, games);
    return { event, games };
}