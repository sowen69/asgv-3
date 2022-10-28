/* eslint-disable no-param-reassign */

// Take a String array, return an HTML node tree
// of (n)H2 tags filled with the spanified (n)chars from the array
// NOT USED: 20/10/22 this isn't used in the current site but could be usefull

export default function spanify(copy: string[], sectionName: string): string {
  let headers = '';
  copy.forEach((line, i) => {
    headers += `<h2 class='${sectionName}line${i + 1} text-white text-5xl '>`;
    const chars = line.split('');
    chars.forEach((c, j) => {
      if (c === ' ') {
        c = '&nbsp;';
      }
      chars[
        j
      ] = `<span class="char${j} h-11 inline-block overflow-y-hidden">${c}</span>`;
      headers += chars[j];
    });
    headers += '</h2>';
  });
  return headers;
}
