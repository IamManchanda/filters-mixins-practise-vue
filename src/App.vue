<template>
  <div class="grid-container margin-top-2">
    <div class="grid-x grid-margin-x">
      <div class="cell medium-8 medium-offset-2">
        <h2>Filters &amp; Mixins</h2>
        <p>{{ firstText | reverse }}</p>
        <p>{{ myName | calculate-length }}</p>
        <hr>
        <p>{{ reversed }}</p>
        <p>{{ lengthAware }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { lengthAwareMixin } from './lengthAwareMixin.js';

export default {
  mixins: [lengthAwareMixin],
  data(){
    return {
      firstText: 'Some Text here',
      myName: 'Harman Singh Manchanda'
    };
  },
  filters: {
    reverse(value) {
      return value.split('').reverse().join('');
    }
  },
  computed: {
    reversed() {
      return this.firstText.split('').reverse().join('');
    }
  }
}
</script>

<style lang="scss">
</style>
