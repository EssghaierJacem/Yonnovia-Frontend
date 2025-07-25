import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { _socials, _carouselsMembers } from 'src/_mock';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { Carousel, useCarousel, CarouselArrowFloatButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

export function AboutTeam({ sx, ...other }: BoxProps) {
  const carousel = useCarousel({
    align: 'center',
    slideSpacing: '24px',
    slidesToShow: {
      xs: 1,
      sm: 2,
      md: 2,
      lg: 2,
    },
  });

  return (
    <Box
      component="section"
      sx={[{ overflow: 'hidden' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
        <m.div variants={varFade('inDown')}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            L'équipe
          </Typography>
        </m.div>

        <m.div variants={varFade('inUp')}>
          <Typography variant="h2" sx={{ my: 3 }}>
            Notre force ?
          </Typography>
        </m.div>

        <m.div variants={varFade('inUp')}>
          <Typography sx={{ mx: 'auto', maxWidth: 640, color: 'text.secondary' }}>
            Une équipe pluridisciplinaire mêlant expertise métier, technique et IA.
          </Typography>
        </m.div>

        <Box sx={{ position: 'relative' }}>
          <CarouselArrowFloatButtons {...carousel.arrows} options={carousel.options} />

          <Carousel carousel={carousel} sx={{ px: 0.5 }}>
            {_carouselsMembers.map((member) => (
              <Box
                key={member.id}
                component={m.div}
                variants={varFade('in')}
                sx={{ py: { xs: 8, md: 10 } }}
              >
                <MemberCard member={member} />
              </Box>
            ))}
          </Carousel>
        </Box>

        <Button
          size="large"
          color="inherit"
          variant="outlined"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={24} />}
          sx={{ mx: 'auto' }}
        >
          Tous les membres
        </Button>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type MemberCardProps = {
  member: (typeof _carouselsMembers)[number];
};

function MemberCard({ member }: MemberCardProps) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 0.5 }}>
        {member.name}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2.5, color: 'text.secondary' }}>
        {member.role}
      </Typography>

      <Box sx={{ px: 1, flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Image alt={member.name} src={member.avatarUrl} ratio="1/1" sx={{ borderRadius: 2 }} />
      </Box>

      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {_socials.map((social) => (
          <IconButton key={social.label}>
            {social.value === 'twitter' && <Iconify icon="socials:twitter" />}
            {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
            {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
            {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
          </IconButton>
        ))}
      </Box>
    </Card>
  );
}
