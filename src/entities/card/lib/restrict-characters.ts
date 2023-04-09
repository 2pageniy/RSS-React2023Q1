export function restrictCharacters(tags: string[]) {
  const strTags = tags.map((i) => i.slice(40)).join(', ');

  if (strTags.length > 45) {
    return strTags.slice(0, 40) + '...';
  }

  return strTags;
}
