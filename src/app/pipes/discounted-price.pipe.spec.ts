import { DiscountedPricePipe } from './discounted-price.pipe';

describe('DiscountedPricePipe', () => {

  const pipe = new DiscountedPricePipe();


  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('no discount or second argument', () => {
    expect(pipe.transform(1000)).toBe(1000);
  });

  it('no discount or second argument', () => {
    expect(pipe.transform(NaN)).toBe(0);
  });


  it('discounted price', () => {
    expect(pipe.transform(1000, 10, "2022-04-28T01:30:00.000Z" )).toBe(900);
  });

  it('no discount', () => {
    expect(pipe.transform( 100 ,[ undefined, "2023-04-28T01:30:00.000Z" ])).toBe(100);
  });
});
