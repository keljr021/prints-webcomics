<template>
    <div class="sub">
        <div class="sub-link-group">
            <div class="sub-link py-3">Comic Series</div>
            <div class="sub-link py-2 px-5">Create New Series</div>
            <div class="sub-link py-2 px-5">Add Chapter</div>
            <div class="sub-link py-2 px-5">Manage</div>
        </div>

        <div class="sub-link py-3">Saved Drafts</div>
        <div class="sub-link py-3">Comments</div>
        <div class="sub-link py-3" tag="router-link" to="/account">Account</div>
    </div>
</template>
  
<script>
export default {
    name: 'DashboardSubMenu',
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

.sub-link {
    font-size: 24px;
    cursor: pointer;
}

.sub-link .active {
    font-weight: bold;
    color: #4E4C67;
}

.sub-link:hover {
    text-decoration: underline;
}

.sub-link.active {
    font-weight: bold;
}
</style>
  