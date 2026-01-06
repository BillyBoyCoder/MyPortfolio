import { Box, Typography, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Timeline = ({ items }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      {items.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            display: 'flex',
            gap: 3,
            mb: 4,
            '&:last-child': { mb: 0 },
          }}
        >
          {/* Timeline line and dot */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 40,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                zIndex: 1,
              }}
            >
              <WorkIcon fontSize="small" />
            </Box>
            {index < items.length - 1 && (
              <Box
                sx={{
                  width: 2,
                  flex: 1,
                  bgcolor: 'divider',
                  mt: 1,
                }}
              />
            )}
          </Box>

          {/* Content */}
          <Paper
            elevation={0}
            sx={{
              flex: 1,
              p: 3,
              bgcolor: 'background.paper',
              borderRadius: 2,
              border: 1,
              borderColor: 'divider',
            }}
          >
            <Typography
              variant="caption"
              color="primary"
              sx={{ fontWeight: 600 }}
            >
              {item.period}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mt: 0.5 }}>
              {item.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {item.company}
            </Typography>

            {/* Responsibilities */}
            {item.responsibilities && (
              <Box sx={{ mb: 3 }}>
                <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
                  {item.responsibilities.map((responsibility, i) => (
                    <Box
                      component="li"
                      key={i}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1.5,
                        mb: 1.5,
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ color: 'primary.main', fontSize: 8, mt: 1 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {responsibility}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* Key Projects */}
            {item.keyProjects && item.keyProjects.length > 0 && (
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                  Key Projects
                </Typography>
                {item.keyProjects.map((project, i) => (
                  <Paper
                    key={i}
                    elevation={0}
                    sx={{
                      p: 2.5,
                      mb: 2,
                      bgcolor: 'background.default',
                      borderRadius: 1,
                      border: 1,
                      borderColor: 'divider',
                      '&:last-child': { mb: 0 },
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                      {project.name}
                    </Typography>

                    <Box sx={{ mb: 1.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        Challenge:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.challenge}
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 1.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        Solution:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.solution}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        Impact:
                      </Typography>
                      <Typography variant="body2" color="primary.main" sx={{ fontWeight: 500 }}>
                        {project.impact}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            )}

            {/* Legacy achievements support */}
            {item.achievements && !item.responsibilities && (
              <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
                {item.achievements.map((achievement, i) => (
                  <Box
                    component="li"
                    key={i}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: 'primary.main', fontSize: 8, mt: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {achievement}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default Timeline;
