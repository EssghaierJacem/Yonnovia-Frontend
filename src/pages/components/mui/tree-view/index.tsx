import { CONFIG } from 'src/global-config';

import { TreeView } from 'src/sections/_examples/mui/tree-view';

// ----------------------------------------------------------------------

const metadata = { title: `Tree view | MUI - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <TreeView />
    </>
  );
}
