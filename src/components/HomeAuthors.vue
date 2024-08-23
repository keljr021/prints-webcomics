<template>
    <div class="authors">
        <div class="headline py-3">Featured Authors</div>
        <div class="authors-carousel">
            <b-carousel>
                <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                    <home-authors-item :text="carousel.text">
                        <template v-slot:image>
                            <img src="@/assets/cartoon-5190776_1280.jpg" />
                        </template>
                    </home-authors-item>
                </b-carousel-item>
            </b-carousel>
        </div>
    </div>
</template>
  
<script>
import HomeAuthorsItem from './HomeAuthorsItem.vue';
export default {
    name: 'HomeAuthors',
    data(){
        return {
            carousels: [
                { 
                    image: "cartoon-5190776_1280.jpg", 
                    text: {
                        name: 'Stephanie Liu',
                        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus eget imperdiet maecenas massa maximus.',
                        genres: 'Adventure, Drama, Fantasy, Slice of Life',
                        comics: 'Multiverse Tavern, Star Adventure'

                    }
                },
                { 
                    image: "cartoon-5190776_1280.jpg", 
                    text: {
                        name: 'Stephanie Liu',
                        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus eget imperdiet maecenas massa maximus.',
                        genres: 'Adventure, Drama, Fantasy, Slice of Life',
                        comics: 'Multiverse Tavern, Star Adventure'

                    }
                },
                { 
                    image: "cartoon-5190776_1280.jpg", 
                    text: {
                        name: 'Stephanie Liu',
                        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus eget imperdiet maecenas massa maximus.',
                        genres: 'Adventure, Drama, Fantasy, Slice of Life',
                        comics: 'Multiverse Tavern, Star Adventure'

                    }
                },
                { 
                    image: "cartoon-5190776_1280.jpg", 
                    text: {
                        name: 'Stephanie Liu',
                        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus eget imperdiet maecenas massa maximus.',
                        genres: 'Adventure, Drama, Fantasy, Slice of Life',
                        comics: 'Multiverse Tavern, Star Adventure'

                    }
                }
            ]
        }
    },
    methods: {
        imgSrc(input) {
            return new URL('@/assets/' + input, import.meta.url).href;
        }
    },
    components: {
        HomeAuthorsItem
    }
}
</script>
<style>
.authors {
    padding: 50px;
}

.authors-carousel {
    padding: 30px 0;
}
</style>
  