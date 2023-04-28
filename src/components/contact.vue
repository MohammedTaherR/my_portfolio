<template>
    <div >
        <section id="contact">
    <h2 style="color: white;">Contact</h2>
    <div class="contact-box" :style="'border-color: #f73978;border-style:groove;padding-top:40px;padding-bottom:40px'">
      <div class="contact-details">
        <p>WhatsApp: <a :href="'https://wa.me/' + whatsappNumber">+91 {{ whatsappNumber }}</a></p>
        <p>LinkedIn: <a :href="linkedin" target="_blank">Check out My LinkedIn</a></p>
      </div>
    </div>
  </section>
    </div>
</template>
<script>
export default {
    name:'contact-section'
,data(){
    return{
    whatsappNumber: '8667874962',
    linkedin: 'https://www.linkedin.com/in/mohammed-taher-01495620a/'
}
}}
</script>
<style scoped>
#contact {
  padding: 20px;
  border-color: #f73978;
}

.contact-box {
  /* background-color: #f73978; */
  padding: 20px;
}

.contact-details {
  color: #fff;
  font-size: large;
  margin-top: 10px;
}

.contact-details p {
  margin-bottom: 10px;
}

</style>