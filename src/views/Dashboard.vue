<template>
  <div class="dashboard container">
    <view-header>
      <template v-slot:header>Dashboard</template>
    </view-header>

    <div v-if="isMobile">
      <dashboard-mobile-menu />
    </div>

    <div class="dashboard-quick" v-if="isDesktop || isTablet">
      <div class="columns is-multiline">
        <div class="column is-4">
          <div class="dashboard-quick-item">
            <div class="dashboard-quick-item-icon"><b-icon size="is-large" icon="fa-eye"></b-icon></div>
            <div class="dashboard-quick-item-text">34 Total Views</div>
          </div>
        </div>
        <div class="column is-4">
          <div class="dashboard-quick-item">
            <div class="dashboard-quick-item-icon"><b-icon size="is-large" icon="fa-thumbs-up"></b-icon></div>
            <div class="dashboard-quick-item-text">12 Total Likes</div>
          </div>
        </div>
        <div class="column is-4">
          <div class="dashboard-quick-item">
            <div class="dashboard-quick-item-icon"><b-icon size="is-large" icon="fa-comment"></b-icon></div>
            <div class="dashboard-quick-item-text">4 Total Comments</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard-quick-mobile" v-else>
      <div class="columns is-mobile is-multiline">
        <div class="column is-full dashboard-quick-mobile-item">
          <div class="dashboard-quick-item-icon"><b-icon icon="fa-eye"></b-icon></div>
          <div class="dashboard-quick-item-text">34 Total Views</div>
        </div>
        <div class="column is-full dashboard-quick-mobile-item">
          <div class="dashboard-quick-item-icon"><b-icon icon="fa-thumbs-up"></b-icon></div>
          <div class="dashboard-quick-item-text">12 Total Likes</div>
        </div>
        <div class="column is-full dashboard-quick-mobile-item">
          <div class="dashboard-quick-item-icon"><b-icon icon="fa-comment"></b-icon></div>
          <div class="dashboard-quick-item-text">4 Total Comments</div>
        </div>
      </div>
    </div>

    <div class="dashboard-menu py-5 my-5">
      <div class="columns is-mobile is-multiline">
        <div class="column is-full-mobile is-3-desktop dashboard-menu-side">
          <dashboard-sub-menu />
        </div>
        <div class="column is-full-mobile is-9-desktop dashboard-menu-list">
          <div class="pb-5 dashboard-sort">
            <sort-dropdown />
          </div>
          <div class="columns is-mobile is-multiline">
            <div class="column is-half-mobile is-4-desktop" v-for="item in favioriteComicsList" :key="item.key">
              <comic-item :comic="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueBreakpointMixin from 'vue-breakpoint-mixin';
import { comicsStore } from "@/store/comics";

import ViewHeader from '@/components/ViewHeader.vue';
import DashboardMobileMenu from '@/components/DashboardMobileMenu.vue';
import DashboardSubMenu from '@/components/DashboardSubMenu.vue';
import ComicItem from '@/components/ComicItem.vue';
import SortDropdown from '@/components/SortDropdown.vue';
export default {
  name: 'Dashboard',
  mixins: [ VueBreakpointMixin ],
  data() {
    return {
      favioriteComicsList: [],
    };
  },
  async created() {
    this.favioriteComicsList = comicsStore.getRecommendedComics();
  },
  components: {
    ViewHeader,
    DashboardMobileMenu,
    DashboardSubMenu,
    ComicItem,
    SortDropdown
  }
}
</script>

<style>
.dashboard-quick {
  padding-bottom: 25px;
  display: flex;
  justify-content: center;
}

.dashboard-quick-item {
  flex: 1;
  align-items: center;
  height: 180px;
  padding: 50px 0;
  margin: 0 10px;
  background: #eee;
  text-align: center;
}

.dashboard-quick-item:hover
.dashboard-quick-item-icon {
  opacity: 1;
}

.dashboard-quick-item-icon {
  opacity: 0.75;
  transition: opacity ease-in-out 0.3s;
}

.dashboard-quick-item-text {
  padding: 5px 0;
}

.dashboard-menu-list {
  padding: 25px 50px;
}

.dashboard-quick-mobile {
  background: #eee;
  padding: 10px 0;
}

.dashboard-quick-mobile .dashboard-quick-item-icon {
  float: left;
  padding: 5px 20px;
  height: 5px;
}

.dashboard-quick-mobile .dashboard-quick-item-icon-text {
  float: right;
  padding: 10px 20px;
  font-size: 24px;
}

.dashboard-sort {
  text-align: right;
}

@media all and (max-width: 768px) {
  .dashboard-sort {
    text-align: center;
  }

  .dashboard-menu-list {
    padding: 10px 5px;
  }
}
</style>