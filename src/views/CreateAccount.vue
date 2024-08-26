<template>
  <div class="create container">
    <view-header>
      <template v-slot:header>Create a New Account</template>
    </view-header>

    <div>
      <div class="columns fixed-column is-multiline">
        <div class="column is-6 px-5">
          <b-field label="Email" class="pb-3">
            <b-input v-model="email"></b-input>
          </b-field>

          <b-field label="Username" class="py-3">
            <b-input v-model="username"></b-input>
          </b-field>

          <b-field label="Password" class="py-3">
            <b-input v-model="password"></b-input>
          </b-field>

          <b-field label="Confirm Password" class="py-3">
            <b-input v-model="confirm"></b-input>
          </b-field>

          <b-field label="Name" class="py-3">
            <b-input v-model="fullname"></b-input>
          </b-field>

          <b-field label="Age" class="py-3">
            <b-input v-model="age"></b-input>
          </b-field>
        </div>
        <div class="column is-6 px-5">
          <div class="pb-3">
            <b>What Genre(s) are you interested in?<br>Select up to three (3) choices</b>
            <checkbox-group :items="genreList" />
          </div>
          <div class="pb-3">
            <b>Do you plan to create and publish webcomics?</b>
            <radio-group :items="['yes', 'no', 'unsure']" />
          </div>
          <b-field label="Avatar Image" class="py-3">
           <div class="columns">
            <div class="column">
              <div class="avatar-img"></div>
              <b-upload v-model="file" class="file-label">
                <span class="file-cta">
                    <span class="file-label">Click to upload</span>
                </span>
                <span class="file-name" v-if="file">
                    {{ file.name }}
                </span>
              </b-upload>
            </div>
           </div>
          </b-field>
          <b-field label="Description" class="py-3">
           <div class="columns">
            <div class="column">
              <b-input maxlength="200" type="textarea"></b-input>
            </div>
           </div>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-button type="is-primary" @click="openConfirmModal()">Create Account</b-button>
        </div>
      </div>
    </div>
    <confirm-new-account :showModal="showConfirmAccount" @toggle="handleSubmit()" @submit="handleSubmit()" />
  </div>
</template>

<script>
import ViewHeader from '@/components/ViewHeader.vue';
import CheckboxGroup from '@/components/CheckboxGroup.vue';
import RadioGroup from '@/components/RadioGroup.vue';
import ConfirmNewAccount from '@/components/modals/ConfirmNewAccount.vue';
export default {
  name: 'CreateAccount',
  data() {
    return {
      showConfirmAccount: false,
      genreList: [
        'action',
        'adventure',
        'comedy',
        'drama',
        'fantasy',
        'horror',
        'romance',
        'slice-of-life'
      ]
    };
  },
  methods: {
    openConfirmModal() {
      this.showConfirmAccount = true;
    },
    handleSubmit() {
      this.showConfirmAccount = !this.showConfirmAccount;
      this.$router.push({ name: 'dashboard' });
    }
  },
  components: {
    ViewHeader,
    CheckboxGroup,
    RadioGroup,
    ConfirmNewAccount
  }
}
</script>
<style>
.avatar-img {
  min-width: 100px;
  min-height: 100px;
  background: #eee;
  border-radius: 15px;
  margin: 20px 0;
}
</style>