export default function picture(path: string): HTMLPictureElement {
  const el: HTMLPictureElement = document.createElement('picture');
  const sourcePortrait: HTMLSourceElement = document.createElement('source');
  const sourceLandscape: HTMLSourceElement = document.createElement('source');
  const fallbackImg: HTMLImageElement = document.createElement('img');

  //TODO: This is fucked :(
  fallbackImg.src = path + '_1-1_768.jpg';
  console.log(fallbackImg.src);
  let srcsetString = path + '_1-1_300.jpg' + ' 300w,';
  srcsetString += path + '_1-1_768.jpg' + ' 768w,';
  srcsetString += path + '_1-1_1024.jpg' + ' 1024w,';

  sourcePortrait.srcset = srcsetString;
  sourcePortrait.sizes =
    '(max-width: 300px) 300w, (max-width: 768px) 768w, (max-width: 1024px) 1024w';

  fallbackImg.src = path;
  el.appendChild(sourcePortrait);
  el.appendChild(fallbackImg);

  // console.log(el);
  return el;
}
