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
  return state.length > 0
    ? R.pipe(...state.map((content, index) => append(message(content, index))))(
        elem('div'),
      )
    : elem('div');
}

function message(content, index) {
  return R.compose(
    append(text(content)),
    attr('data-index', index),
    addClass('bg-light'),
    addClass('p-3'),
    addClass('m-1'),
  )(elem('div'));
}

const buttonClick = on('click', getElem('message-button'));

app(
  // Object.freeze(['First message', 'Second message']),
  Object.freeze([]),
  getElem('message-list'),
  buttonClick,
);
