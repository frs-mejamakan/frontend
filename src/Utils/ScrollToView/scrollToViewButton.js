import { scrollTo } from './scrollTo';

export const scrollToViewButton = (toId, toRef, duration) => {
  scrollTo({ id: toId, ref: toRef, duration });
};
