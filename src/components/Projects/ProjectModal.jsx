import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Chip,
  Box,
  Button,
  Divider,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const categoryLabels = {
  professional: 'Professional',
  mern: 'MERN Stack',
  javascript: 'JavaScript',
  htmlcss: 'HTML/CSS',
};

const ProjectModal = ({ project, open, onClose }) => {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      PaperProps={{
        sx: { borderRadius: 2 },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pb: 1,
        }}
      >
        <Box>
          <Chip
            label={categoryLabels[project.category] || project.category}
            size="small"
            color="primary"
            sx={{ mb: 1 }}
          />
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            {project.title}
          </Typography>
        </Box>
        <IconButton onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          {project.fullDescription}
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <TrendingUpIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Impact
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {project.impact}
          </Typography>
        </Box>

        {project.challenges && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Challenges & Solutions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.challenges}
            </Typography>
          </Box>
        )}

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <PersonIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Role
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {project.role}
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Tech Stack
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {project.techStack.map((tech, index) => (
              <Chip key={index} label={tech} variant="outlined" />
            ))}
          </Stack>
        </Box>

        {project.deployment && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Deployment
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Frontend: {project.deployment.frontend}
              {project.deployment.backend && ` | Backend: ${project.deployment.backend}`}
            </Typography>
          </Box>
        )}

        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          {project.liveUrl && (
            <Button
              variant="contained"
              startIcon={<LaunchIcon />}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </Button>
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
