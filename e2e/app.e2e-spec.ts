import { AppPage } from './app.po';

describe('Kazoku Restart', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Kazoku Client Restart');
  });
});
