import { FormsCliPage } from './app.po';

describe('forms-cli App', () => {
  let page: FormsCliPage;

  beforeEach(() => {
    page = new FormsCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
