import { setTheme, defaultTheme } from "@/styles/setTheme.js";
const app = {
  state: {
    theme: defaultTheme
  },
  mutations: {
    SET_THEME: (state, theme) => {
      state.theme = theme;
    }
  },
  actions: {
    ChangeTheme({ commit }, theme) {
      commit("SET_THEME", theme);
      setTheme(theme);
      // 将用户改变的主题数据，存到缓存的userData里
      sessionStorage.setItem("theme", JSON.stringify({ theme: theme }));
      // 存到数据库（不方便mock所以省略）
    }
  }
};
export default app;
