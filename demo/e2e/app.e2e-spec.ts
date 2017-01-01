import { Angular2ValidatorsPage } from './app.po';

describe('angular2-validators App', function() {
  let page: Angular2ValidatorsPage;

  beforeEach(() => {
    page = new Angular2ValidatorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
