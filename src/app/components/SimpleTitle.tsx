import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type SimpleTitleProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

const SimpleTitle: React.FC<SimpleTitleProps> = ({ title, subtitle, icon }) => {
  return (
    <>
      <Box sx={{px: 2}}>
        <Typography variant='h5' sx={{ textTransform: 'inherit', display: 'flex', flexDirection: 'row', alignItems: 'center', m: 0, p: 0, gap: 1, }}>
          {icon}
          <span>{title}</span>
        </Typography>
        <Typography variant='body2' color='primary.dark' gutterBottom>
          {subtitle}
        </Typography>
      </Box>
    </>
  );
};

export default SimpleTitle;
