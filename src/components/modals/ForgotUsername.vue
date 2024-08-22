<template>
    <overlay-modal :showModal="showModal" @toggle="toggleModal()" @submit="submitModal()" submitText="Submit" width="700px">
        <template v-slot:header>
            Forgot Username or Password
        </template>
        <template v-slot:content>
            <div class="columns">
                <div class="column is-full">
                    <b-field class="pb-3" label="Enter your email">
                        <b-input placeholder="Email" v-model="email"></b-input>
                    </b-field>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <b-button type="is-inverted" @click="toggleModal()">Cancel</b-button>
            <b-button type="is-inverted" @click="submitModal()">Submit</b-button>
        </template>
    </overlay-modal>
</template>
  
<script>
import OverlayModal from '@/components/OverlayModal.vue';
export default {
    name: 'ForgotUsername',
    data() {
        return {
            email: '',
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

</style>
  