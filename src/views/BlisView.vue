<script setup>
import { fetchProgramDetails } from '@/backend'
</script>

<template>
  <div class="bscs-page-container">
    <header class="hero-section">
      <div class="bg-shape shape-gold"></div>
      <div class="bg-shape shape-dark-green"></div>

      <div class="hero-content">
        <div class="hero-text">
          <h1>Library and Information Science</h1>
          <p>
            The Degree of Bachelor of Library and Information Science (BLIS) is a four-year program
            that prepares students in the development, deployment, and management of information
            resources in print, non-print, electronic, and digital formats.
          </p>

          <div class="hero-buttons">
            <a href="#objectives" class="btn btn-dark"><i class="fas fa-list"></i> Objectives</a>
            <a href="#society" class="btn btn-green"><i class="fas fa-users"></i> Campus Life</a>
          </div>
        </div>

        <div class="hero-logo">
          <img src="../assets/CPU-Lisso.jpg" alt="Library and Information Science Logo" />
          <h3>LIBRARY AND INFORMATION SCIENCE</h3>
        </div>
      </div>
    </header>

    <div class="content-wrapper">
      //PROGRAM EDUCATIONAL OBJECTIVES
      <section id="objectives" class="section-block">
        <h2 class="section-title">PROGRAM EDUCATIONAL OBJECTIVES</h2>

        <div class="text-content">
          <ol>
            <li>
              Exhibit skills, knowledge and leadership to excel in their information technology
              careers and related discipline.
            </li>
            <li>
              Exhibit high standard of professionalism who are effective members of multi-discipline
              development teams.
            </li>
            <li>
              Involved in scholarly activities, research and outreach that contributes to the
              improvement and transformation of society.
            </li>
            <li>
              Demonstrate ethical, professional, spiritual values, and social responsibility
              associated with their Information Technology careers and related professions.
            </li>
            <li>
              Exhibit proficiency in the use of traditional and digital media arts, designing,
              developing and implementing digital media solutions in fields of entertainment and
              corporate environments.
            </li>
          </ol>
        </div>

        <!-- Anchor Links List -->
        <ul class="anchor-links">
          <li><a href="#outcomes">Program Outcomes</a></li>
          <li><a href="#rationale">Curriculum Rationale</a></li>
          <li><a href="#description">Curriculum Description</a></li>
          <li><a href="#society">Student Organization</a></li>
          <li><a href="#graduate-outcomes">Graduate Outcomes</a></li>
        </ul>
      </section>

      <!-- 3. PROGRAM OUTCOMES -->
      <section id="outcomes" class="section-block">
        <h2 class="section-title">PROGRAM OUTCOMES</h2>

        <h3 class="sub-title">The graduates have the ability to</h3>
        <div class="text-content">
          <p>
            a) articulate and discuss the latest developments in the specific field of practice.
            <em
              >(Philippine Qualifications Framework (PQF) level 6 descriptor) (Graduate Outcomes: CS
              10, IS 10, IT13).</em
            >
          </p>
          <p>
            b) effectively communicate orally and in writing using both English and Filipino
            <em>(Graduate Outcomes: CS08, 1508, IT10).</em>
          </p>
          <p>
            c) work effectively and independently in multi-disciplinary and multi-cultural teams.
            <em>(PQF level 6 descriptor) (Graduate Outcomes: CS07, ISO7, IT08).</em>
          </p>
          <p>
            d) act in recognition of professional, social and ethical responsibility
            <em>(Graduate Outcomes: CS09, 1509, IT12)</em>
          </p>
          <p>
            e) preserve and promote "Filipino historical and cultural heritage"
            <em>(based on RA 7722).</em>
          </p>
        </div>

        <h3 class="sub-title">The graduates of BSCS, BSIS, and BSIT must have the ability to</h3>
        <div class="text-content">
          <p>
            a) analyze complex problems, and identify and define the computing requirements needed
            to design an appropriate solution <em>(Graduate Outcomes: CS02, 1502-03, IT03).</em>
          </p>
          <p>
            b) apply computing and other knowledge domains to address real-world problems
            <em>(Graduate Outcomes: CS0 1, 1501, IT01).</em>
          </p>
          <p>
            c) design and develop computing solutions using a system-level perspective
            <em>(Graduate Outcomes: CS03-05, 1504-05, IT05).</em>
          </p>
          <p>d) utilize modern computing tools <em>(Graduate Outcomes: CSOS, ISOS, IT07).</em></p>
        </div>
      </section>

      //CURRICULUM RATIONALE
      <section id="rationale" class="section-block">
        <div class="ched-header">
          <h3>Based on CHED Memo Order No. 25 s. 2015</h3>
          <p>Effective: Academic Year 2018-2019</p>
        </div>

        <h3 class="sub-title">Curriculum Rationale:</h3>
        <p class="text-content">
          Based on the Guidelines for the Implementation of CMO 46 s. 2012, this PSG implements the
          “shift to learning competency-based standards/outcomes-based education”. It specifies the
          “core competencies” expected of Bachelor of Library and Information Science (BLIS)
          graduates regardless of the type of HEI they graduate from. However, in recognition of the
          spirit of outcomes-based education-which puts premium in the achievement of learning
          outcomes through different strategies-and in recognition of the typology of HEIs, this PSG
          also provides ample space for HEIs to innovate in the curriculum, in line with the
          assessment of how best to achieve learning outcomes in their particular contexts and their
          respective missions. Policies and standards int he Library and Information Science (LIS)
          program are necessary for the highest level of quality desired for the education and
          training of library and information science professionals. They are meant to
          institutionalize the profession’s central function of providing quality information
          service to library/information center clientele or users. Its purpose is to make LIS
          education responsive to the challenges of society’s changing information needs brought
          about by rapid technological changes and in keeping with the need to make LIS
          professionals globally competitive.
        </p>
      </section>

      //CURRICULUM DESCRIPTION
      <section id="description" class="section-block">
        <h3 class="sub-title">Curriculum Description:</h3>
        <ul class="custom-bullets">
    
          <li>
            The BLIS curriculum is designed to equip the professional with the composite knowledge,
            skills, attitudes, and tools to enable him/her to be responsive to the changing
            information needs of society.
          </li>
        </ul>
      </section>


      <section id="society" class="society-section">
        <!-- This section mimics the diagonal background split -->
        <div class="society-bg-gold"></div>
        <div class="society-bg-dark"></div>

        <div class="society-content">
          <div class="society-logo">
            <img src="../assets/CPU-Lisso.jpg" alt="Library and Information Science Logo" />
            <h3>Library and Information Science</h3>
          </div>
          <div class="society-text">
            <p>
              The embodiment of Library and Information Science students is enriched through camaraderie as
              they strengthen their bonds with each year level. Through different outreach
              activities and as well as the college and university, the members of this organization
              gets to meet and gather ideas to come up and be able to fulfill the mission of this
              organization, thus, giving them ample knowledge that could help them build a better
              personality through working together.
            </p>
          </div>
        </div>
      </section>


      <section id="graduate-outcomes" class="section-block">
        <h2 class="section-title">Bachelor of Science in Library and Information Systems (BLIS)</h2>

        <div class="table-responsive">
          <table class="outcomes-table">
            <thead>
              <tr>
                <th>Graduate Outcomes Code</th>
                <th>Graduate Outcomes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LIS01</td>
                <td>
                  Select, evaluate, organize and disseminate print, multimedia, electronic and digital information resources.
                </td>
                </tr>
                <tr>

                <td>LIS02</td>
                <td>Effectively communicate orally and in writing, at the same time, use a variety of    communication methods in a manner that best enables the message to be understood.</td>
              </tr>
              <tr>
                <td>LIS03</td>
                <td>Demonstrate logical and systematic approaches to the accomplishment of tasks.</td>
              </tr>
              <tr>
                <td>LIS04</td>
                <td>
                  Formulate objectives, policies and processes as well as design and manage resources in anticipation of future educational or organizational changes.
                </td>
              </tr>
              <tr>
                <td>LIS05</td>
                <td>
                  Recognize, analyze and constructively solve problems, provide appropriate      direction and assistance, and overcome barriers when necessary.
                </td>
              </tr>
              <tr>
                <td>LIS06</td>
                <td>
                  Identify users’ needs and wants through reference interviews, customer surveys,      complaint logs and other means in order to evaluate the effectiveness of current      services and improve these and other practices.
                </td>
              </tr>
              <tr>
                <td>LIS07</td>
                <td>
                  Work well in groups and seek ways to build team efforts to solve problems and achieve common goals.
                </td>
              </tr>
              <tr>
                <td>LIS08</td>
                <td>
                  Understand library’s automation system and the use of computer hardware,      software and peripherals, including online collaboration tools (the internet, the      worldwide web, and social networking sites).
                </td>
              </tr>
              <tr>
                <td>LIS09</td>
                <td>
                  Develop information technology solutions (e.g., library automation system, Website, e-mail system, etc.).
                </td>
              </tr>
              <tr>
                <td>LIS10</td>
                <td>
                  Conduct significant research projects that will benefit the library and the organization.
                </td>
              </tr>
              <tr>
                <td>LIS11</td>
                <td>
                  Evaluate and debate information policy (e.g., copyright law, plagiarism, cybercrimes, etc.) and ethical issues applicable in local, national or global context.
                </td>
              </tr>
              <tr>
                <td>LIS12</td>
                <td>
                  Participate in continuing education activities organized by library associations and    other entities
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.bscs-page-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #ffffff;
  background-color: #0a1f1e;
  scroll-behavior: smooth;
}

/*HERO SECTION*/
.hero-section {
  position: relative;
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #0a1f1e;
  padding-top: 80px;
}

.bg-shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.shape-gold {
  background-color: #fca311;
  clip-path: polygon(0 0, 100% 0, 30% 100%, 0 100%);
  z-index: 2;
}

.shape-dark-green {
  background-color: #071514;
  clip-path: polygon(100% 0, 100% 100%, 30% 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
}

.hero-text {
  flex: 1;
  color: white;
  max-width: 600px;
}

.hero-text h1 {
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.hero-text p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #064d1d;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  transition: opacity 0.3s;
}

.btn:hover {
  opacity: 0.9;
}

.btn-dark {
  background-color: #fca311;
  color: #0a1f1e;
}

.btn-green {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-logo {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
}

.hero-logo img {
  width: 150px;
  height: 150px;
  padding: 12px;
  background-color: #ffffff;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 10px;
}

.hero-logo h3 {
  font-weight: 600;
  letter-spacing: 1px;
}

/*CONTENT WRAPPER & SECTIONS*/
.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: #0a1f1e;
}

.section-block {
  margin-bottom: 4rem;
}

.section-title {
  text-align: center;
  font-size: 1.5rem;
  color: #fca311;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sub-title {
  font-size: 1.1rem;
  color: #ffffff;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.text-content {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #a0aab2;
}

.text-content p {
  margin-bottom: 1rem;
}

.text-content ol {
  padding-left: 1.5rem;
}

.text-content ol li {
  margin-bottom: 0.5rem;
}

.anchor-links {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 2rem;
}

.anchor-links li a {
  color: #fca311;
  text-decoration: none;
  font-size: 0.9rem;
}

.anchor-links li a:hover {
  text-decoration: underline;
}

.ched-header {
  text-align: center;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #ffffff;
}

.custom-bullets {
  padding-left: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #a0aab2;
}

.custom-bullets > li {
  margin-bottom: 1rem;
}

.sub-bullets {
  list-style-type: none;
  padding-left: 1rem;
  margin-top: 0.5rem;
  border-left: 2px solid rgba(255, 255, 255, 0.1);
}

.sub-bullets li {
  margin-bottom: 0.3rem;
}

/*SOCIETY SECTION*/
.society-section {
  position: relative;
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 4rem 0;
  background-color: #071514;
}

.society-bg-gold {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fca311;
  clip-path: polygon(0 0, 50% 0, 20% 100%, 0 100%);
  z-index: 1;
}

.society-bg-dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #071514;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 20% 100%);
  z-index: 1;
}

.society-content {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  padding: 0 2rem;
  gap: 4rem;
}

.society-logo {
  flex: 1;
  text-align: center;
  color: #ffffff;
}

.society-logo img {
  width: 180px;
  margin-bottom: 1rem;
  border-radius: 10px;
  padding: 12px;
  background-color: #ffffff;
  object-fit: contain;
}

.society-text {
  flex: 2;
  color: #ffffff;
  font-size: 0.95rem;
  line-height: 1.6;
}

/*TABLE SECTION*/
.table-responsive {
  overflow-x: auto;
}

.outcomes-table {
  width: 100%;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.outcomes-table th,
.outcomes-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  line-height: 1.5;
  color: #a0aab2;
}

.outcomes-table th {
  background-color: rgba(255, 255, 255, 0.05);
  font-weight: 600;
  color: #ffffff;
  width: 20%;
}

.outcomes-table td:first-child {
  font-weight: bold;
  color: #fca311;
}

/*Mobile Responsiveness*/
@media (max-width: 900px) {
  .hero-content,
  .society-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .bg-shape,
  .society-bg-gold,
  .society-bg-dark {
    clip-path: none;
    height: 50%;
  }

  .shape-dark-green {
    top: 50%;
  }
  .society-bg-dark {
    top: 50%;
  }
}
</style>
