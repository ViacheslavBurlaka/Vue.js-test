<template>
    <div class="alert">
        <h1>{{x}} + {{y}} = ?</h1>

        <div class="buttons">
            <button class="btn btn-success answer-btn"
                    v-for="answer in answers"
                    @click="onAnswer(answer)"
            >
                {{answer}}
            </button>
        </div>

        <footer class="footer">
            <button class="btn btn-primary" @click="$emit('toStartScreen')">Back</button>
        </footer>
    </div>
</template>

<script>
    // public functions
    export default{
        data(){
            return {
                x: mtRand(100, 200),
                y: mtRand(300, 400)
            }
        },
        computed: {
            good(){
                return this.x + this.y;
            },
            answers(){
                let res = [this.good];

                while(res.length < 4){
                   let num = (mtRand(this.good - 10, this.good + 10));
                   if(res.indexOf(num) === -1){
                       res.push(num);
                   }
                }

                return res.sort(() => Math.random() > 0.5);
            }
        },
        methods: {
            onAnswer(answer){
                if(answer == this.good){
                    this.$emit('successAnswer')
                } else{
                    this.$emit('errorAnswer');

                }

            }
        }
    }

    // private functions
    const mtRand = (min, max) => {
        let diff = max - min;
        return Math.floor(Math.random() * (diff + 1)) + min;
    }
</script>


<style scoped="">
    .buttons{
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
    }
    .alert{
        text-align: center;
    }

</style>