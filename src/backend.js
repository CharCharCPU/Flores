export const fetchHomeContent = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        subtitle: 'the CCS core practices that build bridges between gaps',
        corePractices: ['REMEMBER', 'CONNECT', 'ENGAGE', 'BUILD', 'SHARE'],
        tagline: {
          part1: 'different ',
          highlight1: 'PEOPLE',
          part2: ', ',
          highlight2: 'ONE',
          part3: ' goal',
        },
        ctaText: 'Your FUTURE begins HERE',
        ctaLink: '/about',
      })
    }, 300)
  })
}

/**
 * Simulates an asynchronous fetch for the About page.
 */
export const fetchAboutContent = () => {
  // ... keep your existing About content here ...
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        mission: 'To provide quality education in computing and information sciences.',
        vision: 'To be a center of excellence in technology education and research.',
        practices: [
          'Student-centered learning',
          'Industry partnerships',
          'Community engagement',
          'Continuous improvement',
        ],
      })
    }, 300)
  })
}

/**
 * Simulates fetching details for a specific program.
 * @param {string} programCode - e.g., 'bsdmia', 'bsit', 'bscs', 'blis'
 */
export const fetchProgramDetails = (programCode) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const programs = {
        bsdmia: {
          title: 'BS Digital Media and Interactive Arts',
          description: 'A program blending creative design with interactive technologies.',
          curriculum: [
            'Digital Storytelling',
            'Interactive Media Design',
            'Game Development',
            'Visual Communication',
          ],
          careers: ['Multimedia Designer', 'Game Developer', 'UX/UI Designer', 'Digital Artist'],
        },
        bsit: {
          title: 'BS Information Technology',
          description: 'Focuses on the application of technology to solve business problems.',
          curriculum: ['Networking', 'Database Management', 'Web Development', 'Cybersecurity'],
          careers: [
            'IT Support Specialist',
            'Network Administrator',
            'Web Developer',
            'Cybersecurity Analyst',
          ],
        },
        bscs: {
          title: 'BS Computer Science',
          description: 'Emphasises algorithms, software engineering, and computational theory.',
          curriculum: [
            'Data Structures',
            'Algorithms',
            'Operating Systems',
            'Artificial Intelligence',
          ],
          careers: ['Software Engineer', 'Data Scientist', 'Systems Analyst', 'AI Researcher'],
        },
        blis: {
          title: 'BS Library and Information Science',
          description: 'Prepares students for managing information resources and services.',
          curriculum: [
            'Cataloguing',
            'Information Retrieval',
            'Digital Libraries',
            'Archival Studies',
          ],
          careers: ['Librarian', 'Information Architect', 'Records Manager', 'Digital Archivist'],
        },
      }
      resolve(programs[programCode] || null)
    }, 300)
  })
}
