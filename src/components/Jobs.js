import React, { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: 'Service Desk Analyst - L1',
    company: 'Wipro',
    location: 'Bengaluru',
    skills: 'Customer Experience, IT Service Desk, Service Desk, TI, MIS, C++, C, Housekeeping',
    contact: 'hr@wipro.com',
    description: 'Customer service • IT service desk • Service desk • TI • MIS • C++ • C • Housekeeping',
    posted: '2 Days Ago'
  },
  {
    id: 2,
    title: 'Service Desk Analyst 1',
    company: 'Wipro',
    location: 'Pune, Bengaluru',
    skills: '0365, Active Directory, Service Desk, Desk, Directory',
    contact: 'jobs@wipro.com',
    description: 'Flexible and open to working in a 24x7 environment with rotating shifts and rotation.',
    posted: '4 Days Ago'
  },
  {
    id: 3,
    title: 'Devops Engineer',
    company: 'Medilogy Software',
    location: 'Gurugram',
    skills: 'Linux, AWS, GIT, CI/CD, Bash, GCP Services, Python, GCP',
    contact: 'careers@medilogy.com',
    description: 'Seeking a motivated DevOps Intern with basic AWS/GCP knowledge and interest.',
    posted: '3 Days Ago'
  },
  {
    id: 4,
    title: 'Frontend Developer',
    company: 'Tech Innovators',
    location: 'Remote',
    skills: 'React, JavaScript, CSS',
    contact: 'hr@techinnovators.com',
    description: 'Develop and maintain web applications using React.',
    posted: '1 Day Ago'
  },
  {
    id: 5,
    title: 'Backend Engineer',
    company: 'Cloud Solutions',
    location: 'San Francisco, CA',
    skills: 'Node.js, Express, MongoDB',
    contact: 'jobs@cloudsolutions.com',
    description: 'Build scalable backend services and APIs.',
    posted: '5 Days Ago'
  },
  {
    id: 6,
    title: 'QA Tester',
    company: 'Quality Minds',
    location: 'Hyderabad',
    skills: 'Manual Testing, Selenium, Automation',
    contact: 'qa@qualityminds.com',
    description: 'Test web and mobile applications for quality assurance.',
    posted: 'Today'
  },
  {
    id: 7,
    title: 'UI/UX Designer',
    company: 'Design Studio',
    location: 'Mumbai',
    skills: 'Figma, Sketch, Adobe XD',
    contact: 'design@designstudio.com',
    description: 'Design user interfaces and experiences for web and mobile apps.',
    posted: '2 Days Ago'
  },
  {
    id: 8,
    title: 'Data Analyst',
    company: 'Data Insights',
    location: 'Chennai',
    skills: 'SQL, Python, Data Visualization',
    contact: 'jobs@datainsights.com',
    description: 'Analyze data and generate business insights.',
    posted: 'Yesterday'
  }
];

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <div>
      <h1>New Jobs</h1>
      <div style={{ display: 'flex' }}>
        <ul style={{ minWidth: 260, maxHeight: 400, overflowY: 'auto', borderRight: '1px solid #eee', padding: 0, margin: 0 }}>
          {jobs.map(job => (
            <li
              key={job.id}
              style={{
                cursor: 'pointer',
                margin: 0,
                padding: '16px 20px',
                background: selectedJob.id === job.id ? '#f0f4ff' : 'transparent',
                fontWeight: selectedJob.id === job.id ? 'bold' : 'normal',
                borderBottom: '1px solid #f5f5f5',
                listStyle: 'none',
                transition: 'background 0.2s'
              }}
              onClick={() => setSelectedJob(job)}
            >
              <div style={{ fontSize: '1.1rem' }}>{job.title}</div>
              <div style={{ color: '#888', fontSize: '0.95rem' }}>{job.company}</div>
              <div style={{ color: '#aaa', fontSize: '0.85rem' }}>{job.location}</div>
            </li>
          ))}
        </ul>
        <div style={{ marginLeft: 32, flex: 1 }}>
          <h2>{selectedJob.title}</h2>
          <p><strong>Company:</strong> {selectedJob.company}</p>
          <p><strong>Location:</strong> {selectedJob.location}</p>
          <p><strong>Skills:</strong> {selectedJob.skills}</p>
          <p><strong>Contact:</strong> {selectedJob.contact}</p>
          <p><strong>Posted:</strong> {selectedJob.posted}</p>
          <p>{selectedJob.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
