// import md5 from "crypto-js/md5";

const ts = "1";
// const privateKey = "d8fa88cea2e8e6519ccae4b0c0e9139734f0cd22";
const publicKey = "8fd7add001a5dffd40b57ad236f3a7e5";
const hash = "998eb4ff80ced36977d1d8e987903ebd";

// const hash = md5(ts + privateKey + publicKey).toString();
// console.log(hash);


export const url: string = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=spider&limit=99&ts=${ts}&hash=${hash}&apikey=${publicKey}`;




export interface Products {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    resourceURI: string;
    comics: {
        available: number;
        collectionURI: string;
        items: { name: string }[];
        returned: number;
    };
    series: {
        available: number;
        collectionURI: string;
        items: { name: string }[];
        returned: number;
    };
    stories: {
        available: number;
        collectionURI: string;
        items: { name: string }[];
        returned: number;
    };
    events: {
        available: number;
        collectionURI: string;
        items: { name: string }[];
        returned: number;
    };
    urls: { type: string; url: string }[];
}