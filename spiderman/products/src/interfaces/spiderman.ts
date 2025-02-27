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

export interface Response {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: Products[];
    };
}
