const engRow1 = [['`', 'Backquote'], [1, 'Digit1'], [2, 'Digit2'], [3, 'Digit3'], [4, 'Digit4'], [5, 'Digit5'], [6, 'Digit6'], [7, 'Digit7'], [8, 'Digit8'], [9, 'Digit9'], [0, 'Digit0'], ['-', 'Minus'], ['=', 'Equal'], 'Backspace'];
const engRow2 = ['Tab', ['q', 'KeyQ'], ['w', 'KeyW'], ['e', 'KeyE'], ['r', 'KeyR'], ['t', 'KeyT'], ['y', 'KeyY'], ['u', 'KeyU'], ['i', 'KeyI'], ['o', 'KeyO'], ['p', 'KeyP'], ['[', 'BracketLeft'], [']', 'BracketRight'], [String.fromCharCode(92), 'Backslash'], ['Del', 'Delete']];
const engRow3 = ['Caps Lock', ['a', 'KeyA'], ['s', 'KeyS'], ['d', 'KeyD'], ['f', 'KeyF'], ['g', 'KeyG'], ['h', 'KeyH'], ['j', 'KeyJ'], ['k', 'KeyK'], ['l', 'KeyL'], [';', 'Semicolon'], [String.fromCharCode(39), 'Quote'], 'Enter'];
const engRow4 = [['Shift', 'ShiftLeft'], [String.fromCharCode(92), 'Backslash'], ['z', 'KeyZ'], ['x', 'KeyX'], ['c', 'KeyC'], ['v', 'KeyV'], ['b', 'KeyB'], ['n', 'KeyN'], ['m', 'KeyM'], [',', 'Comma'], ['.', 'Period'], ['/', 'Slash'], ['ᐃ', 'ArrowUp'], ['Shift', 'ShiftRight']];
const engRow5 = [['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], 'Space', ['Alt', 'AltRight'], ['Ctrl', 'ControlRight'], ['ᐊ', 'ArrowLeft'], ['ᐁ', 'ArrowDown'], ['ᐅ', 'ArrowRight']];

const ruRow1 = [['ё', 'Backquote'], [1, 'Digit1'], [2, 'Digit2'], [3, 'Digit3'], [4, 'Digit4'], [5, 'Digit5'], [6, 'Digit6'], [7, 'Digit7'], [8, 'Digit8'], [9, 'Digit9'], [0, 'Digit0'], ['-', 'Minus'], ['=', 'Equal'], 'Backspace'];
const ruRow2 = ['Tab', ['й', 'KeyQ'], ['ц', 'KeyW'], ['у', 'KeyE'], ['к', 'KeyR'], ['е', 'KeyT'], ['н', 'KeyY'], ['г', 'KeyU'], ['ш', 'KeyI'], ['щ', 'KeyO'], ['з', 'KeyP'], ['х', 'BracketLeft'], ['ъ', 'BracketRight'], [String.fromCharCode(92), 'Backslash'], ['Del', 'Delete']];
const ruRow3 = ['Caps Lock', ['ф', 'KeyA'], ['ы', 'KeyS'], ['в', 'KeyD'], ['а', 'KeyF'], ['п', 'KeyG'], ['р', 'KeyH'], ['о', 'KeyJ'], ['л', 'KeyK'], ['д', 'KeyL'], ['ж', 'Semicolon'], ['э', 'Quote'], 'Enter'];
const ruRow4 = [['Shift', 'ShiftLeft'], [String.fromCharCode(92), 'Backslash'], ['я', 'KeyZ'], ['ч', 'KeyX'], ['с', 'KeyC'], ['м', 'KeyV'], ['и', 'KeyB'], ['т', 'KeyN'], ['ь', 'KeyM'], ['б', 'Comma'], ['ю', 'Period'], ['/', 'Slash'], ['ᐃ', 'ArrowUp'], ['Shift', 'ShiftRight']];
const ruRow5 = [['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], 'Space', ['Alt', 'AltRight'], ['Ctrl', 'ControlRight'], ['ᐊ', 'ArrowLeft'], ['ᐁ', 'ArrowDown'], ['ᐅ', 'ArrowRight']];

const engRow1Caps = [['`', 'Backquote'], [1, 'Digit1'], [2, 'Digit2'], [3, 'Digit3'], [4, 'Digit4'], [5, 'Digit5'], [6, 'Digit6'], [7, 'Digit7'], [8, 'Digit8'], [9, 'Digit9'], [0, 'Digit0'], ['-', 'Minus'], ['=', 'Equal'], 'Backspace'];
const engRow2Caps = ['Tab', ['Q', 'KeyQ'], ['W', 'KeyW'], ['E', 'KeyE'], ['R', 'KeyR'], ['T', 'KeyT'], ['Y', 'KeyY'], ['U', 'KeyU'], ['I', 'KeyI'], ['O', 'KeyO'], ['P', 'KeyP'], ['[', 'BracketLeft'], [']', 'BracketRight'], [String.fromCharCode(92), 'Backslash'], ['Del', 'Delete']];
const engRow3Caps = ['Caps Lock', ['A', 'KeyA'], ['S', 'KeyS'], ['D', 'KeyD'], ['F', 'KeyF'], ['G', 'KeyG'], ['H', 'KeyH'], ['J', 'KeyJ'], ['K', 'KeyK'], ['L', 'KeyL'], [':', 'Semicolon'], [String.fromCharCode(39), 'Quote'], 'Enter'];
const engRow4Caps = [['Shift', 'ShiftLeft'], [String.fromCharCode(92), 'Backslash'], ['Z', 'KeyZ'], ['X', 'KeyX'], ['C', 'KeyC'], ['V', 'KeyV'], ['B', 'KeyB'], ['N', 'KeyN'], ['M', 'KeyM'], [',', 'Comma'], ['.', 'Period'], ['/', 'Slash'], ['ᐃ', 'ArrowUp'], ['Shift', 'ShiftRight']];
const engRow5Caps = [['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], 'Space', ['Alt', 'AltRight'], ['Ctrl', 'ControlRight'], ['ᐊ', 'ArrowLeft'], ['ᐁ', 'ArrowDown'], ['ᐅ', 'ArrowRight']];

const ruRow1Caps = [['Ё', 'Backquote'], [1, 'Digit1'], [2, 'Digit2'], [3, 'Digit3'], [4, 'Digit4'], [5, 'Digit5'], [6, 'Digit6'], [7, 'Digit7'], [8, 'Digit8'], [9, 'Digit9'], [0, 'Digit0'], ['-', 'Minus'], ['=', 'Equal'], 'Backspace'];
const ruRow2Caps = ['Tab', ['Й', 'KeyQ'], ['Ц', 'KeyW'], ['У', 'KeyE'], ['К', 'KeyR'], ['Е', 'KeyT'], ['Н', 'KeyY'], ['Г', 'KeyU'], ['Ш', 'KeyI'], ['Щ', 'KeyO'], ['З', 'KeyP'], ['Х', 'BracketLeft'], ['Ъ', 'BracketRight'], [String.fromCharCode(92), 'Backslash'], ['Del', 'Delete']];
const ruRow3Caps = ['Caps Lock', ['Ф', 'KeyA'], ['Ы', 'KeyS'], ['В', 'KeyD'], ['А', 'KeyF'], ['П', 'KeyG'], ['Р', 'KeyH'], ['О', 'KeyJ'], ['Л', 'KeyK'], ['Д', 'KeyL'], ['Ж', 'Semicolon'], ['Э', 'Quote'], 'Enter'];
const ruRow4Caps = [['Shift', 'ShiftLeft'], [String.fromCharCode(92), 'Backslash'], ['Я', 'KeyZ'], ['Ч', 'KeyX'], ['С', 'KeyC'], ['М', 'KeyV'], ['И', 'KeyB'], ['Т', 'KeyN'], ['Ь', 'KeyM'], ['Б', 'Comma'], ['Ю', 'Period'], ['/', 'Slash'], ['ᐃ', 'ArrowUp'], ['Shift', 'ShiftRight']];
const ruRow5Caps = [['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], 'Space', ['Alt', 'AltRight'], ['Ctrl', 'ControlRight'], ['ᐊ', 'ArrowLeft'], ['ᐁ', 'ArrowDown'], ['ᐅ', 'ArrowRight']];

const engRow1Shift = [['~', 'Backquote'], ['!', 'Digit1'], ['@', 'Digit2'], ['#', 'Digit3'], ['$', 'Digit4'], ['%', 'Digit5'], ['^', 'Digit6'], ['&', 'Digit7'], ['*', 'Digit8'], ['(', 'Digit9'], [')', 'Digit0'], ['_', 'Minus'], ['+', 'Equal'], 'Backspace'];
const engRow2Shift = ['Tab', ['Q', 'KeyQ'], ['W', 'KeyW'], ['E', 'KeyE'], ['R', 'KeyR'], ['T', 'KeyT'], ['Y', 'KeyY'], ['U', 'KeyU'], ['I', 'KeyI'], ['O', 'KeyO'], ['P', 'KeyP'], ['{', 'BracketLeft'], ['}', 'BracketRight'], ['|', 'Backslash'], ['Del', 'Delete']];
const engRow3Shift = ['Caps Lock', ['A', 'KeyA'], ['S', 'KeyS'], ['D', 'KeyD'], ['F', 'KeyF'], ['G', 'KeyG'], ['H', 'KeyH'], ['J', 'KeyJ'], ['K', 'KeyK'], ['L', 'KeyL'], [':', 'Semicolon'], ['"', 'Quote'], 'Enter'];
const engRow4Shift = [['Shift', 'ShiftLeft'], ['|', 'Backslash'], ['Z', 'KeyZ'], ['X', 'KeyX'], ['C', 'KeyC'], ['V', 'KeyV'], ['B', 'KeyB'], ['N', 'KeyN'], ['M', 'KeyM'], ['<', 'Comma'], ['>', 'Period'], ['?', 'Slash'], ['ᐃ', 'ArrowUp'], ['Shift', 'ShiftRight']];
const engRow5Shift = [['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], 'Space', ['Alt', 'AltRight'], ['Ctrl', 'ControlRight'], ['ᐊ', 'ArrowLeft'], ['ᐁ', 'ArrowDown'], ['ᐅ', 'ArrowRight']];

const ruRow1Shift = [['Ё', 'Backquote'], ['!', 'Digit1'], ['"', 'Digit2'], ['№', 'Digit3'], [';', 'Digit4'], ['%', 'Digit5'], [':', 'Digit6'], ['?', 'Digit7'], ['*', 'Digit8'], ['(', 'Digit9'], [')', 'Digit0'], ['_', 'Minus'], ['+', 'Equal'], 'Backspace'];
const ruRow2Shift = ['Tab', ['Й', 'KeyQ'], ['Ц', 'KeyW'], ['У', 'KeyE'], ['К', 'KeyR'], ['Е', 'KeyT'], ['Н', 'KeyY'], ['Г', 'KeyU'], ['Ш', 'KeyI'], ['Щ', 'KeyO'], ['З', 'KeyP'], ['Х', 'BracketLeft'], ['Ъ', 'BracketRight'], ['/', 'Backslash'], ['Del', 'Delete']];
const ruRow3Shift = ['Caps Lock', ['Ф', 'KeyA'], ['Ы', 'KeyS'], ['В', 'KeyD'], ['А', 'KeyF'], ['П', 'KeyG'], ['Р', 'KeyH'], ['О', 'KeyJ'], ['Л', 'KeyK'], ['Д', 'KeyL'], ['Ж', 'Semicolon'], ['Э', 'Quote'], 'Enter'];
const ruRow4Shift = [['Shift', 'ShiftLeft'], ['/', 'Backslash'], ['Я', 'KeyZ'], ['Ч', 'KeyX'], ['С', 'KeyC'], ['М', 'KeyV'], ['И', 'KeyB'], ['Т', 'KeyN'], ['Ь', 'KeyM'], ['Б', 'Comma'], ['Ю', 'Period'], [',', 'Slash'], ['ᐃ', 'ArrowUp'], ['Shift', 'ShiftRight']];
const ruRow5Shift = [['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], 'Space', ['Alt', 'AltRight'], ['Ctrl', 'ControlRight'], ['ᐊ', 'ArrowLeft'], ['ᐁ', 'ArrowDown'], ['ᐅ', 'ArrowRight']];

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.cols = 95;
textarea.rows = 10;
textarea.placeholder = 'Hello!';
container.append(textarea);

const BUTTONS_WRAPPER_ENG = document.createElement('div');
BUTTONS_WRAPPER_ENG.classList.add('BUTTONS_WRAPPER_ENG', 'active');
container.append(BUTTONS_WRAPPER_ENG);

const BUTTONS_WRAPPER_RU = document.createElement('div');
BUTTONS_WRAPPER_RU.classList.add('BUTTONS_WRAPPER_RU');
container.append(BUTTONS_WRAPPER_RU);

const BUTTONS_WRAPPER_ENG_CAPS = document.createElement('div');
BUTTONS_WRAPPER_ENG_CAPS.classList.add('BUTTONS_WRAPPER_ENG_CAPS');
container.append(BUTTONS_WRAPPER_ENG_CAPS);

const BUTTONS_WRAPPER_RU_CAPS = document.createElement('div');
BUTTONS_WRAPPER_RU_CAPS.classList.add('BUTTONS_WRAPPER_RU_CAPS');
container.append(BUTTONS_WRAPPER_RU_CAPS);

const BUTTONS_WRAPPER_ENG_SHIFT = document.createElement('div');
BUTTONS_WRAPPER_ENG_SHIFT.classList.add('BUTTONS_WRAPPER_ENG_SHIFT');
container.append(BUTTONS_WRAPPER_ENG_SHIFT);

const BUTTONS_WRAPPER_RU_SHIFT = document.createElement('div');
BUTTONS_WRAPPER_RU_SHIFT.classList.add('BUTTONS_WRAPPER_RU_SHIFT');
container.append(BUTTONS_WRAPPER_RU_SHIFT);

const windowsText = document.createElement('p');
windowsText.classList.add('windowsText');
container.append(windowsText);
windowsText.innerHTML = 'Keyboard was created in Windows OS.';
const langSwitcherText = document.createElement('p');
langSwitcherText.classList.add('langSwitcherText');
container.append(langSwitcherText);
langSwitcherText.innerHTML = 'For switching language - Ctrl + Space';

const contact = document.createElement('a');
contact.classList.add('contact');
contact.href = 'https://t.me/ni4iporkoff';
const contactText = 'Don\'t hesitate text me in Telegram if you have any question';
contact.append(contactText);
container.append(contact);

function addButtons(row, condition) {
  const buttonsRow = document.createElement('div');
  if (condition === 'eng') {
    BUTTONS_WRAPPER_ENG.append(buttonsRow);
  } else if (condition === 'ru') {
    BUTTONS_WRAPPER_RU.append(buttonsRow);
  }

  if (condition === 'capsEng') {
    BUTTONS_WRAPPER_ENG_CAPS.append(buttonsRow);
  } else if (condition === 'capsRu') {
    BUTTONS_WRAPPER_RU_CAPS.append(buttonsRow);
  }

  if (condition === 'shiftEng') {
    BUTTONS_WRAPPER_ENG_SHIFT.append(buttonsRow);
  } else if (condition === 'shiftRu') {
    BUTTONS_WRAPPER_RU_SHIFT.append(buttonsRow);
  }

  buttonsRow.classList.add('buttonsRow');
  for (let i = 0; i < row.length; i += 1) {
    const button = document.createElement('div');
    buttonsRow.append(button);
    button.classList.add('button');
    if (row[i].length === 2) {
      const k = row[i][0];
      button.innerHTML = k;
      button.classList.add(`${row[i][1]}`);
    } else {
      if (row[i] !== 'Space') {
        button.innerHTML = row[i];
      } else {
        button.innerHTML = '';
      }

      if (row[i] !== 'Caps Lock') {
        button.classList.add(row[i]);
      } else {
        button.classList.add('CapsLock');
      }
    }

    button.style.width = '40px';
    button.style.height = button.style.width;

    if (button.classList.contains('Backspace') || button.classList.contains('CapsLock') || button.classList.contains('ShiftLeft')) button.style.width = '97px';
    if (button.classList.contains('Tab')) button.style.width = '50px';
    if (button.classList.contains('Enter')) button.style.width = '87px';
    if (button.classList.contains('ControlLeft') || button.classList.contains('ControlRight')) button.style.width = '67px';
    if (button.classList.contains('Space')) button.style.width = '277px';
  }
}

addButtons(engRow1, 'eng');
addButtons(engRow2, 'eng');
addButtons(engRow3, 'eng');
addButtons(engRow4, 'eng');
addButtons(engRow5, 'eng');

addButtons(ruRow1, 'ru');
addButtons(ruRow2, 'ru');
addButtons(ruRow3, 'ru');
addButtons(ruRow4, 'ru');
addButtons(ruRow5, 'ru');

addButtons(engRow1Caps, 'capsEng');
addButtons(engRow2Caps, 'capsEng');
addButtons(engRow3Caps, 'capsEng');
addButtons(engRow4Caps, 'capsEng');
addButtons(engRow5Caps, 'capsEng');

addButtons(ruRow1Caps, 'capsRu');
addButtons(ruRow2Caps, 'capsRu');
addButtons(ruRow3Caps, 'capsRu');
addButtons(ruRow4Caps, 'capsRu');
addButtons(ruRow5Caps, 'capsRu');

addButtons(engRow1Shift, 'shiftEng');
addButtons(engRow2Shift, 'shiftEng');
addButtons(engRow3Shift, 'shiftEng');
addButtons(engRow4Shift, 'shiftEng');
addButtons(engRow5Shift, 'shiftEng');

addButtons(ruRow1Shift, 'shiftRu');
addButtons(ruRow2Shift, 'shiftRu');
addButtons(ruRow3Shift, 'shiftRu');
addButtons(ruRow4Shift, 'shiftRu');
addButtons(ruRow5Shift, 'shiftRu');

const button = document.querySelectorAll('.button');
const specialBtn = ['Backspace', 'Tab', 'Del', 'Caps Lock', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Enter'];
function toCaps() {
  if (BUTTONS_WRAPPER_ENG.classList.contains('active') || BUTTONS_WRAPPER_ENG_CAPS.classList.contains('active')) {
    BUTTONS_WRAPPER_ENG.classList.toggle('active');
    BUTTONS_WRAPPER_ENG_CAPS.classList.toggle('active');
  } else if (BUTTONS_WRAPPER_RU.classList.contains('active') || BUTTONS_WRAPPER_RU_CAPS.classList.contains('active')) {
    BUTTONS_WRAPPER_RU.classList.toggle('active');
    BUTTONS_WRAPPER_RU_CAPS.classList.toggle('active');
  }
}

document.addEventListener('keydown', (event) => {
  textarea.focus();
  button.forEach((key) => {
    if (key.classList.contains(event.code)) {
      key.classList.add('btn_color');
      key.classList.add('button_press');
    }
  });

  if (event.key === 'Alt') {
    event.preventDefault();
  }

  if (event.key === 'Tab') {
    event.preventDefault();
    textarea.value += '\t';
  }

  const eslintBug = () => {};
  switch (event.code) {
    case 'ArrowUp':
      event.preventDefault();
      textarea.value += 'ᐃ';
      break;
    case 'ArrowLeft':
      event.preventDefault();
      textarea.value += 'ᐊ';
      break;
    case 'ArrowDown':
      event.preventDefault();
      textarea.value += 'ᐁ';
      break;
    case 'ArrowRight':
      event.preventDefault();
      textarea.value += 'ᐅ';
      break;
    default: eslintBug();
  }

  if (event.key === 'Shift') {
    if (BUTTONS_WRAPPER_ENG.classList.contains('active')) {
      BUTTONS_WRAPPER_ENG.classList.remove('active');
      BUTTONS_WRAPPER_ENG_SHIFT.classList.add('active');
    } else if (BUTTONS_WRAPPER_RU.classList.contains('active')) {
      BUTTONS_WRAPPER_RU.classList.remove('active');
      BUTTONS_WRAPPER_RU_SHIFT.classList.add('active');
    }
  }

  if (event.key === 'CapsLock') toCaps();
});

let shiftCounter = 0;
button.forEach((key) => {
  key.addEventListener('click', () => {
    textarea.focus();
    key.classList.add('button_press');

    setTimeout(() => { key.classList.remove('button_press'); }, 100);

    if (!specialBtn.includes(key.textContent)) {
      textarea.value += key.textContent;
    }

    if (key.textContent === 'Tab') {
      textarea.value += '\t';
    }

    if (key.textContent === 'Caps Lock') toCaps();

    if (key.textContent === 'Shift') {
      if (shiftCounter === 0) {
        if (BUTTONS_WRAPPER_ENG.classList.contains('active')) {
          BUTTONS_WRAPPER_ENG.classList.remove('active');
          BUTTONS_WRAPPER_ENG_SHIFT.classList.add('active');
        } else if (BUTTONS_WRAPPER_RU.classList.contains('active')) {
          BUTTONS_WRAPPER_RU.classList.remove('active');
          BUTTONS_WRAPPER_RU_SHIFT.classList.add('active');
        }
        shiftCounter += 1;
      } else {
        if (BUTTONS_WRAPPER_ENG_SHIFT.classList.contains('active')) {
          BUTTONS_WRAPPER_ENG.classList.add('active');
          BUTTONS_WRAPPER_ENG_SHIFT.classList.remove('active');
        } else if (BUTTONS_WRAPPER_RU_SHIFT.classList.contains('active')) {
          BUTTONS_WRAPPER_RU.classList.add('active');
          BUTTONS_WRAPPER_RU_SHIFT.classList.remove('active');
        }
        shiftCounter = 0;
      }
    }

    if (key.classList.contains('Space')) {
      textarea.value += ' ';
    }

    if (key.textContent === 'Enter') {
      textarea.value += '\n';
    }

    if (key.textContent === 'Backspace') {
      textarea.value = textarea.value.slice(0, textarea.selectionStart - 1)
      + textarea.value.slice(textarea.selectionStart);
    }

    if (key.textContent === 'Del') {
      textarea.value = textarea.value.slice(0, textarea.selectionStart)
      + textarea.value.slice(textarea.selectionStart + 1);
    }
  });
});

document.addEventListener('keyup', (event) => {
  button.forEach((key) => {
    if (key.classList.contains(event.code)) {
      key.classList.remove('btn_color');
      key.classList.remove('button_press');
    }
  });

  if (event.key === 'Shift') {
    if (BUTTONS_WRAPPER_ENG_SHIFT.classList.contains('active')) {
      BUTTONS_WRAPPER_ENG.classList.add('active');
      BUTTONS_WRAPPER_ENG_SHIFT.classList.remove('active');
    } else if (BUTTONS_WRAPPER_RU_SHIFT.classList.contains('active')) {
      BUTTONS_WRAPPER_RU.classList.add('active');
      BUTTONS_WRAPPER_RU_SHIFT.classList.remove('active');
    }
  }
});

function langSwitcher(func, ...codes) {
  const keys = new Set();

  document.addEventListener('keydown', (event) => {
    keys.add(event.code);
    let k = 0;
    codes.forEach((item) => {
      if (!keys.has(item)) {
        k = 1;
      }
    });
    if (k === 1) {
      return;
    }

    keys.clear();
    func();
  });

  document.addEventListener('keyup', (event) => {
    keys.delete(event.code);
  });
}

langSwitcher(
  () => {
    if (BUTTONS_WRAPPER_ENG_CAPS.classList.contains('active')) {
      BUTTONS_WRAPPER_ENG_CAPS.classList.remove('active');
    } else {
      BUTTONS_WRAPPER_ENG.classList.toggle('active');
    }

    if (BUTTONS_WRAPPER_RU_CAPS.classList.contains('active')) {
      BUTTONS_WRAPPER_RU_CAPS.classList.remove('active');
    } else {
      BUTTONS_WRAPPER_RU.classList.toggle('active');
    }

    if (BUTTONS_WRAPPER_ENG.classList.contains('active') || BUTTONS_WRAPPER_ENG_CAPS.classList.contains('active')) {
      localStorage.setItem('lang', 'eng');
    }
    if (BUTTONS_WRAPPER_RU.classList.contains('active') || BUTTONS_WRAPPER_RU_CAPS.classList.contains('active')) {
      localStorage.setItem('lang', 'ru');
    }
  },
  'ControlLeft',
  'Space',
);

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'eng');
}

const getLocalStorage = () => {
  if (localStorage.getItem('lang') === 'eng') {
    BUTTONS_WRAPPER_ENG.classList.add('active');
    BUTTONS_WRAPPER_RU.classList.remove('active');
  }
  if (localStorage.getItem('lang') === 'ru') {
    BUTTONS_WRAPPER_RU.classList.add('active');
    BUTTONS_WRAPPER_ENG.classList.remove('active');
  }
};
getLocalStorage();