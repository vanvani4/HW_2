import { Hw2Page } from './app.po';

describe('hw2 App', () => {
  let page: Hw2Page;

  beforeEach(() => {
    page = new Hw2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
