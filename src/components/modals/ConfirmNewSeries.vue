<template>
    <overlay-modal :showModal="showModal" @toggle="toggleModal()" @submit="submitModal()" submitText="OK" width="400px">
        <template v-slot:header>
            Confirm Publish Series
        </template>
        <template v-slot:content>
            <div class="columns">
                <div class="column is-half">
                    <div class="series-section">
                        <div class="series-section-name">Series Name:</div>
                        <div class="series-section-value">Star Adventure</div>
                    </div>
                    <div class="series-section">
                        <div class="series-section-name">Genre:</div>
                        <div class="series-section-value">Fantasy, Slice of Life</div>
                    </div>
                    <div class="series-section">
                        <div class="series-section-name">Synopsis:</div>
                        <div class="series-section-value">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div class="series-section">
                        <div class="series-section-name">Trigger/Content Warnings (if any):</div>
                        <div class="series-section-value">(none)</div>
                    </div>
                </div>
                <div class="column is-half">
                    <img class="series-cover" src="@/assets/cartoon-5190776_1280.jpg" />
                    <img class="series-thumb" src="@/assets/cartoon-5190776_1280.jpg" />
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <b-button type="is-inverted" @click="toggleModal()">Cancel</b-button>
            <b-button type="is-inverted" @click="submitModal()">Publish</b-button>
        </template>
    </overlay-modal>
</template>
  
<script>
import OverlayModal from '@/components/OverlayModal.vue';
export default {
    name: 'ConfirmNewSeries',
    data() {
        return {
            email: ''
        }
    },
    props: {
        showModal: Boolean
    },
    methods: {
        toggleModal() {
            this.$emit('toggle');
        },
        submitModal() {
            this.$emit('submit');
        }
    },
    components: { 
        OverlayModal
    }
}
</script>
<style scoped>
.series-section {
    padding: 20px 0;
}

.series-section-name {
    font-weight: bold;
}

.series-cover,
.series-thumb {
  border-radius: 15px;
  margin: 30px;
}

.series-cover {
  width: 200px;
  height: 275px;
}

.series-thumb {
  width: 200px;
  height: 200px;
}
</style>
  