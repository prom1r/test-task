import { phraseForComponent } from "./someText";

test(`adds string to equal You say:string`, () => {
    expect(phraseForComponent('Hello people')).toBe('You say: Hello people');
});