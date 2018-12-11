import { HolidayCheersPage } from './app.po';

describe('holiday-cheers App', function() {
  let page: HolidayCheersPage;

  beforeEach(() => {
    page = new HolidayCheersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
