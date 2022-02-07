import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountedPrice'
})
export class DiscountedPricePipe implements PipeTransform {

  transform(price: number, ...args: any[]): number {
    
    let [ discount, discountValidTill ] = args;

    if (!price) return 0;
    if (!discount) return price;

    let discountedPrice = price;

    if (discountValidTill) {
      let discountDate = new Date(discountValidTill);
      let today = new Date();

      if (today < discountDate){
        discountedPrice = price - (price * discount) / 100;
      }
    }
    return Math.floor(discountedPrice);

  }
}
