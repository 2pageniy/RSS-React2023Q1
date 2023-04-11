import { api } from '../const';
import { ICardRaM } from '../interface';

export async function fetchCharacters() {
  const res = await fetch(api);
  const json = await res.json();
  return json.results as ICardRaM[];
}

export async function searchCharacter(query: string) {
  const resName = await fetch(`${api}?name=${query}`);
  const jsonName = await resName.json();

  const resStatus = await fetch(`${api}?status=${query}`);
  const jsonStatus = await resStatus.json();

  const resSpecies = await fetch(`${api}?species=${query}`);
  const jsonSpecies = await resSpecies.json();

  const resGender = await fetch(`${api}?gender=${query}`);
  const jsonGender = await resGender.json();

  return [
    ...(jsonName.results || []),
    ...(jsonStatus.results || []),
    ...(jsonSpecies.results || []),
    ...(jsonGender.results || []),
  ] as ICardRaM[];
}
