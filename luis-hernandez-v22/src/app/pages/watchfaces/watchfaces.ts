export interface Watchface {
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly storeUrl: string;
}

export const watchfaces: readonly Watchface[] = [
  {
    name: 'Ouroboros',
    description:
      'Bold digital time framed by three themed data rings and customizable complications.',
    image: 'assets/images/watchfaces/ouroboros.png',
    storeUrl: 'https://apps.garmin.com/apps/763741b2-54c6-423d-bbe1-709184952ac6',
  },
  {
    name: 'Errant',
    description:
      'High-contrast digital time with a geometric layout and eight configurable data slots.',
    image: 'assets/images/watchfaces/errant.png',
    storeUrl: 'https://apps.garmin.com/apps/d8ebff6b-406b-461d-a517-ceed744e0aef',
  },
  {
    name: 'TZOLTECH',
    description:
      'Mayan- and Aztec-inspired artwork meets digital time and three detailed data rings.',
    image: 'assets/images/watchfaces/tzoltech.jpg',
    storeUrl: 'https://apps.garmin.com/apps/f6112933-4439-43c8-b288-ffafc89422f3',
  },
  {
    name: 'Fenestra',
    description:
      'A different view of time, with rotating hour and minute rings and customizable styles.',
    image: 'assets/images/watchfaces/fenestra.png',
    storeUrl: 'https://apps.garmin.com/apps/3b882fb7-4921-424a-b7b2-b2ada332cfaa',
  },
  {
    name: 'Dimidi',
    description:
      'A split-color, dual-panel design that balances bold time with your choice of data.',
    image: 'assets/images/watchfaces/dimidi.png',
    storeUrl: 'https://apps.garmin.com/apps/a9ce4bbe-aae3-49cc-b2f6-5c54aeee9a6b',
  },
  {
    name: 'TZOLTECH LITE',
    description: 'A minimal take on TZOLTECH, with three styled rings for your everyday metrics.',
    image: 'assets/images/watchfaces/tzoltech-lite.png',
    storeUrl: 'https://apps.garmin.com/apps/bcc5e32c-dffd-4980-b5f0-62feecf978a3',
  },
  {
    name: 'StatsRadar',
    description: 'See your health and device metrics together in a compact radar chart.',
    image: 'assets/images/watchfaces/statsradar.png',
    storeUrl: 'https://apps.garmin.com/apps/e0839fb7-bf95-4dcc-b948-f1db587dd6c1',
  },
];
