import { useState, useEffect } from 'react';
import { Fab, Zoom, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link as ScrollLink } from 'react-scroll';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Zoom in={visible}>
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          style={{ cursor: 'pointer' }}
        >
          <Fab
            color="primary"
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollLink>
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;
