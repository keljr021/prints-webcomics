<template>
  <div class="create container">
    <view-header>
      <template v-slot:header>Create a New Account</template>
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
          <b-field label="Checkboxes" class="pb-3">
           <div class="columns">
            <div class="column is-half">
              <b-checkbox>Basic</b-checkbox>
            </div>
            <div class="column is-half">
              <b-checkbox>Basic</b-checkbox>
            </div>
           </div>
          </b-field>
          <b-field label="Checkboxes" class="py-3">
            <div class="columns">
              <div class="column is-half">
                <b-radio v-model="radio" native-value="Basic">Basic</b-radio>
              </div>
              <div class="column is-half">
                <b-radio v-model="radio" native-value="Basic">Basic</b-radio>
              </div>
            </div>
          </b-field>
          <b-field class="pb-3">
            <div class="columns">
              <div class="column is-half">
                <b-radio v-model="radio" native-value="Basic">Basic</b-radio>
              </div>
            </div>
          </b-field>
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
          <b-button type="is-primary" tag="router-link" :to="{ name: 'dashboard' }">Create Account</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ViewHeader from '@/components/ViewHeader.vue';
export default {
  name: 'Create',
  components: {
    ViewHeader
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