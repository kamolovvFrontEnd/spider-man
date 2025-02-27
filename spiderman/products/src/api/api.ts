import ky from "ky";
import { Response } from "../interfaces/spiderman";
// import md5 from "crypto-js/md5";

const ts = "1";
// const privateKey = "d8fa88cea2e8e6519ccae4b0c0e9139734f0cd22";
const publicKey = "8fd7add001a5dffd40b57ad236f3a7e5";
const hash = "998eb4ff80ced36977d1d8e987903ebd";

// const hash = md5(ts + privateKey + publicKey).toString();

const url: string = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=spider&ts=${ts}&hash=${hash}&apikey=${publicKey}`;

export default async function getData(): Promise<Response> {
  const json: Response = await ky.get(url).json();
  return json;
}