import Vue from 'vue';
import VueImgix from 'vue-imgix';

Vue.use(VueImgix, {
  domain: "humans-machines.imgix.net",
  defaultIxParams: {
    auto: 'format'
  },
});
