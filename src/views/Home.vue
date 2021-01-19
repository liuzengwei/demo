<template>
  <div class="home">
    <span class="text-color">你好啊!</span>
    <button
      v-for="(item, idx) in themeList"
      :key="idx"
      @click="onChangeTheme(item)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { themeList } from "@/styles/setTheme.js";
export default {
  name: "Home",
  data() {
    return {
      themeV: "",
      themeList
    };
  },
  computed: {
    ...mapGetters(["theme"])
  },
  components: {},
  methods: {
    onChangeTheme({ key }) {
      this.$store.dispatch("ChangeTheme", key);
    }
  }
};
</script>
