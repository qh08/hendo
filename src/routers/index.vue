<template>
    <div>
        <h1>{{greetings}}</h1>
        <hello/>
        <p>以下使用model+mock造出的数据：</p>
        <p>{{JSON.stringify(userList)}}</p>
    </div>
</template>

<script>
    import hello from '../components/hello.vue'

    export default {
        name: 'index',
        data() {
            return {
                greetings: 'This is your hendo app.'
            }
        },
        methods: {
            getUserList() {
                this.$store.dispatch('home/getUserList')
            }
        },
        computed: {
            userList() {
                return this.$store.state.home.userList
            }
        },
        components: {
            hello
        },
        mounted() {
            this.getUserList()
        }
    }

</script>

<style scoped>


</style>
