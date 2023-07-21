const titleContainer = document.getElementById('title-container');
const titleOne = document.getElementById('tablet-title-one');
const titleTwo = document.getElementById('tablet-title-two');
const backgroundImage = document.getElementById('background-image');

const boxIcons = document.getElementById('box-icons');
const checkOne = document.getElementById('check-one');
const checkTwo = document.getElementById('check-two');
const checkThree = document.getElementById('check-three');
const checkFour = document.getElementById('check-four');
const checkFive = document.getElementById('check-five');

const firstChevron = document.getElementById('first');
const secondChevron = document.getElementById('second');
const thirdChevron = document.getElementById('third');
const fourthChevron = document.getElementById('fourth');

titleContainer.addEventListener('click', (evt) => {
    if (
        evt.target.classList[0] === 'tablet-title-two' &&
        evt.target.classList.contains('gray')
    ) {
        titleTwo.classList.remove('gray');
        titleTwo.classList.add('black');
        titleOne.classList.remove('black');
        titleOne.classList.add('gray');

        backgroundImage.classList.toggle('tablet-image');
    }
    if (
        evt.target.classList[0] === 'tablet-title-one' &&
        evt.target.classList.contains('gray')
    ) {
        titleTwo.classList.remove('black');
        titleTwo.classList.add('gray');
        titleOne.classList.remove('gray');
        titleOne.classList.add('black');
        backgroundImage.classList.toggle('tablet-image');
    }
});

let arrOfChecks = [
    { check: checkOne, pressed: false, element: 'one' },
    { check: checkTwo, pressed: false, element: 'two' },
    { check: checkThree, pressed: false, element: 'three' },
    { check: checkFour, pressed: false, element: 'four' },
    { check: checkFive, pressed: false, element: 'five' },
];

boxIcons.addEventListener('click', (evt) => {
    arrOfChecks.map((el) =>
        el.check.id === evt.target.id && el.pressed === false
            ? (el.pressed = true)
            : (el.pressed = false)
    );
    arrOfChecks.map((el) => {
        if (el.pressed === true) {
            el.check.classList.add('highlight');
            const element = document.getElementById(el.element);
            element.classList.add(el.element);
        } else {
            el.check.classList.remove('highlight');
            const element = document.getElementById(el.element);
            element.classList.remove(el.element);
        }
    });
});

const arrOfChevrons = [
    {
        chevron: firstChevron,
        clicked: false,
    },
    {
        chevron: secondChevron,
        clicked: false,
    },
    {
        chevron: thirdChevron,
        clicked: false,
    },
    {
        chevron: fourthChevron,
        clicked: false,
    },
];

arrOfChevrons.map((chevron) =>
    chevron.chevron.addEventListener('click', (evt) => {
        if (
            evt.target.parentElement.parentElement.parentElement.lastElementChild.classList.contains(
                'hide-bottom'
            )
        ) {
            evt.target.parentElement.parentElement.parentElement.lastElementChild.classList.remove(
                'hide-bottom'
            );
        } else {
            evt.target.parentElement.parentElement.parentElement.lastElementChild.classList.add(
                'hide-bottom'
            );
        }
    })
);
