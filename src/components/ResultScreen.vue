<template>
    <div class="alert" :class="alert">
        <h1>Statistic</h1>
        <span>Success: <b>{{stats.right}}</b></span>
        <span>Wrong: <b>{{stats.wrong}}</b></span>
        <hr>

        <footer class="footer">
            <button class="btn btn-primary" @click="$emit('onRepeat')">Repeat</button>
            <button class="btn btn-primary" @click="$emit('onNextLevel')">Next Level</button>
        </footer>
    </div>
</template>

<script>
    export default{
        props: ['stats']
    }
</script>

<style >

    .alert{
        text-align: center;
    }

</style>