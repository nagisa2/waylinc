<template id="contact">
  <div class="contact-cfg">
    <div class="address-c">
      <h2>Address</h2>

      <p>
        Nairobi,<br />
        floor 4, shop E18, <br />
        Munyu business center
      </p>
      <h2>Office hours</h2>
      <p>8.00 - 6.00pm</p>
    </div>
    <div
      class="intouch"
      v-for="({ phone, service, customercare }, index) in touchContacts"
      :key="index"
    >
      <h2>Get in touch</h2>
      <span><strong>Phone:</strong> {{ phone }}</span>
      <span><strong>Service:</strong> {{ service }}</span>
      <span><strong>Customer care:</strong> {{ customercare }}</span>
      <div
        class="findUs"
        v-for="({ facebook, instagram, whatsapp, twitter }, index) in links"
        :key="index"
      >
        <h2>Find us</h2>
        <div class="flex-icon">
          <a :href="facebook" target="_blank" class="icon-a"
            ><img
              src="../assets/Facebook.svg"
              alt="facebook"
              class="contactIcon"
          /></a>
          <a :href="instagram" target="_blank" class="icon-a"
            ><img
              src="../assets/Instagram.svg"
              alt="instagram"
              class="contactIcon"
          /></a>
          <a :href="twitter" target="_blank" class="icon-a"
            ><img src="../assets/Twitter.svg" alt="twitter" class="contactIcon"
          /></a>
          <a :href="whatsapp" target="_blank" class="icon-a"
            ><img
              src="../assets/whatsapp.svg"
              alt="whatsapp"
              class="contactIcon"
          /></a>
        </div>
      </div>
    </div>
    <div class="contactUs">
      <h2>Message us</h2>
      <form ref="contactform" @submit.prevent="sendEmail()">
        <input
          type="text"
          v-model="usrName"
          name="usrName"
          placeholder="Name"
          class="input-form input-size txt-trans"
          required
        />
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Email"
          class="input-form input-size"
          required
        />
        <input
          type="text"
          v-model="phoneNumber"
          name="phone no"
          placeholder="Phone number"
          class="input-form input-size"
          required
        />
        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="10"
          placeholder="message"
          class="input-form textstyle txt-trans input-area"
          required
        />
        <button type="submit" class="btn-s">Send</button>
      </form>
    </div>
  </div>
  <div class="footer">
    <a href="/admin"
      ><span> &copy;{{ year }}Waylinc.All right reserved</span></a
    >
  </div>
</template>
<script>
// import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      usrName: "",
      email: "",
      message: "",
      phoneNumber: "",
      errorMsg: "",
      year: "2022",
      YOUR_SERVICE_ID: "",
      YOUR_TEMPLATE_ID: "",
      YOUR_USER_ID: "",
      touchContacts: [
        {
          phone: "0721107590",
          customercare: "0721107590",
          service: "Selling Etr machines",
        },
      ],

      links: [
        {
          facebook: "",
          instagram: "",
          whatsapp:
            "https://wa.me/254721107590?text=Hi carol, iam intrested in buying Etr from your website",
          twitter: "",
        },
      ],
    };
  },

  //   methods: {
  //     sendEmail() {
  //       try {
  //         emailjs.sendForm(
  //           this.YOUR_SERVICE_ID,
  //           this.YOUR_TEMPLATE_ID,
  //           this.$refs.contactform,
  //           this.YOUR_USER_ID
  //         );
  //       } catch (error) {
  //         console.log({ error });
  //       }
  //       // Reset form field
  //       this.usrName = "";
  //       this.email = "";
  //       this.message = "";
  //     },
  //   },
};
</script>
<style scoped>
@import "../style/ContactView.css";
</style>
