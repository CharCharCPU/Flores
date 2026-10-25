/*HomeView Content*/
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
        ctaLink: '/programs',
        programs: [
          {
            id: 'bsit',
            category: 'Technology',
            title: 'BS Information Technology',
            description: 'Focuses on the application of technology to solve business problems.',
            link: '/programs/information-technology',
          },
          {
            id: 'bscs',
            category: 'Computer Science',
            title: 'BS Computer Science',
            description: 'Emphasises algorithms, software engineering, and computational theory.',
            link: '/programs/computer-science',
          },
          {
            id: 'dmia',
            category: 'Multimedia Arts',
            title: 'BS Digital Media & Interactive Arts',
            description: 'A program blending creative design with interactive technologies.',
            link: '/programs/digital-media-and-interactive-arts',
          },
          {
            id: 'blis',
            category: 'Information Science',
            title: 'BS Library & Information Science',
            description: 'Prepares students for managing information resources and services.',
            link: '/programs/library-and-information-science',
          },
        ],
        pathways: [
          {
            title: 'Industry-Aligned Curriculum',
            description:
              'Follow a material through a process and ask where energy, measurement and design meet. Connect classroom theory with real-world application.',
          },
          {
            title: 'Modern Facilities',
            description:
              'Turn a sketch into a testable model, then use the result to improve the next version. Work in state-of-the-art labs and creative studios.',
          },
        ],
      })
    }, 300)
  })
}

/*About View Content*/
export const fetchAboutContent = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        history: [
          'The College of Computer Studies (CCS) began in 1995 with the birth of the Bachelor of Science in Computer Science (BSCS) program under the College of Commerce. The first batch of students was composed of two sections with about 100 students headed by Prof. Mary O’ T. Penetrante.',
          'During the first semester of AY 2001–2002, the Computer Science Department was transferred to the College of Engineering together with the newly offered Bachelor of Science in Software Engineering (BSSE) course. It was then called the Software Engineering and Computer Science (SE & CS) Department and was headed by Engr. Cirilo C. Calibjo, PEE. At the same time of the transfer, the Bachelor in Information Science and Management (BISM), the brainchild of Prof. Aquiles Sansing, was offered in the College of Commerce.',
          'At the end of school year AY 2002–2003, it was proposed that the BSCS program under the College of Engineering and the BSISM program under the College of Commerce, along with another new course, Bachelor of Science in Information Technology (BSIT), would be combined under one college. The university then approved the proposal and the College of Computer Studies began. In the first semester of AY 2003–2004, Engr. Cirilo C. Calibjo became its first Dean. The new college was housed in the Mary Thomas Building.',
          'In April 2004, two new degree courses, Master in Computer Science (MCS) and Master of Science in Computer Science (MSCS), were approved to be offered. Over the years, the college continued to grow, adapting to changes in technology and education. In 2014, the Bachelor of Science in Digital Media and Interactive Arts (BSDMIA) was established. By March 2015, a formal visit was conducted by the PAASCU, and by June of the same year, the College of Computer Studies was granted a Level 1 Status for the BSCS, BSIT, and BSIS programs.',
          'In June 2018, the Bachelor of Science in Library and Information Science migrated to the College of Computer Studies. The college continues to strive for excellence, receiving a 5-year Level 1 re-accredited status from PAASCU in September 2019.',
        ],
        vision:
          'The College of Computer Studies is founded on the vision of academic excellence in Information Technology Education and responsive to the needs of the total person and the world.',
        mission:
          'A College of the future with a mission to educate students with the Christian principles and practices of computer studies, preparing them to advance studies, careers in software development, computing systems technology, information management, and for a lifetime learning.',
        qualityPolicy:
          'To fulfill the mission and realize the vision of Central Philippine University, we commit to consistently provide superior quality services by integrating Christian values, academic excellence, highest level of professionalism, and quality consideration in every aspect of our operations.',
        deanMessage: {
          paragraphs: [
            'In every school year for the College of Computer Studies, we look forward with great anticipation to the contributions the new class will make to campus life. In both the aspect of academic and non-academic, each student is unique enough to achieve whatever they want to reach for in our college.',
            'The primary focus of CCS is teaching and learning. Our undergraduates are encouraged to think about their education as a whole, rather than just a term taken one thing at a time, and the different faculty members work with them not only during the start of the school year, but throughout the whole as well.',
            'Learning and growth with us does not always come in classroom and academic experiences. Other kinds of opportunities abound, not the least of them the daily occasions for friendship and fellowship with people from many different backgrounds and with a wide variety of interests. In addition, students participate in rich and varied extracurricular activities that the College and University has got to offer.',
            'As another year starts, a new challenge comes for each and everyone with us. Take this into your mind and hearts and be able to reach the dream that you have ever dreamt to succeed. Welcome dear students and have a great school year ahead of you.',
          ],
          signature: 'The Dean',
          role: 'College of Computer Studies',
        },
        linkages: [
          {
            title: 'CISCO Networking Academy',
            description:
              'As a certified academy, we provide industry-standard networking curriculum and hands-on laboratory experience to prepare students for global certifications.',
          },
          {
            title: 'ORACLE Academic Initiative',
            description:
              'We are a member of the Oracle Academic Initiative, offering students access to enterprise-grade database technologies and specialized training.',
          },
          {
            title: 'Student Organizations',
            description:
              'Fostering leadership and camaraderie through active student bodies including the CCSPC, Computer Science Society (CSS), Information Technology Students Organization (ITSO), and MIDAS.',
          },
        ],
      })
    }, 300)
  })
}

/*ProgramsView Content*/
export const fetchAllPrograms = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'bsit',
          category: 'Technology',
          title: 'BS Information Technology',
          description:
            'Focuses on the application of technology to solve business problems. Covers networking, database management, web development, and cybersecurity.',
          link: '/programs/information-technology',
        },
        {
          id: 'bscs',
          category: 'Computer Science',
          title: 'BS Computer Science',
          description:
            'Emphasises algorithms, software engineering, and computational theory. Prepares students for advanced software development and AI research.',
          link: '/programs/computer-science',
        },
        {
          id: 'bsdmia',
          category: 'Multimedia Arts',
          title: 'BS Digital Media & Interactive Arts',
          description:
            'A program blending creative design with interactive technologies. Includes digital storytelling, game development, and UX/UI design.',
          link: '/programs/digital-media-and-interactive-arts',
        },
        {
          id: 'blis',
          category: 'Information Science',
          title: 'BS Library & Information Science',
          description:
            'Prepares students for managing information resources and services. Covers cataloguing, digital libraries, and archival studies.',
          link: '/programs/library-and-information-science',
        },
      ])
    }, 300)
  })
}

/*BS DMIA Content*/
export const fetchProgramDetails = (programCode) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const programs = {
        bsdmia: {
          hero: {
            title: 'Digital Media and Interactive Arts',
            description:
              'The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies.',
            buttons: {
              primary: 'Objectives',
              secondary: 'Campus Life',
            },
            logo: {
              image: new URL('@/assets/CPU-MIDAS.png', import.meta.url).href,
              title: 'MODERN INTERACTIVE DIGITAL ARTISTS SOCIETY',
            },
          },
          objectives: [
            'Exhibit skills, knowledge and leadership to excel in their information technology careers and related discipline.',
            'Exhibit high standard of professionalism who are effective members of multi-discipline development teams.',
            'Involved in scholarly activities, research and outreach that contributes to the improvement and transformation of society.',
            'Demonstrate ethical, professional, spiritual values, and social responsibility associated with their Information Technology careers and related professions.',
            'Exhibit proficiency in the use of traditional and digital media arts, designing, developing and implementing digital media solutions in fields of entertainment and corporate environments.',
          ],
          outcomes: {
            header: 'Based on CHED Memo Order No. 25 s. 2015 Effective: Academic Year 2018-2019',
            intro: 'The graduates have the ability to:',
            list: [
              '<strong>a)</strong> articulate and discuss the latest developments in the specific field of practice. (Philippine Qualifications Framework (PQF) level 6 descriptor) (Graduate Outcomes: CS 10, IS 10, IT13).',
              '<strong>b)</strong> effectively communicate orally and in writing using both English and Filipino (Graduate Outcomes: CS08, 1508, IT10).',
              '<strong>c)</strong> work effectively and independently in multi-disciplinary and multi-cultural teams. (PQF level 6 descriptor) (Graduate Outcomes: CS07, ISO?, IT08).',
              '<strong>d)</strong> act in recognition of professional, social and ethical responsibility (Graduate Outcomes: CS09, 1509, IT12).',
              '<strong>e)</strong> preserve and promote "Filipino historical and cultural heritage" (based on RA 7722).',
            ],
          },
          rationale: {
            title1: 'Curriculum Rationale',
            text1:
              'The Bachelor of Science in Digital Media and Interactive Arts (BSDMIA) program is offered based on CMO 19 s 2016 article iii section 11 which states that an autonomous institution has the privilege to offer new course(s)/program(s) in the undergraduate and/or graduate levels. Along with this is the effect of technology in the field of arts and other art related careers. Careers in the field of information technology education (ITE) has expanded in the area of art. This has long been integrated in the ITE programs when multimedia was considered as one of its free elective course. As defined in the animation career review site, interactive arts and media discipline combines the elements of arts, design and technology. Artist in the field typically have advanced skills in the areas of visual design, digital storytelling, time-based media, and shaping interactive experiences. Such is applied in animation to mobile communications to video games. In the program the students are introduced to industry standard tools applications in video editing, animation, 3d modeling, photography, graphic design, video game design and virtual reality. Graduates of the program can have careers in advertising agencies, game design companies, pre- and post – production houses, graphic design firms, art studios, mobile communication companies, magazines, publishers, and web design companies. They can be animator, graphic designer, game designer, web designer, multi-media artist, advertising executive, art director, digital artists, and freelance artist.',
            title2: 'Curriculum Description',
            text2:
              'The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies. It is designed to developing creative talents for a variety of applied arts industries, including but not limited to the entertainment, education, advertising and commercials, films and corporate communications sectors. The structure of the course enable students from different disciplines to collaborate and work together to produce the best artworks acceptable to the industry standards. Students will undergo training and education to enhance their skills with the talent-centric curriculum for the high-end digital media industry.',
          },
          organization: {
            name: 'Modern Interactive Digital Artists Society (MIDAS)',
            description:
              'The Modern Interactive Digital Artists Society mission is to help the BSDMIA students develop a sense of artistic self-identity and to support and conduct exhibits and outreach activities to increase public awareness to extend the part of technology and its impact to the society; To be the official organization of the Bachelor of Science in Digital Media and Interactive Arts that embodies all the students enrolled in this course under the College of Computer Studies.',
          },
          graduateOutcomes: [
            {
              code: 'DMIA01',
              description:
                'Apply knowledge of mathematics, digital media arts exhibit and management, and digital media creation, delivery and consumption appropriate to the field of practice in compliance to established standards and best practices.',
            },
            {
              code: 'DMIA02',
              description:
                'Identify user requirements leading to design selection, digital media art creation, evaluation and delivery of digital media- and interactive arts-based solutions.',
            },
            {
              code: 'DMIA03',
              description: 'Design, merge and bridge traditional arts with digital media.',
            },
            {
              code: 'DMIA04',
              description:
                'Deliver and implement creations, and evaluate digital media consumption in entertainment and corporate environments effectively.',
            },
            {
              code: 'DMIA05',
              description:
                'Demonstrate the use of current techniques, skills, tools and practices.',
            },
            {
              code: 'DMIA06',
              description:
                'Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary settings.',
            },
            {
              code: 'DMIA07',
              description:
                'Recognize professional, ethical, legal, security, and social issues and responsibility.',
            },
            {
              code: 'DMIA08',
              description: 'Socially communicate effectively with a diverse audience.',
            },
            { code: 'DMIA09', description: 'Identify contemporary practices and issues.' },
            {
              code: 'DMIA10',
              description:
                'Recognize the need for and engage in planning self-learning and improving performance as a foundation for continuing professional development.',
            },
          ],
        },
      }
      resolve(programs[programCode] || null)
    }, 300)
  })
}
