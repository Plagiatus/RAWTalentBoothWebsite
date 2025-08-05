<script lang="ts">
    import {
        LightboxGallery,
        GalleryImage,
        GalleryThumbnail,
        Lightbox,
    } from "svelte-lightbox";
    import gallery1 from "$lib/assets/2024/pictures/01.jpg";
    import gallery2 from "$lib/assets/2024/pictures/02.jpg";
    import gallery3 from "$lib/assets/2024/pictures/03.jpg";
    import gallery4 from "$lib/assets/2024/pictures/04.jpg";
    import gallery5 from "$lib/assets/2024/pictures/05.jpg";
    import gallery6 from "$lib/assets/2024/pictures/06.jpg";
    import gallery1thumb from "$lib/assets/2024/pictures/01_thumb.jpg";
    import gallery2thumb from "$lib/assets/2024/pictures/02_thumb.jpg";
    import gallery3thumb from "$lib/assets/2024/pictures/03_thumb.jpg";
    import gallery4thumb from "$lib/assets/2024/pictures/04_thumb.jpg";
    import gallery5thumb from "$lib/assets/2024/pictures/05_thumb.jpg";
    import gallery6thumb from "$lib/assets/2024/pictures/06_thumb.jpg";
    import CornerBox from "../CornerBox.svelte";
</script>

<section id="gallery" class="center-center">
    <CornerBox>
        <h2>Last Years Memories</h2>
        <LightboxGallery>
            <svelte:fragment slot="thumbnail">
                <div class="thumbnails">
                    <GalleryThumbnail>
                        <img src={gallery1thumb} alt="" />
                    </GalleryThumbnail>
                    <GalleryThumbnail>
                        <img src={gallery2thumb} alt="" />
                    </GalleryThumbnail>
                    <GalleryThumbnail>
                        <img src={gallery3thumb} alt="" />
                    </GalleryThumbnail>
                    <GalleryThumbnail>
                        <img src={gallery4thumb} alt="" />
                    </GalleryThumbnail>
                    <GalleryThumbnail>
                        <img src={gallery5thumb} alt="" />
                    </GalleryThumbnail>
                    <GalleryThumbnail>
                        <img src={gallery6thumb} alt="" />
                    </GalleryThumbnail>
                </div>
            </svelte:fragment>
            <GalleryImage>
                <img src={gallery1} alt="" />
            </GalleryImage>
            <GalleryImage>
                <img src={gallery2} alt="" />
            </GalleryImage>
            <GalleryImage>
                <img src={gallery3} alt="" />
            </GalleryImage>
            <GalleryImage>
                <img src={gallery4} alt="" />
            </GalleryImage>
            <GalleryImage>
                <img src={gallery5} alt="" />
            </GalleryImage>
            <GalleryImage>
                <img src={gallery6} alt="" />
            </GalleryImage>
        </LightboxGallery>
    </CornerBox>
</section>

<style>
    #gallery  {
        margin-top: var(--spacing-12);
    }
    
    h2 {
        text-align: center;
        margin-bottom: var(--spacing-6);
    }
    .thumbnails {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        gap: var(--spacing-2);
    }

    .thumbnails img {
        height: 200px;
    }
</style>
