import { Box, Container, Typography, Button, Avatar, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as ScrollLink } from 'react-scroll';
import { personalInfo } from '../../data/personalInfo';
import profileImage from '../../assets/profile.png';

const Hero = () => {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        pt: { xs: 8, md: 0 },
        pb: { xs: 4, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
              animation: 'fadeIn 1s ease-out',
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Typography
              variant="body1"
              color="primary"
              sx={{ fontWeight: 500, mb: 1 }}
            >
              Hello, I'm
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              }}
            >
              {personalInfo.name}
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 3, fontWeight: 400 }}
            >
              {personalInfo.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 4,
                maxWidth: 500,
                mx: { xs: 'auto', md: 0 },
                lineHeight: 1.8,
              }}
            >
              10+ years of enterprise experience. MERN stack specialist.
              Building automation solutions that transform hours into minutes.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: 'pointer' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{ px: 4, py: 1.5 }}
                >
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: 'pointer' }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ px: 4, py: 1.5 }}
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              <IconButton
                component="a"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              animation: 'fadeIn 1s ease-out 0.3s both',
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Avatar
              src={profileImage}
              alt={personalInfo.name}
              sx={{
                width: { xs: 200, sm: 250, md: 300 },
                height: { xs: 200, sm: 250, md: 300 },
                boxShadow: 3,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
