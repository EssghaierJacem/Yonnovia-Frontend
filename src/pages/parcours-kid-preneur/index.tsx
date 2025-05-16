import { CONFIG } from 'src/global-config';

import { ParcoursKidPreneurView } from 'src/sections/parcours/view';

// ----------------------------------------------------------------------

const metadata = { title: `Parcours Kid-Preneur - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <ParcoursKidPreneurView />
    </>
  );
}
