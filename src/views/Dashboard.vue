<template>
  <div class="dashboard container">
    <view-header>
      <template v-slot:header>Dashboard</template>
    </view-header>
    <div class="dashboard-quick">
      <div class="columns">
        <div class="column is-third">
          <div class="dashboard-quick-item">
            <div class="dashboard-quick-item-icon"><b-icon size="is-large" icon="fa-eye"></b-icon></div>
            <div class="dashboard-quick-item-text">34 Total Views</div>
          </div>
        </div>
        <div class="column is-third">
          <div class="dashboard-quick-item">
            <div class="dashboard-quick-item-icon"><b-icon size="is-large" icon="fa-thumbs-up"></b-icon></div>
            <div class="dashboard-quick-item-text">12 Total Likes</div>
          </div>
        </div>
        <div class="column is-third">
          <div class="dashboard-quick-item">
            <div class="dashboard-quick-item-icon"><b-icon size="is-large" icon="fa-comment"></b-icon></div>
            <div class="dashboard-quick-item-text">4 Total Comments</div>
          </div>
        </div>
      </div>
    </div>

    <div class="dashboard-menu py-5 my-5">
      <div class="columns">
        <div class="column is-one-quarter dashboard-menu-side">
          <dashboard-sub-menu />
        </div>
        <div class="column is-three-fourths dashboard-menu-list">
          <div class="pb-5" style="text-align:right;">
            <sort-dropdown />
          </div>
          <div class="columns">
                <div class="column is-one-third"><comic-item /></div>
                <div class="column is-one-third"><comic-item /></div>
                <div class="column is-one-third"><comic-item /></div>
            </div>
            <div class="columns">
                <div class="column is-one-third"><comic-item /></div>
                <div class="column is-one-third"><comic-item /></div>
                <div class="column is-one-third"><comic-item /></div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ViewHeader from '@/components/ViewHeader.vue';
import DashboardSubMenu from '@/components/DashboardSubMenu.vue';
import ComicItem from '@/components/ComicItem.vue';
import SortDropdown from '@/components/SortDropdown.vue';
export default {
  name: 'Dashboard',
  components: {
    ViewHeader,
    DashboardSubMenu,
    ComicItem,
    SortDropdown
  }
}
</script>

<style>
.dashboard-quick {
  padding-bottom: 25px;
}

.dashboard-quick-item {
  width: 75%;
  height: 180px;
  padding: 50px;
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
  padding: 20px 0;
  text-align: 28px;
}

.dashboard-menu-list {
  padding: 25px 50px;
}
</style>