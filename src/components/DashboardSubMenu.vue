<template>
    <div class="sub">
        <div class="sub-link-group">
            <div class="sub-link active py-3">Comic Series</div>
            <div @click="handleCreateSeries()" class="sub-link py-2 px-5">Create New Series</div>
            <div @click="handleAddChapter()" class="sub-link py-2 px-5">Add Chapter</div>
            <div @click="handleManage()" class="sub-link py-2 px-5">Manage</div>
        </div>

        <div @click="handleSavedDrafts()" class="sub-link py-3">Saved Drafts</div>
        <div @click="handleComments()" class="sub-link py-3">Comments</div>
        <div @click="handleAccount()" class="sub-link py-3">Account</div>
    </div>
</template>
  
<script>
export default {
    name: 'DashboardSubMenu',
    methods: {
        handleCreateSeries() {
            console.log('-create link clicked');
            this.$router.push({ path: '/create/series' });
        },
        handleAddChapter() {
            console.log('-add chapter link clicked');
            this.$router.push({ path: '/create/chapter' });
        },
        handleManage() {
            console.log('-manage link clicked');
        },
        handleSaveDrafts() {
            console.log('-save drafts link clicked');
        },
        handleComments() {
            console.log('-comments link clicked');
        },
        handleAccount() {
            this.$router.push({ path: '/account' });
        }
    }
}
</script>
<style>
.sub {
    border-right: 1px solid black;
    color: black;
}

.sub-link-group {
    padding-bottom: 20px;
}

.sub-link,
.sub-link-no-highlight {
    font-size: 24px;
}

.sub-link {
    cursor: pointer;
}

.sub-link:hover {
    text-decoration: underline;
}

.sub-link.active {
    font-weight: bold;
}

.sub-link.active:hover {
    text-decoration: initial;
    cursor: initial;
}
</style>
  