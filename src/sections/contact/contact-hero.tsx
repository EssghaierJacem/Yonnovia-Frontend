import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';

// ----------------------------------------------------------------------

export function ContactHero({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(0deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)})`,
              `url(${CONFIG.assetsDir}/assets/images/contact/hero.webp)`,
            ],
          }),
          overflow: 'hidden',
          height: { md: 560 },
          position: 'relative',
          py: { xs: 10, md: 0 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <AnimateText
            component="h1"
            variant="h1"
            textContent={['Comment', 'nous contacter?']}
            variants={varFade('inUp', { distance: 24 })}
            sx={{
              color: 'common.white',
              [`& .${animateTextClasses.line}[data-index="0"]`]: {
                [`& .${animateTextClasses.word}[data-index="0"]`]: { color: 'primary.main' },
              },
            }}
          />

          <Box
            component="ul"
            sx={{
              mt: 5,
              display: 'grid',
              color: 'common.white',
              rowGap: { xs: 5, md: 0 },
              columnGap: { xs: 2, md: 5 },
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            }}
          >
            {CONTACTS.map((contact) => (
              <li key={contact.country}>
                <m.div variants={varFade('inUp', { distance: 24 })}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {contact.country}
                  </Typography>
                </m.div>

                <m.div variants={varFade('inUp', { distance: 24 })}>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {contact.address}
                  </Typography>
                </m.div>
              </li>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

const CONTACTS = [
  {
    country: 'Marseille',
    address: '37 Rue Guibal, Pôle Média, bureau No.7, Marseille Innovation – 13003',
    phoneNumber: '(239) 555-0108',
  },
  {
    country: 'Téléphone',
    address: '+33 6 13 80 25 35',
    phoneNumber: '(319) 555-0115',
  },
  {
    country: 'Email',
    address: 'support@mindzkid.ai',
    phoneNumber: '(252) 555-0126',
  },
];
