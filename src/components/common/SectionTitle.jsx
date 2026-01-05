import { Box, Typography } from '@mui/material';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 700,
          mb: 2,
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 60,
            height: 4,
            bgcolor: 'primary.main',
            borderRadius: 2,
          },
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
