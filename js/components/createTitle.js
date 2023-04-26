const createTitle = (priority, text, name) => {
  const title = document.createElement(`h${priority}`);
  if (name) {
    title.textContent = `${text} - ${name}`;
  } else {
    title.textContent = text;
  }

  return title;
};

export default createTitle;
