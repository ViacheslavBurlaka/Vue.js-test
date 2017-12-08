<template>
  <div id="app">
    <h1>Our App</h1>
    <hr>
    <div class="progress" >
      <div class="progress-bar" :style="progressStyles"></div>
    </div>
    <div class="box">
      <transition name="flip" mode="out-in">
        <!--START SCREEN-->
        <app-start-screen
                v-if="state == 'start'"
                @onStart="onStart()"

        >
        </app-start-screen>

        <!--QUESTION SCREEN-->
        <app-question
                v-else-if="state == 'question'"
                @toStartScreen="toStartScreen()"
                @successAnswer="onSuccessAnswer()"
                @errorAnswer="onErrorAnswer()"
        >
        </app-question>

        <!--MESSAGE SCREEN-->
        <app-message
                v-else-if="state == 'message'"
                :type="message.type"
                :text="message.text"
                @toNextQuestion="toNextQuestion"
        >
        </app-message>

        <!--RESULT SCREEN-->
        <app-result-screen v-else-if="state == 'results'"
                           :stats="stats"
                           @repeat="onStart"


        >

        </app-result-screen>

        <div v-else>Unknown state</div>

      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      state: 'start',
      message: {
          type: '',
          text: ''
      },
      stats: {
          right: 0,
          wrong: 0
      },
      questionsMax: 3,

    }
  },
  methods:  {
      onStart() {
          this.state = 'question';
          this.stats.right = 0;
          this.stats.wrong = 0;

      },
      toStartScreen(){
        this.state = 'start'
      },
      onSuccessAnswer(){
          this.state = 'message';
          this.message.text = "Good Job!";
          this.message.type = "success";
          this.stats.right++;
      },
      onErrorAnswer(){
          this.state = 'message';
          this.message.text = "Wrong!";
          this.message.type = "warning";
          this.stats.wrong++;

      },
      toNextQuestion(){
          if(this.questDone < this.questionsMax){
              this.state='question'
          }else{
              this.state='results'
          }
      }
  },
  computed: {
      questDone(){
          return this.stats.right + this.stats.wrong;
      },
      progressStyles(){
          return{
              width: (this.questDone / this.questionsMax * 100) + '%'
          }
      }
  }
}
</script>

<style>
#app {
  margin: 0 auto;
  max-width: 700px;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 20px 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.progress{
  margin-bottom: 10px;
}
.progress-bar{
  transition: width 0.8s linear;
}

  /*animation*/
.flip-enter{}

.flip-enter-active{
  animation: flipInX 0.3s linear;
}
.flip-leave{}
.flip-leave-active{
  animation: flipOutX 0.3s linear;
}

@keyframes flipInX {
  from{transform: rotateX(90deg);}
  to{transform: rotateX(0deg);}
}

@keyframes flipOutX {
  from{transform: rotateX(0deg);}
  to{transform: rotateX(90deg);}
}

</style>
