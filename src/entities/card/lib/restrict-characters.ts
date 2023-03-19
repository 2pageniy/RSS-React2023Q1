export function restrictCharacters(tags: string[]) {
  const strTags = tags.join(', ');

  if (strTags.length > 45) {
    return strTags.slice(0, 40) + '...';
  }

  return strTags;
}
