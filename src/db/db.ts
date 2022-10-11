import Dexie, { Table } from 'dexie';

export interface DocumentList {
  id?: number;
  title: string;
}


export class AppDB extends Dexie {
  documentLists!: Table<DocumentList, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(1).stores({
      documentLists: '++id',
  });
    this.on('populate', () => this.populate());
  }

  async populate() {
    const id = await db.documentLists.bulkAdd([
      {
        title: 
        ` name: Pedro,
          email: pedro@gmail.com,
          password: "123456789"
        `
      },
      {
        title: 
        ` name: Daniela,
          email: daniela@gmail.com,
          password: qwerty
        `
      }, ]);
  }

  async resetDatabase() {
    await db.transaction('rw', 'documentLists', () => {
      this.documentLists.clear();
      this.populate();
    });
  }
}

export const db = new AppDB();