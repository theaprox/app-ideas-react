import { Box, Typography } from '@mui/material';

type PaperCardTitle = {
  text: string;
  icon?: React.ReactNode; // `icon` is an optional prop
};

const PaperCardTitle: React.FC<PaperCardTitle> = ({ text, icon }) => {
  return (
    <>
      <Box>
        <Typography
          variant='h5'
          sx={{
            textTransform: 'uppercase',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
          }}
          gutterBottom>
          {icon}
          <span>{text}</span>
        </Typography>
      </Box>
    </>
  );
};

export default PaperCardTitle;
