<template>
    <div class="publish-item">
        <div class="publish-item-image">
            <slot name="image"></slot>
        </div>
        <div class="publish-item-text">
            <div class="publish-item-text-title">
                <slot name="title"></slot>
            </div>
            <div class="publish-item-text-caption">
                <slot name="caption"></slot>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PublishItem',
  }
  </script>
  <style>
  .publish-item {
    padding: 0 25px 30px;
  }

  .publish-item-image img {
    height: 420px;
    opacity: 0.8;
  }

  .publish-item-text {
    font-size: 24px;
  }
  
  .publish-item-text-title {
    font-weight: bold;
  }
  </style>