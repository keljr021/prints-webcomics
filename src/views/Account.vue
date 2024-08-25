<template>
  <div class="account container">
    <view-header>
      <template v-slot:header>Manage Account</template>
    </view-header>

    <div>
      <div class="columns">
        <div class="column is-half px-5">
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
        <div class="column is-half px-5">
          <div class="pb-3" style="font-weight:bold">
            Series Genre<br>Select up to three (3) choices
          </div>
          <div class="columns">
            <checkbox-group :items="genreList" />
          </div>
          <div class="pb-3" style="font-weight:bold">
            Do you plan to create and publish webcomics?
          </div>
          <div class="columns">
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
          <b-button type="is-primary" tag="router-link" :to="{ name: 'dashboard' }">Update Account</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { accountsStore } from '@/store/accounts';

import ViewHeader from './../components/ViewHeader.vue';
import CheckboxGroup from '@/components/CheckboxGroup.vue'
import RadioGroup from '@/components/RadioGroup.vue'

export default {
  name: 'Account',
  data() {
    return {
      account: {},
      email: null,
      username: null,
      password: null,
      confirm: null,
      fullname: null,
      age: null,
      genres: [],
      isPublishing: '',
      file: null,
      description: '',
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
    setUserInfo() {
      if (this.account) {
        for (let key in this.account) {
          if (Object.hasOwn(this.account, key)) {
            this[key] = this.account[key];
            console.log(key, ' is set to: ', this.account[key]);
          }
        }
      }
    }
  },
  async created() {
    this.account = accountsStore.userLoggedIn;
    await this.setUserInfo();
  },
  components: {
    ViewHeader,
    CheckboxGroup,
    RadioGroup
  }
}
</script>
<style>
.avatar-img {
  width: 100px;
  height: 100px;
  background: #eee;
  border-radius: 15px;
  margin: 20px 0;
}
</style>