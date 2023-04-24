const createTitle = (priority, text) => {
  const title = document.createElement(`h${priority}`);
  title.textContent = text;

  return title;
};

export default createTitle;
