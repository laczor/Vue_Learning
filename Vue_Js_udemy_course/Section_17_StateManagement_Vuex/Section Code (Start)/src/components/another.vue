<template>
        <div>
            <!-- <p>Counter is { counter }</p>
            <p>number of clicks { clicks }</p> -->
            <p>Counter is { doubleCounter }</p>
            <p>number of clicks { stringCounter }</p>
        </div>
</template>

<script>
    import { mapGetters }from 'vuex';

    export default {
        // computed: {
        //     counter (){
        //         return this.$store.getters.doubleCounter;
        //     },              
        //     clicks (){
        //         return this.$store.getters.stringCounter;
        //     }   
        // }
        //Right now we dismantle all of the mapGetters objectproperrties to the computed property
        computed:{
                ...mapGetters([
                    'doubleCounter',
                    'stringCounter'
                ])
            }
    }
</script>