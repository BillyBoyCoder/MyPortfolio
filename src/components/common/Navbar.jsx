import { useState, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as ScrollLink } from 'react-scroll';
import { ThemeContext } from '../../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ScrollLink
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleDrawerToggle}
              style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ScrollLink>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary="Resume" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          bgcolor: trigger ? 'background.paper' : 'transparent',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
              }}
            >
              WC
            </Typography>
          </ScrollLink>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </ScrollLink>
            ))}
            <Button
              variant="outlined"
              color="primary"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
            >
              Resume
            </Button>
            <ThemeToggle />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <ThemeToggle />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </>
  );
};

export default Navbar;
