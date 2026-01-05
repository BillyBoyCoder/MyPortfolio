import { Box, Container, Typography, Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SectionTitle from '../common/SectionTitle';

const Testimonials = () => {
  return (
    <Box
      id="testimonials"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <SectionTitle
          title="Testimonials"
          subtitle="What others say about working with me"
        />

        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: 'center',
            bgcolor: 'background.paper',
            borderRadius: 2,
            border: 1,
            borderColor: 'divider',
          }}
        >
          <FormatQuoteIcon
            sx={{
              fontSize: 48,
              color: 'primary.main',
              opacity: 0.5,
              mb: 2,
            }}
          />
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontStyle: 'italic', mb: 2 }}
          >
            Testimonials coming soon
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I'm currently gathering feedback from colleagues and clients.
            Check back soon for testimonials about my work.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Testimonials;
