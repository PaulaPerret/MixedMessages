const object = {
    signs: {
        airSign: {
            name: ['Gemini', 'Aquarius', 'Libra'],
            cheerUp() {
                return 'Uuuh, you must be very fun to hang with!';
            },
            attributes: 'you are such a free spirit!',
        },
        earthSign: {
            name: ['Taurus', 'Capricorn', 'Virgo'],
            cheerUp() {
                return 'I wish I had your stability!';
            },
            attributes: 'you might be very rational',
        },
        waterSign: {
            name: ['Pisces', 'Scorpion', 'Cancer'],
            cheerUp() {
                return 'Your advices are the best!';
            },
            attributes: 'you are quite sensitive..',
        },
        fireSign: {
            name: ['Aries', 'Leo', 'Sagittarius'],
            cheerUp() {
                return 'You are the life of the parties!';
            },
            attributes: 'you have a lot of energy on you!',
        },
    },
    advice: [
        'Go eat some pizza.',
        'Go drink some beer.',
        'Netflix and chill.',
        'You should stop procrastinating.',
    ],
};
const signIterated = [];
for (let sign in object.signs) {
    signIterated.push(object.signs[sign].name);
}

let randomSign = Math.floor(Math.random() * signIterated.length);

if (randomSign === 0) {
    console.log(
        'For the air signs: ' +
            object.signs['airSign'].name +
            '.' +
            '\n' +
            object.signs.airSign.cheerUp() +
            '\n' +
            'I bet ' +
            object.signs['airSign'].attributes
    );
} else if (randomSign === 1) {
    console.log(
        'For the earth signs: ' +
            object.signs['earthSign'].name +
            '.' +
            '\n' +
            object.signs.earthSign.cheerUp() +
            '\n' +
            "And I'm guessing " +
            object.signs['earthSign'].attributes
    );
} else if (randomSign === 2) {
    console.log(
        'For the water signs: ' +
            object.signs['waterSign'].name +
            '.' +
            '\n' +
            object.signs.waterSign.cheerUp() +
            '\n' +
            'And let me guess: ' +
            object.signs['waterSign'].attributes
    );
} else if (randomSign === 3) {
    console.log(
        'For the fire signs: ' +
            object.signs['fireSign'].name +
            '.' +
            '\n' +
            object.signs.fireSign.cheerUp() +
            '\n' +
            'And as a fire sign ' +
            object.signs['fireSign'].attributes
    );
}

const giveMeRandomAdvice = [];
for (let advices in object.advice) {
    giveMeRandomAdvice.push(advices);
}
function random(number) {
    let randomly = Math.floor(Math.random() * number.length);
    return 'Here is some advice: ' + object.advice[randomly];
}

random(giveMeRandomAdvice);
