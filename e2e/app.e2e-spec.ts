import { QUAX2Page } from './app.po';

describe('quax2 App', () => {
  let page: QUAX2Page;

  beforeEach(() => {
    page = new QUAX2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
