<template>
    <div id="app">
        <Navigation />

        <router-view />

        <Footer />
    </div>
</template>

<script>
    import Functions from '../js/helpers/functions'
    import Navigation from '../components/elements/navigation'
    import Footer from '../components/elements/footer'

    export default {
        name: 'app',
        mixins: [Functions],
        components: {
            Navigation,
            Footer
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>