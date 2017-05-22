import { InputOutputCliPage } from './app.po';

describe('input-output-cli App', () => {
  let page: InputOutputCliPage;

  beforeEach(() => {
    page = new InputOutputCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
