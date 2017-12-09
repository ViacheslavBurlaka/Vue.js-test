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
    </div>
</template>

<script>
    // public functions
    export default{
        props: ['settings'],

        data(){
            return {
                x: mtRand(this.settings.from, this.settings.to),
                y: mtRand(this.settings.from, this.settings.to)
            }
        },
        computed: {
            good(){
                return this.x + this.y;
            },
            answers(){
                let res = [this.good];

                while(res.length < this.settings.variants){
                   let num = (mtRand(this.good - this.settings.range, this.good + this.settings.range));
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