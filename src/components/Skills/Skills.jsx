import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import DnsIcon from '@mui/icons-material/Dns';
import SectionTitle from '../common/SectionTitle';
import SkillCard from './SkillCard';
import { skills } from '../../data/skills';

const categoryConfig = {
  languages: { title: 'Languages', icon: CodeIcon },
  frontend: { title: 'Frontend', icon: WebIcon },
  backend: { title: 'Backend', icon: DnsIcon },
  databases: { title: 'Databases', icon: StorageIcon },
  cloud: { title: 'Cloud & DevOps', icon: CloudIcon },
  tools: { title: 'Tools & Methods', icon: BuildIcon },
};

const Skills = () => {
  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <Grid container spacing={3}>
          {Object.entries(skills).map(([category, skillList]) => {
            const config = categoryConfig[category];
            const IconComponent = config?.icon || CodeIcon;

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    border: 1,
                    borderColor: 'divider',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <IconComponent sx={{ color: 'primary.main' }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {config?.title || category}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {skillList.map((skill, index) => (
                      <SkillCard key={index} skill={skill} />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
