/*
    Gets all the files in a scene folder
*/
export default class Sequence {
  private _config?: string;

  // private _sequenceItems: SequenceItem[];

  private _sequenceFiles: string[];

  private _sequenceName: string;

  private _sequenceLength: number;

  // constructor
  constructor(
    sequenceName: string,
    sequenceLength: number,
    configFile?: string
  ) {
    this._config = configFile;
    this._sequenceName = sequenceName;
    this._sequenceLength = sequenceLength;
    this._sequenceFiles = [];

    for (let i = 0; i < this._sequenceLength; i += 1) {
      const item = `scenes/${this._sequenceName}/${i
        .toString()
        .padStart(4, '0')}.jpg`;
      this._sequenceFiles.push(item);
    }
    // console.log(this._sequenceFiles);
  }

  GetSequenceLength() {
    return this._sequenceLength;
  }

  GetSequence() {
    return this._sequenceFiles;
  }

  GetSequenceFile(index: number) {
    return this._sequenceFiles[index];
  }

  // GetSequenceElement(index: number) {
  //   return this._sequenceItems[index];
  // }

  // AddSequenceElement(item: SequenceItem) {
  //   this._sequenceItems.push(item);
  // }
}
