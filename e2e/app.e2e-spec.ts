import { ProvaTestePage } from './app.po';

describe('prova-teste App', function() {
  let page: ProvaTestePage;

  beforeEach(() => {
    page = new ProvaTestePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
