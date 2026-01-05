import { Box, Container, Typography, IconButton, Link as MuiLink } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-scroll';
import { personalInfo } from '../../data/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 4,
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              component={MuiLink}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={MuiLink}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={MuiLink}
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <EmailIcon />
            </IconButton>
          </Box>

          <Typography variant="body2" color="text.secondary" align="center">
            {currentYear} {personalInfo.name}. All rights reserved.
          </Typography>

          <IconButton
            component={Link}
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            aria-label="Back to top"
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
