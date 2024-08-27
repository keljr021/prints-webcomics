<template>
    <overlay-modal :showModal="showModal" @toggle="toggleModal()" @submit="submitModal()" submitText="OK" width="700px">
        <template v-slot:header>
            Login
        </template>
        <template v-slot:content>
            <div class="columns">
                <div class="column is-full px-5">
                    <b-field class="pb-3">
                        <b-input placeholder="Username" v-model="username"></b-input>
                    </b-field>
            
                    <b-field class="py-3">
                        <b-input type="password" placeholder="Password" v-model="password"></b-input>
                    </b-field>

                    <div class="buttons">
                        <b-button @click="toggleForgotModal()" type="is-text" class="forgot-username">Forgot Username/Password</b-button>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <b-button @click="handleCancel()">Cancel</b-button>
            <b-button @click="handleSubmit()" type="is-primary" outlined>Submit</b-button>
        </template>

        <forgot-username :showModal="showForgotModal" @toggle="toggleForgotModal()" @submit="submitForgotModal()"/>
        <confirm-forgot-username :showModal="showConfirmForgotModal" @toggle="toggleConfirmForgotModal()" @submit="submitConfirmForgotModal()" />
    </overlay-modal>

</template>
  
<script>
import OverlayModal from '@/components/OverlayModal.vue';
import ForgotUsername from './ForgotUsername.vue'
import ConfirmForgotUsername from './ConfirmForgotUsername.vue'
export default {
    name: 'MobileLogin',
    props: {
        showModal: Boolean
    },
    methods: {
        async submitForgotModal() {
            await this.toggleForgotModal();
            await this.toggleConfirmForgotModal();
        },
        async submitConfirmForgotModal() {
            await this.toggleConfirmForgotModal();
            await this.handleCancel();
        }
    },
    components: { 
        OverlayModal,
        ForgotUsername,
        ConfirmForgotUsername
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
  