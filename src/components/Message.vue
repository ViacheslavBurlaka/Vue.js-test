<template>
    <div class="alert alert-secondary" :class="'alert-' + type">
        <h3>{{text}}</h3>
        <button class="btn btn-success" @click="$emit('toNextQuestion')">Continue</button>

    </div>
</template>
<script>
    export default{
        props: ['type', 'text']
    }
</script>



<style scoped>

    .alert{
        text-align: center;
    }

</style>