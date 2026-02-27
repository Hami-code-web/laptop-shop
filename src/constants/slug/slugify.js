export const slugify = (text) => {
  return text
    .toString()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\u0600-\u06FF\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};
