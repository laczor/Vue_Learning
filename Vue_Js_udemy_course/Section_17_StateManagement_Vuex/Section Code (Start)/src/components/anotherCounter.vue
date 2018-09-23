<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="asyncIncrement({by:100,duration:1000})">Decrement</button>
    </div>
</template>

<script>

    import {mapMutations} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ]),
            //Manually creating the mutation  functions to use
            // increment() {
            //     this.$store.commit("increment");
            // },
            // decrement() {
            //     this.$store.commit("decrement");
            // }

            // Using the *** ACTIONS ***
            ...mapActions([
                'increment',
                'decrement',
                'asyncIncrement'
            ])

        }
    }
</script>