
import { redirect } from '@sveltejs/kit';
import type { EntryGenerator } from './$types.js';
import { Database } from '$lib/data/db.js';

export async function load({ params }) {
    redirect(308, `/${params.eventId}`)
}
export const entries: EntryGenerator = async () => {
    const db = new Database()
    await db.ready()
    const events = await db.getAllEvents();

    return events.map((event) => { return { eventId: event.id } })
}
export const prerender = true;