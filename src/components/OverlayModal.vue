<template>
  <Transition name="nested" :duration="400">
    <div class="overlay-modal outer" :class="{ 'active' : showModal }">
      <div class="overlay-modal-bg">
        <div class="overlay-modal-card inner" :style="{ 'width': width }">
          <div class="overlay-modal-card-header">
            <div class="overlay-modal-card-header-text">
              <slot name="header"></slot>
            </div>
            <div class="overlay-modal-card-header-button">
              <b-button class="close" @click="toggleModal()" type="is-text">
                <b-icon icon="fa-xmark" />
              </b-button>
            </div>
          </div>
          <div class="overlay-modal-card-content">
            <div class="columns">
              <div class="column is-full">
                <slot name="content"></slot>
              </div>
            </div>
          </div>
          <div class="overlay-modal-card-footer">
            <b-button type="is-inverted" @click="toggleModal()">Cancel</b-button>
            <b-button type="is-inverted" @click="submitModal()">{{ submitText || 'Submit' }}</b-button>
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'OverlayModal',
  props: {
    showModal: Boolean,
    submitText: String,
    width: String
  },
  methods: {
    toggleModal() {
      this.$emit('toggle');
    },
    submitModal() {
      this.$emit('submit');
    }
  }
}
</script>

<style scoped>
.overlay-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  display: none;
}

.overlay-modal.active {
  display: initial;
}

.overlay-modal-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.overlay-modal-card {
  position: relative;
  left: 25%;
  top: 25%;
  min-width: 400px;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: left;
}

.overlay-modal-card-header {
  position: relative;
  min-height: 60px;
  padding: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
}

.button.close {
  margin: 0;
  padding: 10px;
}

.overlay-modal-card-header-text {
  position: relative;
  width: 90%;
  padding: 10px;
  float: left;
  font-weight: bold;
}

.overlay-modal-card-header-button {
  position: relative;
  float: right;
}

.overlay-modal-card-content {
  padding: 25px;
  height: 90%;
}

.overlay-modal-card-footer{
  padding: 20px 0;
  text-align: center;
}
</style>