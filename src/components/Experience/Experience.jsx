import { Box, Container } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import Timeline from './Timeline';
import { experience } from '../../data/experience';

const Experience = () => {
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and key achievements"
        />
        <Timeline items={experience} />
      </Container>
    </Box>
  );
};

export default Experience;
