import { Box, Typography, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
              display: 'flex',
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
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {item.company}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {item.description}
            </Typography>
            {item.achievements && (
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
                    <CheckCircleIcon
                      sx={{ color: 'primary.main', fontSize: 18, mt: 0.3 }}
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
