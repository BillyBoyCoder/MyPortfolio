import { Box, Container, Grid, Typography, Paper, Button, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import SectionTitle from '../common/SectionTitle';
import ContactForm from './ContactForm';
import { personalInfo } from '../../data/personalInfo';

const Contact = () => {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Get In Touch"
          subtitle="I'm currently looking for new opportunities. Let's connect!"
        />

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'background.default',
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Contact Information
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton
                    component="a"
                    href={`mailto:${personalInfo.email}`}
                    sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}
                  >
                    <EmailIcon />
                  </IconButton>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography
                      variant="body1"
                      component="a"
                      href={`mailto:${personalInfo.email}`}
                      sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                    >
                      {personalInfo.email}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton
                    component="a"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      LinkedIn
                    </Typography>
                    <Typography
                      variant="body1"
                      component="a"
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                    >
                      Connect with me
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton
                    component="a"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      GitHub
                    </Typography>
                    <Typography
                      variant="body1"
                      component="a"
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                    >
                      View my code
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Button
                  variant="outlined"
                  startIcon={<DescriptionIcon />}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                >
                  Download Resume
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: 'background.default',
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Send a Message
              </Typography>
              <ContactForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
