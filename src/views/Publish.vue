<template>
  <div class="publish">
    <hero-img title="Ready to Create?" :text="getHeroText" buttonText="Create an Account Today!" buttonRoute="create" />
    
    <div class="container">
      <view-header>
        <template v-slot:header>Why Publish With Us?</template>
      </view-header>
      <div class="columns">
        <div class="column is-half">
          <publish-item>
            <template v-slot:image>
              <img src="./../assets/App-Window--Streamline-Ux.png" />
            </template>
            <template v-slot:title>Easy to use application</template>
            <template v-slot:caption>
              Once signed up, you can quickly create your comics to quickly preview and publish.
            </template>
          </publish-item>
        </div>
        <div class="column is-half">
          <publish-item>
            <template v-slot:image>
              <img src="./../assets/Image-Love-Select-1--Streamline-Ux.png" />
            </template>
            <template v-slot:title>Diverse genre options to choose from</template>
            <template v-slot:caption>
              From action to slice-of-life, we have an expansive list of genres to host your series.
            </template>
          </publish-item>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <publish-item>
            <template v-slot:image>
              <img src="./../assets/Chart-Analysis--Streamline-Ux.png" />
            </template>
            <template v-slot:title>Track your comic series in real time</template>
            <template v-slot:caption>
              Monitor your series in our Dashboard to see how many views and likes your comics have gathered. 
            </template>
          </publish-item>
        </div>
        <div class="column is-half">
          <publish-item>
            <template v-slot:image>
              <img src="./../assets/Digital-Handshake-1--Streamline-Ux.png" />
            </template>
            <template v-slot:title>Share your comics across both on and offsite</template>
            <template v-slot:caption>
              Readers across the site have access to share their favorite comic on social media via URL or our in-app integrations.
            </template>
          </publish-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImg from './../components/HeroImg.vue';
import ViewHeader from './../components/ViewHeader.vue';
import PublishItem from './../components/PublishItem.vue';
export default {
  name: 'HomeView',
  computed: {
    getHeroText() {
      return [
        'Prints is made for comic artists to easily publish and share their works across a variety of fans online. ',
        'If you’re looking to quickly publish your comic, you’ve come to the right place.'
      ];
    }
  },
  components: {
    HeroImg,
    ViewHeader,
    PublishItem
  }
}
</script>
<style>
.publish .columns {
  padding: 100px 50px;
}

.publish .column {
  text-align: left;
}

.publish-item-image img {
  height: 400px;
  opacity: 0.8;
}

.publish-item-text-title {
  font-weight: bold;
}
</style>