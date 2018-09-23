<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>

<!--/So this is the root vue file, where all of the main components are inserted
    in this case we import te userVue singeFileTemplate
-->
<script>
    import User from './components/User.vue';

    export default {
        components: {
            appUser: User
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
