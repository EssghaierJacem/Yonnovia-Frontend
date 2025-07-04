import { CONFIG } from 'src/global-config';

import { DataGridView } from 'src/sections/_examples/mui/data-grid-view';

// ----------------------------------------------------------------------

const metadata = { title: `DataGrid | MUI - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <DataGridView />
    </>
  );
}
