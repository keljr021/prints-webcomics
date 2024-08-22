<template>
    <overlay-modal :showModal="showModal" @toggle="toggleModal()" @submit="submitModal()" submitText="Publish" width="400px">
        <template v-slot:header>
            Confirm Publish Series
        </template>
        <template v-slot:content>
            <div class="columns">
                <div class="column is-half">
                    <div class="chapter-section">
                        <div class="chapter-section-name">Chapter Name:</div>
                        <div class="chapter-section-value">Encounter</div>
                    </div>
                    <div class="chapter-section">
                        <div class="chapter-section-name">Description:</div>
                        <div class="chapter-section-value">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div class="chapter-section">
                        <div class="chapter-section-name">Trigger/Content Warnings (if any):</div>
                        <div class="chapter-section-value">(none)</div>
                    </div>
                </div>
                <div class="column is-half">
                    <img class="chapter-thumb" src="@/assets/cartoon-5190776_1280.jpg" />
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <b-button type="is-inverted" @click="handleCancel()">Cancel</b-button>
            <b-button type="is-inverted" @click="handlePreview()">Preview</b-button>
            <b-button type="is-inverted" @click="handlePublish()">Publish</b-button>
        </template>
    </overlay-modal>
</template>
  
<script>
import OverlayModal from '@/components/OverlayModal.vue';
export default {
    name: 'ConfirmNewChapter',
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
        },
        handleCancel() {
            this.toggleModal();
        },
        async handlePreview() {
            await this.toggleModal();
            this.$router.push({ name: 'viewComic' });
        },
        handlePublish() {
            this.submitModal();
        }
    },
    components: { 
        OverlayModal
    }
}
</script>
<style>
.chapter-section {
    padding: 20px 0;
}

.chapter-section-name {
    font-weight: bold;
}

.chapter-thumb {
  border-radius: 15px;
  margin: 30px;
  width: 200px;
  height: 200px;
}
</style>
  