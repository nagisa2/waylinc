<template>
  <div class="about-c">
    <div class="abtContainer">
      <h1 class="hidden">What we are about</h1>
      <div class="card hide">
        <h1>What we are about</h1>
      </div>
      <div class="card shadow">
        <img src="../assets/Tims.jpg" class="cardImg" alt="Tims" />
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
      <div class="card shadow">
        <img
          src="../assets/maintenance.jpg"
          class="cardImg"
          alt="maintenance"
        />
        <div class="cardTxt">
          <h3>Annual Maintenance contract</h3>
          <p>
            This is where machines are service after a period of one year. We
            offer this service at 10% the initial cost
          </p>
          <h4>Benefits</h4>
          <p>
            Ensures that the machine is functionable for another period of one
            year and also helps in taking care of any other technical problem
          </p>
        </div>
      </div>
      <div class="card shadow">
        <img src="../assets/upgrade.jpg" class="cardImg" alt="upgrade" />
        <div class="cardTxt">
          <h3>ETR Machine Upgrade</h3>
          <p>
            We provide all the requirments for new Tims compliant & Etr Machine
            upgrade
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
  <div>
    <WhatWeOffer />
    <OtherOffer />
  </div>
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
