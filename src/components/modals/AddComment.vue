<template>
    <overlay-modal :showModal="showModal" @toggle="toggleModal()" @submit="toggleModal()" submitText="Submit" width="700px">
        <template v-slot:header>
            Add Comment
        </template>
        <template v-slot:content>
            <div class="columns">
                <div class="column is-full">
                    <p class="py-3">All comments must follow <router-link :to="{ name: '404'}">Community Guidelines</router-link></p>
                    <b-input maxlength="200" type="textarea"></b-input>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <b-button type="is-inverted" @click="toggleModal()">Cancel</b-button>
            <b-button type="is-inverted" @click="toggleModal()">Submit</b-button>
        </template>
    </overlay-modal>
</template>
  
<script>
import OverlayModal from '@/components/OverlayModal.vue';
export default {
    name: 'AddComment',
    props: {
        showModal: Boolean
    },
    methods: {
        toggleModal() {
            this.$emit('toggle');
        }
    },
    components: { 
        OverlayModal
    }
}
</script>
<style>

</style>
  