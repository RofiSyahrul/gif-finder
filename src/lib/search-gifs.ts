import type { GifImageAttribute, GifImageCompleteAttribute } from '~/types/gif';

interface GifImage {
  fixed_width: GifImageAttribute;
}

interface Gif {
  type: 'gif' | (string & {});
  title: string;
  images: GifImage;
  url: string;
}

interface FetchGiphyResponse {
  data: Gif[];
}

const API_KEY = process.env.NEXT_PUBLIC_GIPHY_API_KEY ?? '';

export async function searchGifs(query?: string) {
  try {
    let url = 'https://api.giphy.com/v1/gifs';
    let qs = `?api_key=${API_KEY}&limit=40`;
    if (query) {
      url += '/search';
      qs += `&q=${query}`;
    } else {
      url += '/trending';
    }
  
    const res = await fetch(url + qs);
    const response: FetchGiphyResponse = await res.json();
    
    const result: GifImageCompleteAttribute[] = [];
    if (!response.data?.length) return result;
  
    response.data.forEach(item => {
      if (item.type !== 'gif') return;
      result.push({ gifURL: item.url, title: item.title, ...item.images.fixed_width });
    });
  
    return result;
  } catch {
    return [];
  }
}
