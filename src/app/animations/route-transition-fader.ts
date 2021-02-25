import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =

  trigger('fadeAnimation', [
    transition('* => *', [
      query(':self',
        [
          style({opacity: 0}),
          animate('0.7s', style({opacity: 1}))
        ],
        {optional: true}
      )
    ])
  ]);
