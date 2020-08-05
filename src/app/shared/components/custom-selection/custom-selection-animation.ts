import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const CUSTOM_SELECTED_ANIMATION_TIMING = '5000ms cubic-bezier(0.4,0.0,0.2,1)';

export const customSelectedAnimations: {
  readonly optionList: AnimationTriggerMetadata;
} = {
  optionList: trigger('optionList', [
    transition(':enter', [
      style({opacity: 0}),
      animate('100ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('100ms', style({ opacity: 0 }))
    ])

  ])
};
