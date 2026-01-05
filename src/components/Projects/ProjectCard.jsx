import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Button,
  Stack,
  CardActions,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarIcon from '@mui/icons-material/Star';

const categoryColors = {
  professional: 'primary',
  mern: 'secondary',
  javascript: 'warning',
  htmlcss: 'info',
};

const categoryLabels = {
  professional: 'Professional',
  mern: 'MERN Stack',
  javascript: 'JavaScript',
  htmlcss: 'HTML/CSS',
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          height: 160,
          bgcolor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)'
              : 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)',
        }}
      >
        {project.featured && (
          <Chip
            icon={<StarIcon sx={{ fontSize: 16 }} />}
            label="Featured"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              bgcolor: 'rgba(255,255,255,0.9)',
              color: 'primary.dark',
            }}
          />
        )}
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            fontWeight: 700,
            opacity: 0.3,
            textAlign: 'center',
            px: 2,
          }}
        >
          {project.title}
        </Typography>
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Chip
            label={categoryLabels[project.category] || project.category}
            size="small"
            color={categoryColors[project.category] || 'default'}
          />
        </Box>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.shortDescription}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={0.5}>
          {project.techStack.slice(0, 4).map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.7rem' }}
            />
          ))}
          {project.techStack.length > 4 && (
            <Chip
              label={`+${project.techStack.length - 4}`}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.7rem' }}
            />
          )}
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          View Details
        </Button>
        {project.liveUrl && (
          <Button
            size="small"
            startIcon={<LaunchIcon />}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Live
          </Button>
        )}
        {project.githubUrl && (
          <Button
            size="small"
            startIcon={<GitHubIcon />}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Code
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
