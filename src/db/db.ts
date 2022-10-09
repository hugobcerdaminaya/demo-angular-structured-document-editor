import Dexie, { Table } from 'dexie';

export interface Document {
  id?: number;
  name: string;
}

export interface DocumentList {
  id?: number;
  title: string;
}
export interface DocumentItem {
  id?: number;
  documentListId: number;
  title: string;
  done?: boolean;
}

export class AppDB extends Dexie {
  documentItems!: Table<DocumentItem, number>;
  documentLists!: Table<DocumentList, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      documentLists: '++id',
      documentItems: '++id, documentListId',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    const documentListId = await db.documentLists.add({
      title: 'Mis documentos',
    });
    /*await db.documentItems.bulkAdd([
      {
        documentListId,
        title: 'Contenido YAML 1',
      },
    ]);*/
  }

  async resetDatabase() {
    await db.transaction('rw', 'documentItems', 'documentLists', () => {
      this.documentItems.clear();
      this.documentLists.clear();
      this.populate();
    });
  }
}

export const db = new AppDB();