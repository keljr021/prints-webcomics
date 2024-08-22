<template>
  <div class="create container">
    <view-header>
      <template v-slot:header>Create a new series</template>
    </view-header>

    <div>
      <div class="columns">
        <div class="column is-half px-5">
          <b-field label="Series Name" class="pb-3">
            <b-input v-model="seriesName"></b-input>
          </b-field>
          <div class="pb-3" style="font-weight:bold">
            Series Genre<br>Select up to three (3) choices
          </div>
          <b-field class="pb-3">
           <div class="columns">
            <div class="column is-half">
              <b-checkbox>Basic</b-checkbox>
            </div>
            <div class="column is-half">
              <b-checkbox>Basic</b-checkbox>
            </div>
           </div>
          </b-field>
          <b-field label="Synopsis" class="py-3">
           <div class="columns">
            <div class="column">
              <b-input v-model="synopsis" maxlength="200" type="textarea"></b-input>
            </div>
           </div>
          </b-field>
          <b-field label="Trigger/Content Warnings (if any)" class="py-3">
           <div class="columns">
            <div class="column">
              <b-input v-model="warnings" maxlength="200" type="textarea"></b-input>
            </div>
           </div>
          </b-field>
        </div>
        <div class="column is-half right-column">
          <b-field label="Cover Page" class="pb-5">
           <div class="columns">
            <div class="column">
              <div class="cover-img"></div>
              <div class="pb-3" style="font-style:italic">
                Must be at least<br>
                1200x700 pixels and<br>
                in JPG or PNG format.
              </div>
              <b-upload v-model="file" class="file-label">
                <span class="file-cta">
                    <span class="file-label">Upload Cover</span>
                </span>
                <span class="file-name" v-if="file">
                    {{ file.name }}
                </span>
              </b-upload>
            </div>
           </div>
          </b-field>

          <b-field label="Thumbnail Image" class="py-5">
           <div class="columns">
            <div class="column">
              <div class="thumb-img"></div>
              <div class="pb-3" style="font-style:italic">
                Must be at least<br>
                200x200 pixels and<br>
                in JPG or PNG format.
              </div>
              <b-upload v-model="file" class="file-label">
                <span class="file-cta">
                    <span class="file-label">Upload Thumbnail</span>
                </span>
                <span class="file-name" v-if="file">
                    {{ file.name }}
                </span>
              </b-upload>
            </div>
           </div>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column create-buttons">
          <b-button type="is-inverted" outlined>Save Draft</b-button>
          <b-button type="is-primary" @click="toggleConfirmSeries()">Publish Series</b-button>
        </div>
      </div>
      <confirm-new-series :showModal="showConfirmNewSeries" @toggle="toggleConfirmSeries()" @submit="submitConfirmSeries();togglePublishSeries()" />
      <publish-series :showModal="showPublishSeries" @toggle="togglePublishSeries()" @submit="togglePublishSeries()" />

    </div>
  </div>
</template>

<script>
import ViewHeader from '@/components/ViewHeader.vue';
import ConfirmNewSeries from '@/components/modals/ConfirmNewSeries.vue';
export default {
  name: 'CreateSeries',
  data() {
    return {
      showConfirmNewSeries: false,
      showPublishSeries: false
    }
  },
  methods: {
    toggleConfirmSeries() {
      this.showConfirmNewSeries = !this.showConfirmNewSeries;
    },
    submitConfirmSeries() {
      this.showConfirmNewSeries = !this.showConfirmNewSeries;
    },
    togglePublishSeries() {
      this.showPublishSeries = !this.showPublishSeries;
    },
  },
  components: {
    ViewHeader,
    ConfirmNewSeries
  }
}
</script>
<style>
.cover-img,
.thumb-img {
  background: #eee;
  border-radius: 15px;
  margin: 20px 0;
}

.cover-img {
  width: 200px;
  height: 275px;
}

.thumb-img {
  width: 200px;
  height: 200px;
}

.right-column {
    padding-left: 150px;
}

.create-buttons {
  padding: 80px 20px;
}

.button {
  margin-right: 20px;
}
</style>