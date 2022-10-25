/* eslint-disable no-param-reassign */
// Take a String array, return an HTML node tree
// n H2's filled with the spanified chars from the array

export default function assembleHeader(
  copy: string[],
  sectionName: string
): string {
  let headers = '';
  copy.forEach((line, i) => {
    headers += `<h2 class='${sectionName}line${i + 1} text-white text-5xl '>`;
    headers += line;
    // const chars = line.split('');
    // chars.forEach((c, j) => {
    //   if (c === ' ') {
    //     c = '&nbsp;';
    //   }
    //   chars[
    //     j
    //   ] = `<span class="char${j} h-11 inline-block overflow-y-hidden">${c}</span>`;
    //   headers += chars[j];
    // });
    headers += '</h2>';
  });
  return headers;
}
