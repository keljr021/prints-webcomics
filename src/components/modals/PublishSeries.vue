<template>
    <overlay-modal :showModal="showModal" @toggle="toggleModal()" @submit="submitModal()" submitText="OK" width="700px">
        <template v-slot:header>
            Series Published
        </template>
        <template v-slot:content>
            <div class="columns">
                <div class="column is-half">
                    <p><b>Star Adventure</b> comic series has now been added!</p>
                    <p>Use the buttons below to view your series, or create your first chapter!</p>
                </div>
                <div class="column is-half" style="text-align:right">
                    <img class="series-thumb" src="@/assets/cartoon-5190776_1280.jpg" />
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <b-button type="is-inverted" @click="handleClose()">Close</b-button>
            <b-button type="is-inverted" @click="handleView()">View</b-button>
            <b-button type="is-inverted" @click="handleCreateChapter()">Create Chapter</b-button>
        </template>
    </overlay-modal>
</template>
  
<script>
import OverlayModal from '@/components/OverlayModal.vue';
export default {
    name: 'PublishedSeries',
    props: {
        showModal: Boolean
    },
    methods: {
        toggleModal() {
            this.$emit('toggle');
        },
        handleClose() {
            this.toggleModal();
        },
        async handleView() {
            await this.toggleModal();
            this.$router.push({ name: 'series', query: { id: 0 } });
        },
        async handleCreateChapter() {
            await this.toggleModal();
             this.$router.push({ name: 'createChapter' });
        }
    },
    components: { 
        OverlayModal
    }
}
</script>
<style scoped>
.series-thumb {
  border-radius: 15px;
  margin: 30px;
  width: 200px;
  height: 200px;
}
</style>
  