import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const FEATURES = [
  {
    title: 'Innovation et créativité',
    description:
      'Encourage les enfants à penser différemment et à trouver des solutions originales',
    icon: 'solar:pen-bold' as const,
  },
  {
    title: 'Développement des compétences',
    description: 'Développe les compétences entrepreneuriales et la confiance en soi',
    icon: 'solar:heart-bold' as const,
  },
  {
    title: 'Environnement sécurisé',
    description: 'Un espace numérique protégé, adapté aux enfants et supervisé',
    icon: 'solar:shield-check-bold' as const,
  },
  {
    title: 'Apprentissage ludique',
    description: "Des méthodes d'enseignement basées sur le jeu et l'expérimentation",
    icon: 'solar:pen-bold' as const,
  },
];

// ----------------------------------------------------------------------

export function DecouvreFeatured({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[{ overflow: 'hidden' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
        <m.div variants={varFade('inDown')}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            CARACTÉRISTIQUES
          </Typography>
        </m.div>

        <m.div variants={varFade('inUp')}>
          <Typography variant="h2" sx={{ my: 3 }}>
            Pourquoi choisir Mind'z'Kid?
          </Typography>
        </m.div>

        <m.div variants={varFade('inUp')}>
          <Typography sx={{ mx: 'auto', maxWidth: 640, color: 'text.secondary', mb: 8 }}>
            Mind'z'Kid offre un environnement complet d'apprentissage adapté aux besoins des enfants
            d'aujourd'hui
          </Typography>
        </m.div>

        <Grid container spacing={3}>
          {FEATURES.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <m.div variants={varFade('inUp')}>
                <Card
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: 1,
                    borderRadius: 2,
                    boxShadow: (theme) => theme.shadows[2],
                    '&:hover': {
                      boxShadow: (theme) => theme.shadows[10],
                    },
                  }}
                >
                  <Iconify
                    icon={feature.icon}
                    width={48}
                    sx={{
                      mb: 3,
                      mx: 'auto',
                      color: 'primary.main',
                    }}
                  />

                  <Typography variant="h5" paragraph>
                    {feature.title}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{feature.description}</Typography>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
