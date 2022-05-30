function app(state, output, dispatch) {
  R.compose(append(view(state)), clear())(output);

  const stop = dispatch(e => {
    stop();

    const newText = getText();
    const newState = [...state, newText];

    setText('');

    app(newState, output, dispatch);
  });
}

function view(state) {
  const _append = R.flip(append)(el);

  state
    .filter(person => person.age > 30)
    .map(buildPerson)
    .reduce(_append, elem('div'));
}

function buildPerson(person, index) {
  return R.compose(
    append(text(fullName(person))),
    attr('data-index', index),
    addClass('text-white'),
    addClass('bg-secondary'),
    addClass('p-3'),
  )(elem('div'));
}

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

app(
  // Object.freeze(['First message', 'Second message']),
  Object.freeze([
    {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 34,
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
    },
    {
      firstName: 'Jim',
      lastName: 'Smith',
      age: 53,
    },
  ]),
  getElem('message-list'),
  buttonClick,
);
