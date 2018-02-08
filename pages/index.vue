<template>
  <component :is = 'pages'></component>
</template>

<script>
  import computer from '~components/computer.vue'
  import phone from '~components/phone.vue'
  export default {
    asyncData ({req}) {
      let ua = req ? req.headers['user-agent'] : ''
      return {
        ua: ua
      }
    },
    computed: {
      pages () {
        if (this.ua) {
          return (/MicroMessenger|iPhone|Android|iPad/i).test(this.ua) ? 'phone' : 'computer'
        } else {
          return this.$tkDetect.isDeskTop ? 'computer' : 'phone'
        }
      }
    },
    components: {
      computer, phone
    }
  }
</script>
<style scoped>

</style>
