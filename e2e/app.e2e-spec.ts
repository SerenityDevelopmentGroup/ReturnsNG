import { ReturnsNGPage } from './app.po';

describe('returns-ng App', function() {
  let page: ReturnsNGPage;

  beforeEach(() => {
    page = new ReturnsNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
