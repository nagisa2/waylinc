<template>
  <div class="aboutContainer">
    <div class="aboutCard">
      <div class="txt">
        <h1>What we deal with</h1>
      </div>
      <div class="Card">
        <img scr="" class="abtImg" />
        <div class="cardTxt">
          <h3>Tax Invoice Management System(TIMS)</h3>
          <p>
            This are upgrades of the current Electronic Tax Register(ETR) regime
            that was rolled out in 2005.
          </p>
          <h4>Uses</h4>
          <p>
            Facilitates electonic tax invoice management through
            standardization,validation and transmission of invoices to KRA on
            near real/real time basis
          </p>
        </div>
      </div>
      <div class="Card">
        <img scr="" class="abtImg" />
        <div class="cardTxt">
          <h3>Annual Maintenance contract</h3>
          <p>
            This is where mashines are serveiced after a period of one year. We
            offer this service at 10% the initial cost
          </p>
          <h4>Benefits</h4>
          <p>
            Ensures that the mashine is functionable for another period of one
            year and also helps in taking care of any other technical problem
          </p>
        </div>
      </div>
      <div class="Card">
        <img scr="" class="abtImg" />
        <div class="cardTxt">
          <h3>ETR Mashine Upgrade</h3>
          <p>
            We provide all the requirments fot new Tims compliant & Etr Mashine
            uppgrade
          </p>
          <h4>Uses</h4>
          <p>
            Facilitates electonic tax invoice management through
            standardization,validation and transmission of invoices to KRA on
            near real/real time basis
          </p>
        </div>
      </div>
    </div>
  </div>
  <OtherOffer />
  <WhatWeOffer />
</template>
<script>
import OtherOffer from "../components/OtherOffer.vue";
import WhatWeOffer from "../components/WhatWeOffer.vue";
export default {
  components: {
    OtherOffer,
    WhatWeOffer,
  },
  data() {
    return {};
  },
};
</script>
<style scope>
@import "../style/AboutView.css";
</style>
