import { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  // Sort projects: featured first, then by id
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.id - b.id;
  });

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Projects"
          subtitle="A selection of my work spanning professional and personal projects"
        />

        <Grid container spacing={3}>
          {sortedProjects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <ProjectCard
                project={project}
                onClick={() => handleOpenModal(project)}
              />
            </Grid>
          ))}
        </Grid>

        <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onClose={handleCloseModal}
        />
      </Container>
    </Box>
  );
};

export default Projects;
