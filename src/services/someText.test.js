import { someText } from "./someText";

test(`adds string to equal You say:string`, () => {
    expect(someText('Hello people')).toBe('You say: Hello people');
});