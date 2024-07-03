import Settings from '../app';

const settings = new Settings();

test('custom setting', () => {
    const expected = new Map([
        [
            'theme', 'light'
        ]
    ]);
    settings.customization('theme', 'light');
    expect(settings.custom).toEqual(expected);
});

test('output of settings', () => {
    const expected = new Map([
        [
            'theme', 'light'
        ],[
            'music', 'trance'
        ],[
            'difficulty', 'easy'
        ]
    ]);
    expect(settings.settings()).toEqual(expected);
});