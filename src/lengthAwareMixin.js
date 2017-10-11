export const lengthAwareMixin = {
  computed: {
    lengthAware() {
      return `${this.myName} (${this.myName.length})`;
    }
  }
};