import { SearchTextFilterPipe } from './search-text-filter.pipe';
const courseList = [{
  "id": "1",
  "courseCreator": "Steve",
  "courseDescription": "Thisisastartercourseforshieldhandling",
  "discount": 10,
  "discountValidTill": "2022-04-28T01:30:00.000Z",
  "price": 573,
  "tags": ["Java"],
  "title": "Learning Java 8 2021",
  "isWishList": true,
  "isAddToCart": true,
  "isPurchased": true
},
{
  "id": "2",
  "courseCreator": "Loki",
  "courseDescription": "TypeScript",
  "discount": 7,
  "discountValidTill": "2022-07-27T20:30:00.000Z",
  "price": 445,
  "tags": ["Javascript"],
  "title": "Learning Javascipt and ES6 feature 2021",
  "isWishList": false,
  "isAddToCart": false,
  "isPurchased": false
}];
describe('SearchTextFilterPipe', () => {
  const pipe = new SearchTextFilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('array empty and empty string', () => {
    expect(pipe.transform([],'')).toEqual([]);
  });

  it('nothing is matching', () => {
    expect(pipe.transform(courseList, "false" )).toEqual([]);
  });

  it('proper data is passed', () => {
    expect(pipe.transform(courseList, "Java" )).toEqual(courseList);
  });
});
