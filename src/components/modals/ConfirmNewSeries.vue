<template>
    <overlay-modal :showModal="showModal" @toggle="toggleModal()" @submit="submitModal()" submitText="OK" width="700px">
        <template v-slot:header>
            Confirm Publish Series
        </template>
        <template v-slot:content>
            <div class="columns">
                <div class="column is-half">
                    <div class="series-section">
                        <div class="series-section-name">x</div>
                        <div class="series-section-value">x</div>
                    </div>
                    <div class="series-section">
                        <div class="series-section-name">x</div>
                        <div class="series-section-value">x</div>
                    </div>
                    <div class="series-section">
                        <div class="series-section-name">x</div>
                        <div class="series-section-value">x</div>
                    </div>
                    <div class="series-section">
                        <div class="series-section-name">x</div>
                        <div class="series-section-value">x</div>
                    </div>
                </div>
                <div class="column is-quarter">
                    <img src="@/assets/cartoon-5190776_1280.jpg" />
                </div>
                <div class="column is-quarter">
                    <img src="@/assets/cartoon-5190776_1280.jpg" />
                </div>
            </div>
        </template>
    </overlay-modal>
</template>
  
<script>
import OverlayModal from '@/components/OverlayModal.vue';
export default {
    name: 'ConfirmNewSeries',
    data() {
        return {
            email: '',
            showConfirmation: false
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
<style>
.series-section {
    padding: 10px 0;
}

.series-section-name {
    font-weight: bold;
}
</style>
  