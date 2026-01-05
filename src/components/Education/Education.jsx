import { Box, Container, Paper, Typography, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import SectionTitle from '../common/SectionTitle';
import { education } from '../../data/experience';

const Education = () => {
  return (
    <Box
      id="education"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
        <SectionTitle
          title="Education"
          subtitle="My formal education and continuous learning"
        />

        {education.map((item, index) => (
          <Paper
            key={item.id}
            elevation={0}
            sx={{
              p: 3,
              display: 'flex',
              gap: 3,
              bgcolor: 'background.default',
              borderRadius: 2,
              border: 1,
              borderColor: 'divider',
              mb: index < education.length - 1 ? '5px' : 0,
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0,
              }}
            >
              <SchoolIcon />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {item.institution}
                </Typography>
                {item.status && (
                  <Chip
                    label={item.status}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                )}
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {item.degree}
              </Typography>
              <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                {item.period}
              </Typography>
              {item.focus && (
                <Typography variant="body2" color="text.secondary">
                  Focus: {item.focus}
                </Typography>
              )}
            </Box>
          </Paper>
        ))}
      </Container>
    </Box>
  );
};

export default Education;
