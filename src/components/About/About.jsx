import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SectionTitle from '../common/SectionTitle';
import { personalInfo } from '../../data/personalInfo';

const About = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="About Me"
          subtitle="Get to know my background and what drives me"
        />

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                lineHeight: 1.8,
                mb: 3,
                whiteSpace: 'pre-line',
              }}
            >
              {personalInfo.elevatorPitch}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                bgcolor: 'background.default',
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                What I Bring to the Table
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {personalInfo.uniqueValue.map((value, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      mb: 2,
                    }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{ color: 'primary.main', mt: 0.3, flexShrink: 0 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
