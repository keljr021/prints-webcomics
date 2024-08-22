<template>
    <overlay-modal :showModal="showModal" @toggle="toggleModal()" @submit="submitModal()" submitText="OK" width="700px">
        <template v-slot:header>
            Chapter Published
        </template>
        <template v-slot:content>
            <div class="columns">
                <div class="column is-full">
                    <p><b>Star Adventure</b> chapter <b>Encounter</b> has now been published!</p>
                    <p>Use the buttons below to view and share your updated chapter!</p>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <b-button type="is-inverted" @click="handleClose()">Close</b-button>
            <b-button type="is-inverted" @click="handleView()">View</b-button>
            <b-button type="is-inverted" @click="handleShare()">Share</b-button>
        </template>
    </overlay-modal>
</template>
  
<script>
import OverlayModal from '@/components/OverlayModal.vue';
export default {
    name: 'PublishedChapter',
    props: {
        showModal: Boolean
    },
    methods: {
        toggleModal() {
            this.$emit('toggle');
        },
        submitModal() {
            this.$emit('submit');
        },
        handleClose() {
            this.toggleModal();
        },
        async handleView() {
            await this.toggleModal();
            this.$router.push({ name: 'viewComic' });
        },
        async handleShare() {
            await this.toggleModal();
        },
    },
    components: { 
        OverlayModal
    }
}
</script>
<style>

</style>
  