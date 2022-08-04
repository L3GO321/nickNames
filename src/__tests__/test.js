import { Validator } from "../index";

test('name', () => {
    const userName = new Validator('login22a');
    userName.validateUsername();
    expect(userName.name).toBe('login22a');
})

test('name2', () => {
    const userName = new Validator('1login22a');
    userName.validateUsername();
    expect(userName.name).toBe('1login22a');
})