import { Box, Container, Typography, Paper, Avatar, Stack } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SectionTitle from '../common/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: "Zahy Aziz",
    title: "Software Developer and Computer Science Professor",
    relationship: "Zahy was William's teacher",
    quote: "William has consistently demonstrated stellar knowledge, work ethic and attention to detail throughout my time working with him. William's code is organized, scalable, and documented well. William's experience shines through in his ability to approach tasks in a way that is very analytical and very thought out. I am certain William would be a wonderful addition to any team!",
  },
  {
    id: 2,
    name: "Ron Wilson",
    title: "Quality Assurance and Software Development at TCS Technologies",
    relationship: "Ron was senior to William but didn't manage William directly",
    quote: "William was a great fit for LeadVenture. He was excellent his attention to detail and was spot on. He was an expert in software development and code. He was an excellent person to work with. I have to give him the highest marks.",
  },
  {
    id: 3,
    name: "Terry Mullican",
    title: "Product Director and Lead Developer at LeadVenture™",
    relationship: "Terry managed William directly",
    quote: "William and I worked together @ LeadVenture / TCS for 6 years. William is well rounded in his skills as he was a full stack windows developer for us, plus did several web projects for our team. He is a great team player and quick to learn new tech of all kinds. He was a great asset to TCS!",
  },
];

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
      <Container maxWidth="lg">
        <SectionTitle
          title="Testimonials"
          subtitle="What others say about working with me"
        />

        <Stack spacing={3}>
          {testimonials.map((testimonial) => (
            <Paper
              key={testimonial.id}
              elevation={0}
              sx={{
                p: 4,
                bgcolor: 'background.paper',
                borderRadius: 2,
                border: 1,
                borderColor: 'divider',
              }}
            >
              <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                <Box sx={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' } }}>
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: 'primary.main',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                    }}
                  >
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <FormatQuoteIcon
                    sx={{
                      fontSize: 32,
                      color: 'primary.main',
                      opacity: 0.5,
                      mb: 1,
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontStyle: 'italic', mb: 3, lineHeight: 1.8 }}
                  >
                    {testimonial.quote}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ opacity: 0.7 }}>
                    {testimonial.relationship}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
