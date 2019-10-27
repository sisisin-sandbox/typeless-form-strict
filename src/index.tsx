import { createForm } from 'typeless-form';

export const [_, Actions] = createForm<{}>({
  symbol: Symbol(),
});
Actions.submit();
