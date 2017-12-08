import Vue from 'vue'
import App from './App.vue'

import StartScreen from './components/StartScreen.vue';
import Question from './components/Question.vue';
import Message from './components/Message.vue';
import ResultScreen from './components/ResultScreen.vue';


Vue.component('AppStartScreen', StartScreen);
Vue.component('AppQuestion', Question);
Vue.component('AppMessage', Message);
Vue.component('AppResultScreen', ResultScreen);

new Vue({
  el: '#app',
  render: h => h(App)
});
