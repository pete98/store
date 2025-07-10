import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';

function Contact() {
  return (
    <Box maxWidth="sm" mx="auto" py={8} px={2}>
      <Paper elevation={3} sx={{ borderRadius: 3, p: { xs: 2, sm: 4 } }}>
        <Typography variant="h4" component="h1" align="center" fontWeight={700} gutterBottom>
          Contact Us
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography color="text.secondary" align="center" mb={3}>
          Have questions or need assistance? Reach out to us!
        </Typography>
        <Stack spacing={2} divider={<Divider flexItem />} maxWidth="md" mx="auto">
          {/* Phone Row */}
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }} spacing={1}>
            <Typography fontWeight={600} minWidth={120}>
              Phone:
            </Typography>
            <MuiLink href="tel:+17324996748" color="primary" underline="hover" sx={{ wordBreak: 'break-all' }}>
              +1 (732) 499-6748
            </MuiLink>
          </Stack>
          {/* Email Row */}
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }} spacing={1}>
            <Typography fontWeight={600} minWidth={120}>
              Email:
            </Typography>
            <MuiLink href="mailto:KRZS9191@gmail.com" color="primary" underline="hover" sx={{ wordBreak: 'break-all' }}>
              KRZS9191@gmail.com
            </MuiLink>
          </Stack>
          {/* Address Row */}
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }} spacing={1}>
            <Typography fontWeight={600} minWidth={120}>
              Address:
            </Typography>
            <Typography sx={{ wordBreak: 'break-word' }} color="text.primary">
              960 Saint Georges Ave, Rahway, NJ 07065
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Contact; 