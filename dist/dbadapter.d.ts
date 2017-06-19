import * as tsmysql from '@tsmean/mysql';
export declare function dbadapter(databaseType: 'mongo' | 'mysql'): typeof tsmysql;
