<script setup>
import { reactive, ref } from 'vue'
import { contact } from '../data/content'
</script>

<template>
  <div class="contact-page-container">
    
    <section class="contact-header-section">
      <div class="dark-bg">
        <p class="small-text">We Will Gladly Assist You</p>
        <h1 class="main-title">Contact Details</h1>
      </div>

      <div class="info-bg">
        <div class="info-grid">
          
          <div class="info-card">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#d4af37"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            </div>
            <h3>Telephone</h3>
            <p>329-1971 local 1094</p>
          </div>

          <div class="info-card">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#d4af37"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            </div>
            <h3>CPU Mail</h3>
            <p>ccssec@cpu.edu.ph</p>
          </div>

          <div class="info-card">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#d4af37"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
            </div>
            <h3>Social Media</h3>
            <p>College of Computer Studies - CPU</p>
          </div>

        </div>
      </div>
    </section>

    <section class="map-section">
      <iframe 
        src="https://www.google.com/maps/place/Central+Philippine+University/@10.731395,122.5443325,796m/data=!3m1!1e3!4m10!1m2!2m1!1sMary+Thomas+Hall+Central+Philippine+University+Lopez+Jaena,+St.,+Jaro,+Iloilo+City!3m6!1s0x33aee4d82b80eef7:0x1c5b598c2f3b43aa!8m2!3d10.731395!4d122.5469074!15sClJNYXJ5IFRob21hcyBIYWxsIENlbnRyYWwgUGhpbGlwcGluZSBVbml2ZXJzaXR5IExvcGV6IEphZW5hLCBTdC4sIEphcm8sIElsb2lsbyBDaXR5WlAiTm1hcnkgdGhvbWFzIGhhbGwgY2VudHJhbCBwaGlsaXBwaW5lIHVuaXZlcnNpdHkgbG9wZXogamFlbmEgc3QgamFybyBpbG9pbG8gY2l0eZIBEnJlc2VhcmNoX2luc3RpdHV0ZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSS2RHVnVYMWRCRUFF4AEA-gEECAAQJg!16zL20vMDZ3c2Zq?hl=en-US&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D" 
        width="100%" 
        height="100%" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </section>

  </div>
</template>

<script setup>
</script>

<style scoped>
.contact-page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.contact-header-section {
  display: flex;
  flex-direction: column;
}

.dark-bg {
  background: linear-gradient(135deg, #1e3a5f 0%, #2a4e7a 100%);
  text-align: center;
  padding: 4rem 2rem;
  color: white;
}

.small-text {
  font-size: 0.9rem;
  color: #e0e0e0;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #d4af37; 
  margin: 0;
}

.info-bg {
  background-color: #e6ebf2; 
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
  text-align: center;
}

.info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
}

.icon-wrapper svg {
  width: 100%;
  height: 100%;
}

.info-card h3 {
  color: #d4af37; 
  font-size: 1.1rem;
  margin: 0.5rem 0;
  font-weight: 600;
}

.info-card p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.map-section {
  width: 100%;
  height: 50vh; 
  min-height: 400px;
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr; 
    gap: 3rem;
  }
  
  .main-title {
    font-size: 2rem;
  }
}
</style>
