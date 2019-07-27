<template>
    <header>
        <div>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/about">Contact</router-link>
        <router-link to="/about">Category</router-link>
        </div>
    </header>
</template>

<script>

export default {
    name: 'TheHeader',
}
</script>

<style lang="sass" scoped>
header 
    font-size: 12px
    text-transform: uppercase
    font-weight: 600
    display: flex-inline
    margin-top: 140px
div
    text-align: center

a
    color: black
    padding: 0 20px

</style>
