<script lang="ts">
    import logo from "$lib/assets/RAWTalentLogo.svg";
    import { Calendar, Gamepad2, MapPin } from "@lucide/svelte";
    import CornerBox from "./CornerBox.svelte";
</script>

<section id="top">
    <div class="top-inner">
        <div class="location box rounded bg-more">
            <MapPin />
            HALL 10.2 • INDIE AREA • KOELNMESSE
        </div>
        <div class="logo">
            <CornerBox classes="bg-more center-center">
                <img src={logo} alt="RAW Talent" class="logo-img" />
            </CornerBox>
        </div>
        <div class="info">
            <CornerBox classes="bg">
                At the heart of gamescom 2025, RAW TALENT brings together 160
                students from 11 public universities across Germany and Austria
                to showcase nearly 50 unique indie games. For the first time,
                student projects take center stage in the buzzing Indie Area
                (Hall 10.2), offering visitors a firsthand look at the next
                generation of game developers.
            </CornerBox>
        </div>
        <div class="cards">
            <div class="card box bg">
                <div class="icon">
                    <Calendar />
                </div>
                <span class="title">Dates</span>
                <span class="content">Aug 21-25</span>
            </div>
            <div class="card box bg">
                <div class="icon">
                    <Gamepad2 />
                </div>
                <span class="title">Games</span>
                <span class="content">38 Titles</span>
            </div>
            <div class="card box bg">
                <span class="icon">
                    <MapPin />
                </span>
                <span class="title">Location</span>
                <span class="content">Gamescom, Cologne</span>
            </div>
        </div>

        <div class="coming-soon">More Info coming soon.</div>
    </div>
</section>

<style>
    #top {
        min-height: 100vh;
        display: grid;
        place-items: center;
        --max-width: calc(100vw - var(--spacing-12));
        padding: var(--spacing-6);
    }

    .top-inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: var(--max-width);
    }

    .location {
        margin-bottom: var(--spacing-6);
        font-size: 0.75rem;
        font-weight: 500;
        display: inline-block;
        padding: var(--spacing) var(--spacing-2);
    }
    .logo {
        margin-bottom: var(--spacing-12);
        width: var(--max-width);
    }
    .logo-img {
        width: 80vw;
        max-width: calc(var(--max-width) - var(--spacing-8));
    }

    .info {
        max-width: var(--max-width);
        font-size: 1rem;
        line-height: 1.625;
        margin-bottom: var(--spacing-8);
        text-align: center;
    }

    .cards {
        display: grid;
        /* grid-template-columns: 1fr 1fr 1fr; */
        width: 100%;
        gap: var(--spacing-6);
    }

    .card {
        display: grid;
        grid-template-areas: "icon title" "icon content";
        column-gap: var(--spacing-2);
        text-transform: uppercase;
        flex-grow: 1;
    }

    .icon {
        grid-area: icon;
        display: flex;
        justify-content: right;
        align-items: center;
        font-size: 2rem;
        color: var(--color-text-2);
    }
    .title {
        grid-area: title;
        color: var(--color-text-2);
    }
    .content {
        grid-area: content;
    }

    .coming-soon {
        margin-top: var(--spacing-12);
    }

    @media (width >= 40rem) {
        #top {
            --max-width: calc(40rem - 2 * var(--spacing-12));
            padding: var(--spacing-12);
        }
        .info {
            font-size: 1.125rem;
        }
    }
    @media (width >= 60rem) {
        #top {
            --max-width: calc(60rem - 2 * var(--spacing-12));
        }
        .info {
            font-size: 1.25rem;
        }
        .cards {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>
