<template>
    <section class="hero hero-img is-medium is-link">
        <div class="columns hero-body">
            <div class="column is-half">&nbsp;</div>
            <div class="column is-half">
                <div class="cta">{{ title }}</div>
                <div class="cta-text">
                    <p v-for="item in text" :key="item.key">
                        {{ item  }}
                    </p>
                </div>
                <div class="cta-buttons" v-if="buttonRoute && buttonText">
                    <b-button type="is-primary" @click="handleClick">{{ buttonText }}</b-button>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'HeroImg',
    props: {
        title: String,
        text: Array,
        buttonText: String,
        buttonRoute: String
    },
    methods: {
        handleClick() {
            this.$router.push({ name: this.buttonRoute });
        }
    }
}
</script>
<style>
.hero .hero-img {
    padding-left: 0;
    padding-right: 0;
    min-height: 630px;
}

.home .hero-img,
.about .hero-img {
    background:linear-gradient(0deg, rgba(78, 76, 103, 0.7), rgba(78, 76, 103, 0.7)), url(./../assets/pexels-niezam-16516.jpg);
    background-size: cover;
}

.publish .hero-img {
    background:linear-gradient(0deg, rgba(78, 76, 103, 0.7), rgba(78, 76, 103, 0.7)), url(./../assets/drawing-2228403_1280.jpg);
    background-size: cover;
}


.cta, .cta-text, .cta-buttons {
    text-align: left;
}

.cta {
    padding-bottom: 10px; 
}

.cta-text {
    line-height: 175%;
}

.cta-text p {
    padding: 20px 0;
    text-align: 28px;
}

.cta-buttons {
    padding: 20px 0;
}

.cta-buttons .is-primary {
    background-color: #4E4C67;
    border: 1px solid white;
}

.cta-buttons .is-primary:hover {
    background-color: #36344d;
    border: 1px solid white;
}
</style>
  