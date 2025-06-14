import { CONFIG } from 'src/global-config';

import { DndView } from 'src/sections/_examples/extra/dnd-view';

// ----------------------------------------------------------------------

const metadata = { title: `Dnd | Components - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <DndView />
    </>
  );
}
