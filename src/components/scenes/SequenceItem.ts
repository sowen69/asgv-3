export default class SequenceItem {
  filePath: string;

  private image: Blob;

  constructor(filePath: string, image: Blob) {
    this.filePath = filePath;
    this.image = image;
  }

  GetBlob() {
    return this.image;
  }
}
