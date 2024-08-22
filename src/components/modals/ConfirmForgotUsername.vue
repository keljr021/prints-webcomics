<template>
    <overlay-modal :showModal="showModal" @toggle="toggleModal()" @submit="submitModal()" submitText="OK" width="700px">
        <template v-slot:header>
            Check Your Email
        </template>
        <template v-slot:content>
            <div class="columns">
                <div class="column is-full">
                    <p>If your email matches our records, we will send an email with a with your username and a link to reset your password.</p>
                    <p>Please check your Inbox or Spam folder in the next five (5) minutes.</p>
                </div>
            </div>
        </template>
    </overlay-modal>
</template>
  
<script>
import OverlayModal from '@/components/OverlayModal.vue';
export default {
    name: 'ConfirmForgotUsername',
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

</style>
  