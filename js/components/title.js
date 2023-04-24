const title = (priority, text) => {
  const title = document.createElement(`h${priority}`);
  title.textContent = text;

  return title;
};

export default title;
