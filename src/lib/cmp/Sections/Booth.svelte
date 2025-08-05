<script>
    import { MapPin } from "@lucide/svelte";
    import CornerBox from "../CornerBox.svelte";
    import location from "$lib/assets/gamescom_location.jpg";

</script>
<section id="booth">
    <div class="spacer top"></div>
    <div class="center-center">
        <CornerBox classes="center-center bg-most">
            <div class="booth-info">
                <MapPin /> <span>HALL 10.2 • BOOTH D42-D44 • INDIE AREA</span>
            </div>
        </CornerBox>
    </div>
    <div class="booth-location center-center box">
        <img src={location} alt="" />
    </div>
    <div class="spacer bottom"></div>
</section>

<style>
    #booth {
        background-image: url("/assets/booth_preview.png");
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
        margin-top: var(--spacing-12);
        min-height: 100vh;
    }

    .spacer.top {
        height: 50vh;
        background-image: linear-gradient(
            to bottom,
            var(--color-blueprint-base) 0,
            transparent 10vh
            );
        }
    .spacer.bottom {
        height: 15vh;
        background-image: linear-gradient(
            to top,
            var(--color-blueprint-base) 0,
            transparent 10vh
        );
    }

    .booth-info {
        font-size: 2rem;
    }

    .booth-location {
        padding: var(--spacing-2);
        margin: var(--spacing-2);
        margin-top: var(--spacing-12);
    }

    @media screen and (width < 800px){
        .booth-info {
            font-size: 1.5rem;
        }
    }
    @media screen and (width < 620px){
        .booth-info {
            font-size: 1rem;
        }
    }
</style>
