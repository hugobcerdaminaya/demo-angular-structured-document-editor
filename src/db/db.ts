import Dexie, { Table } from 'dexie';

export interface DocumentList {
  id?: number;
  title: string;
}


export class AppDB extends Dexie {
  documentLists!: Table<DocumentList, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(2).stores({
      documentLists: '++id',
  });
    this.on('populate', () => this.populate());
  }

  async populate() {
    const id = await db.documentLists.bulkAdd([
      {
        title: 'Mi primero'
      },
      {
        title: 'Mi segundo'
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