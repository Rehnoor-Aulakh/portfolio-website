const numberedImages = (folder, count, extension = 'png') =>
  Array.from({ length: count }, (_, index) => `/${folder}/${index + 1}.${extension}`)

export const projects = [
  { id: 'project-one', folder: 'project1', imageCount: 7, title: 'A considered digital presence', category: 'Brand experience', description: 'A focused visual system for a product that needed clarity, confidence, and room to grow.', technologies: ['React', 'Tailwind CSS', 'Responsive UI'], liveUrl: null },
  { id: 'project-two', folder: 'project2', imageCount: 2, title: 'A storefront with momentum', category: 'E-commerce', description: 'A warm, easy-to-navigate shopping experience that keeps the product and the story in view.', technologies: ['React', 'JavaScript', 'UI Design'], liveUrl: null },
  { id: 'project-three', folder: 'project3', imageCount: 3, title: 'A sharper way to work', category: 'Product interface', description: 'A practical interface shaped around hierarchy, useful motion, and the details people use every day.', technologies: ['React', 'Tailwind CSS', 'Design systems'], liveUrl: null },
  { id: 'project-four', folder: 'project4', imageCount: 5, title: 'A story worth staying with', category: 'Editorial platform', description: 'A flexible reading experience with a stronger rhythm between content, context, and discovery.', technologies: ['React', 'Content design', 'Interaction'], liveUrl: null },
].map((project) => ({ ...project, images: numberedImages(project.folder, project.imageCount) }))

export const team = [
  { name: 'Rehnoor Aulakh', role: 'Creative developer', initials: 'RA', description: 'I turn thoughtful ideas into responsive, human-feeling digital experiences.', linkedin: '#contact', github: '#contact' },
  { name: 'Your creative partner', role: 'Design and strategy', initials: 'CP', description: 'A flexible second perspective for shaping the story, structure, and visual direction.', linkedin: '#contact', github: '#contact' },
]

export const services = [
  { number: '01', title: 'Web design', description: 'Clear layouts, expressive details, and a visual system that feels like you.' },
  { number: '02', title: 'Frontend development', description: 'Fast, responsive React builds that feel polished across every screen size.' },
  { number: '03', title: 'Creative direction', description: 'A steady hand for shaping the content, flow, and point of view of a project.' },
]

export const processSteps = [
  ['01', 'Listen', 'We get close to the idea, the audience, and the feeling the work should leave behind.'],
  ['02', 'Shape', 'We turn that understanding into a clear direction, structure, and visual language.'],
  ['03', 'Make', 'We build, refine, and test the details until the experience feels effortless to use.'],
]
