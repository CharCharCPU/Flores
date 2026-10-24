<script setup>
import { ref, computed } from 'vue'
import { faculty } from '../data/content'
</script>
<template>
  <div class="faculty-page-container">
    
    <section class="faculty-hero">
      <p class="small-text">Academically Knowledgeable and Here For You</p>
      <h1 class="main-title">Faculty and Staff Members</h1>
    </section>

    <section class="meet-our-people">
      <div class="people-content">
        <div class="left-title">
          <p class="small-text-dark">Teaching With A Smile</p>
          <h2>Meet Our<br>People</h2>
        </div>
        <div class="right-text">
          <p>Lorem ipsum dolor sit amet, conetur adipiscing elit Lorem ipsum dolor sit amet, cons ectetur adipiscing elit Lorem ipsum dolor sit almet, conse cteur adipiscing elit aloma lomlur off</p>
          <p>silder tolos. Lorem ipsum dolor sitlor amet, conetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>

    <section class="faculty-group">
      <h2 class="section-heading">Dean</h2>
      
      <div class="hover-card dean-card">
        <img :src="deanInfo.imageUrl" :alt="deanInfo.name">
        <div class="card-overlay">
          <h3 class="person-name">{{ deanInfo.name }}</h3>
          <p class="person-title">{{ deanInfo.title }}</p>
          
          <div class="social-icons">
            <a href="#" class="icon facebook">f</a>
            <a href="#" class="icon twitter">t</a>
            <a href="#" class="icon google">G+</a>
            <a href="#" class="icon linkedin">in</a>
          </div>
        </div>
      </div>
    </section>

    <section class="faculty-group">
      <p class="small-text-dark">Teaching as a Way of Life</p>
      <h2 class="section-heading">Department Head and Coordinators</h2>
      
      <div class="photo-grid">
        <div class="hover-card" v-for="(person, index) in departmentHeads" :key="'dh-'+index">
          <img :src="person.imageUrl" :alt="person.name">
          <div class="card-overlay">
            <h3 class="person-name">{{ person.name }}</h3>
            <p class="person-title">{{ person.title }}</p>
            <div class="social-icons">
              <a href="#" class="icon facebook">f</a>
              <a href="#" class="icon twitter">t</a>
              <a href="#" class="icon linkedin">in</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="faculty-group">
      <p class="small-text-dark">Teaching as a Way of Life</p>
      <h2 class="section-heading">Faculty</h2>
      
      <div class="photo-grid">
        <div class="hover-card" v-for="(person, index) in facultyMembers" :key="'fac-'+index">
          <img :src="person.imageUrl" :alt="person.name">
          <div class="card-overlay">
            <h3 class="person-name">{{ person.name }}</h3>
            <p class="person-title">{{ person.title }}</p>
            <div class="social-icons">
              <a href="#" class="icon facebook">f</a>
              <a href="#" class="icon twitter">t</a>
              <a href="#" class="icon linkedin">in</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="faculty-group">
      <p class="small-text-dark">Service and Teaching</p>
      <h2 class="section-heading">Staff</h2>
      
      <div class="photo-grid">
        <div class="hover-card" v-for="(person, index) in staffMembers" :key="'staff-'+index">
          <img :src="person.imageUrl" :alt="person.name">
          <div class="card-overlay">
            <h3 class="person-name">{{ person.name }}</h3>
            <p class="person-title">{{ person.title }}</p>
            <div class="social-icons">
              <a href="#" class="icon facebook">f</a>
              <a href="#" class="icon twitter">t</a>
              <a href="#" class="icon linkedin">in</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// Replace the URLs with actual links later. Me too lazy cause I can't see it

const deanInfo = {
  name: "MA. CHRISTINA A. QUIJANO, MSCS",
  title: "DEAN",
  imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
};

const departmentHeads = [
  { name: "Dept Head 1", title: "BSCS Coordinator", imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" },
  { name: "Dept Head 2", title: "BSIT Coordinator", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
  { name: "Dept Head 3", title: "BSDMIA Coordinator", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
  { name: "Dept Head 4", title: "BLIS Coordinator", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" }
];

const facultyMembers = [
  { name: "Faculty 1", title: "Assistant Professor", imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop" },
  { name: "Faculty 2", title: "Instructor", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" },
  { name: "Faculty 3", title: "Instructor", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" },
  { name: "Faculty 4", title: "Assistant Professor", imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" },
  { name: "Faculty 5", title: "Instructor", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
  { name: "Faculty 6", title: "Instructor", imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
  { name: "Faculty 7", title: "Assistant Professor", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
  { name: "Faculty 8", title: "Instructor", imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" }
];

const staffMembers = [
  { name: "Staff 1", title: "Secretary", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
  { name: "Staff 2", title: "Lab Assistant", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
  { name: "Staff 3", title: "Administrative Aide", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" },
  { name: "Staff 4", title: "Office Clerk", imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" }
];
</script>

<style scoped>
.faculty-page-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f6f9;
  padding-bottom: 5rem;
}

.small-text {
  font-size: 0.9rem;
  color: #a0a0a0;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.small-text-dark {
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.faculty-hero {
  background: linear-gradient(135deg, #222 0%, #333 100%);
  text-align: center;
  padding: 5rem 2rem;
  color: white;
}

.faculty-hero .main-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #d4af37;
  margin: 0;
}

.meet-our-people {
  background-color: #e6ebf2;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
}

.people-content {
  display: flex;
  max-width: 1000px;
  width: 100%;
  gap: 4rem;
  align-items: center;
}

.left-title {
  border-left: 2px solid #d4af37;
  padding-left: 1.5rem;
  flex: 1;
}

.left-title h2 {
  font-family: 'Georgia', serif;
  font-size: 3.5rem;
  color: #333;
  margin: 0;
  line-height: 1.1;
  font-weight: normal;
}

.right-text {
  flex: 2;
  display: flex;
  gap: 2rem;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
}

.faculty-group {
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.section-heading {
  font-family: 'Georgia', serif;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2.5rem;
  font-weight: normal;
}

.dean-card {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}

/*THE HOVER CARD EFFECT*/
.hover-card {
  position: relative;
  overflow: hidden;
  border: 3px solid #d4af37; 
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  width: 100%;
  max-width: 250px;
  aspect-ratio: 3 / 4; 
}

.hover-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.hover-card:hover img {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 45, 65, 0.85); /* Dark blue tint */
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  text-align: left;
  
  opacity: 0; 
  transition: opacity 0.3s ease;
}

.hover-card:hover .card-overlay {
  opacity: 1;
}

.person-name {
  color: #d4af37;
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
  text-transform: uppercase;
}

.person-title {
  color: #ffffff;
  font-size: 0.85rem;
  margin: 0 0 1.5rem 0;
  font-weight: 600;
  letter-spacing: 1px;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #d4af37;
  color: #333;
  border-radius: 50%;
  text-decoration: none;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  transition: background-color 0.2s, color 0.2s;
}

.social-icons .icon:hover {
  background-color: #ffffff;
  color: #1e2d41;
}

@media (max-width: 768px) {
  .people-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  
  .left-title {
    border-left: none;
    border-top: 2px solid #d4af37;
    padding-left: 0;
    padding-top: 1rem;
  }
  
  .right-text {
    flex-direction: column;
    gap: 1rem;
  }

  .faculty-hero .main-title {
    font-size: 2rem;
  }
}
</style>
