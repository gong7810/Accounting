import { updateAppConfig } from "#app";
import { defuFn } from "C:/Users/young/OneDrive/바탕 화면/학생프로젝트/77기 1차 Vue/회계/77th_acc_front/node_modules/.pnpm/defu@6.1.3/node_modules/defu/dist/defu.mjs";

const inlineConfig = {
  nuxt: {},
};

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default);
  });
}

export default /* #__PURE__ */ defuFn(inlineConfig);
