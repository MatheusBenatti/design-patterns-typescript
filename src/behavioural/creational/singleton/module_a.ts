import { DatabaseClassic } from './db/database-classic';

const dataBaseClassic = DatabaseClassic.getInstance();
dataBaseClassic.add({ name: 'Kiryu', age: 37 });
dataBaseClassic.add({ name: 'Goro', age: 41 });
dataBaseClassic.add({ name: 'Ichiban', age: 42 });
dataBaseClassic.remove(1); // remove Goro
dataBaseClassic.show();
