<template>
    <div class="about-item">
        <div class="about-item-image">
            <img :src="getImage" />
        </div>
        <div class="about-item-text">
            <div class="about-item-text-name">{{ name }}</div>
            <div class="about-item-text-occ">{{ occupation }}</div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'AboutItem',
    props: {
        src: {
            type: String,
            default: './../assets/cartoon-5190776_1280.jpg'
        },
        name: {
            type: String,
            default: 'Test Name'
        },
        occupation: {
            type: String,
            default: 'Test Occupation'
        }
    },
    methods: {
        getImage() {
            return this.src;
        }
    }
}
</script>
<style>
.about-item {
    cursor: pointer;
    text-align: left;
    padding-bottom: 30px;
}

.about-item-image img {
    height: 430px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.about-item-text {
    padding: 20px 0;
    font-size: 20px;
}

.about-item-text-name {
    font-weight: bold;
}
</style>
  