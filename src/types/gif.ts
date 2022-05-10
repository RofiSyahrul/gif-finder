export interface GifImageAttribute {
  url: string;
  width: string;
  height: string;
}

export interface GifImageCompleteAttribute extends GifImageAttribute {
  title: string;
  gifURL: string;
}
