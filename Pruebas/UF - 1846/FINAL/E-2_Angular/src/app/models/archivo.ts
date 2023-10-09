export class Archivo {
    id: number;
    filename: string;
    iduser: string;
    filepath: string;
  
    constructor(id: number, filename: string, iduser: string, filepath: string) {
      this.id = id;
      this.filename = filename;
      this.iduser = iduser;
      this.filepath = filepath;
    }
  }
  