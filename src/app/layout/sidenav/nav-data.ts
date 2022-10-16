import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routerLink: 'products',
    icon: 'fa fa-cube',
    label: 'Products',
    items: [
      {
        routerLink: 'products/ICT',
        label: 'ICT',
        items: [
          {
            routerLink: 'products/ict/master-data',
            label: 'Master Data',
            items: [
              {
                routerLink: 'products/ict/master-data/legal-entity',
                label: 'Legal Entity',
              },
              {
                routerLink: 'products/ict/master-data/parts',
                label: 'Parts',
              },
              {
                routerLink: 'products/ict/master-data/transfer-pricing',
                label: 'Transfer Pricing',
              },
            ],
          },
          {
            routerLink: 'products/level2.1',
            label: 'Billing Route',
          },
          {
            routerLink: 'products/level2.1',
            label: 'Order Record',
          },
          {
            routerLink: 'products/level2.1',
            label: 'Invoice',
          },
          {
            routerLink: 'products/level2.1',
            label: 'Reports',
          },
        ],
      },
    ],
  },
  {
    routerLink: 'system',
    icon: 'fa fa-gear',
    label: 'System',
  },
  {
    routerLink: 'create',
    icon: 'fa fa-file',
    label: 'Create',
  },
];
