<template>
  <footer>
    <div class="footerTop">
      <a href="/" target="_blank">
        <font-awesome-icon :icon="['fab', 'facebook-square']" />
      </a>
      <a href="/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="/" target="_blank">
        <font-awesome-icon :icon="['fab', 'twitter-square']" />
      </a>
    </div>
    <div class="footerBottom">
      <h6>
        Made with
        <span>♥</span> by Brenda Matias
      </h6>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style lang="sass" scoped>
footer 
    font-size: 16px
    text-transform: uppercase
    font-weight: 600
    display: flex-inline
    background: black
div
    padding: 40px
    text-align: center
span
    color: rgba(255, 51, 102, 0.9)
.footerBottom
    border-top: .1px solid #bebebe
    color: #a3a3a3
a
    font-size: 40px
    color: white
    margin: 0 30px
a:hover
    color: rgba(255, 51, 102, 0.9)
</style>
