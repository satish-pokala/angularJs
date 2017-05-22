import { HttpCliPage } from './app.po';

describe('http-cli App', () => {
  let page: HttpCliPage;

  beforeEach(() => {
    page = new HttpCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
