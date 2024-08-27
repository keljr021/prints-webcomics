<template>
    <div class="py-3">
        <div class="columns is-mobile is-multiline">
            <div class="column is-half">
                <b-button tag="router-link" to="/404" outlined>Comic Series</b-button>
            </div>
            <div class="column is-half">
                <b-button tag="router-link" to="/404" outlined>Saved Drafts</b-button>
            </div>
            <div class="column is-half">
                <b-button tag="router-link" to="/404" outlined>Comments</b-button>
            </div>
            <div class="column is-half">
                <b-button tag="router-link" to="/account" outlined>Account</b-button>
            </div>
        </div>

        <div class="py-3">
            <b-message type="is-info">
                Creating and updating your comic series is restricted to desktop devices only.
            </b-message>
        </div>
    </div>


</template>
  
<script>
export default {
    name: 'DashboardMobileMenu'
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

@media all and (max-width: 768px) {
    .sub-link,
    .sub-link-no-highlight {
        font-size: 90%;
    }
}
</style>
  