<template>
  <div class="create container">
    <view-header>
      <template v-slot:header>Create a new chapter</template>
    </view-header>

    <div>
      <div class="columns">
        <div class="column is-half px-5">
          <b-field label="Chapter Name" class="pb-3">
            <b-input v-model="chapterName"></b-input>
          </b-field>
          <b-field label="Description" class="pb-3">
           <div class="columns">
            <div class="column">
              <b-input v-model="description" maxlength="200" type="textarea"></b-input>
            </div>
           </div>
          </b-field>
          <b-field label="Trigger/Content Warnings (if any)" class="pb-3">
           <div class="columns">
            <div class="column">
              <b-input v-model="warnings" maxlength="200" type="textarea"></b-input>
            </div>
           </div>
          </b-field>
          <b-field label="Files" class="pb-3">
           <div class="columns">
            <div class="column">
              <b-input v-model="files" maxlength="200" type="textarea"></b-input>
              <b-upload v-model="file" class="file-label">
                <span class="file-cta">
                    <span class="file-label">Upload Files</span>
                </span>
              </b-upload>
            </div>
           </div>
          </b-field>
          <b-field label="Avatar Image" class="pb-3">
           <div class="columns">
            <div class="column">
              <div class="thumb-img"></div>
              <b-upload v-model="avatar" class="file-label">
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
        <div class="column is-half right-column">
            <b-field class="pb-3">
                <div class="columns">
                    <div class="column">
                        <img class="cover-image" src="./../assets/cartoon-5190776_1280.jpg" />
                        
                        <div class="cover-title">Comic Title</div>
                        <div class="cover-genre">Genre</div>
                        <div class="cover-author">Author</div>
                        <div class="cover-tw">Trigger Warnings</div>
                    </div>
                </div>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column create-buttons">
          <b-button type="is-inverted" outlined>Save Draft</b-button>
          <b-button type="is-inverted" outlined>Preview Chapter</b-button>
          <b-button type="is-primary" @click="toggleConfirmChapter()">Publish Chapter</b-button>
        </div>
      </div>
      <confirm-new-chapter :showModal="showConfirmNewChapter" @toggle="toggleConfirmChapter()" @submit="submitConfirmChapter();togglePublishSeries()" />
      <publish-chapter :showModal="showPublishChapter" @toggle="togglePublishSeries()" @submit="togglePublishSeries()" />
    </div>
  </div>
</template>

<script>
import ViewHeader from '@/components/ViewHeader.vue';
import ConfirmNewChapter from '@/components/modals/ConfirmNewChapter.vue';
import PublishChapter from '@/components/modals/PublishChapter.vue';
export default {
  name: 'CreateSeries',
  data() {
    return {
      showConfirmNewChapter: false,
      showPublishChapter: false
    }
  },
  methods: {
    toggleConfirmChapter() {
      this.showConfirmNewChapter = !this.showConfirmNewChapter;
    },
    submitConfirmChapter() {
      this.showConfirmNewChapter = !this.showConfirmNewChapter;
    },
    togglePublishSeries() {
      this.showPublishChapter = !this.showPublishChapter;
    }
  },
  components: {
    ViewHeader,
    ConfirmNewChapter,
    PublishChapter
  }
}
</script>
<style>
.thumb-img {
  width: 200px;
  height: 200px;
}

.right-column {
    padding-left: 150px;
}

.cover-title,
.cover-author,
.cover-genre,
.cover-tw {
    font-size: 20px;
}

.cover-title {
    font-weight: bold;
}

.cover-tw {
    font-style: italic;
}

.create-buttons {
  padding: 80px 20px;
}

.cover-image {
    height: 250px;
    border-radius: 15px;
    margin: 20px 0;
}

.button {
  margin-right: 20px;
}
</style>