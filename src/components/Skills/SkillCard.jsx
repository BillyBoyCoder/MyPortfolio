import { Chip, Box, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import LockIcon from '@mui/icons-material/Lock';
import ApiIcon from '@mui/icons-material/Api';
import DevicesIcon from '@mui/icons-material/Devices';

const iconMap = {
  javascript: CodeIcon,
  database: StorageIcon,
  code: CodeIcon,
  react: WebIcon,
  html: WebIcon,
  css: WebIcon,
  materialui: WebIcon,
  vite: BuildIcon,
  bootstrap: WebIcon,
  nodejs: CodeIcon,
  express: CodeIcon,
  api: ApiIcon,
  lock: LockIcon,
  sqlserver: StorageIcon,
  mongodb: StorageIcon,
  mongoose: StorageIcon,
  aws: CloudIcon,
  gcp: CloudIcon,
  vercel: CloudIcon,
  docker: CloudIcon,
  pm2: BuildIcon,
  git: BuildIcon,
  postman: ApiIcon,
  responsive: DevicesIcon,
};

const SkillCard = ({ skill }) => {
  const IconComponent = iconMap[skill.icon] || CodeIcon;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        p: 1.5,
        bgcolor: 'background.paper',
        borderRadius: 2,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 2,
        },
      }}
    >
      <IconComponent sx={{ color: 'primary.main', fontSize: 24 }} />
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {skill.name}
        </Typography>
      </Box>
      <Chip
        label={skill.level}
        size="small"
        variant="outlined"
        color={skill.level === 'Advanced' ? 'primary' : 'default'}
        sx={{ fontSize: '0.7rem' }}
      />
    </Box>
  );
};

export default SkillCard;
