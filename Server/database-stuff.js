import { MongoClient } from 'mongodb';

async function dbops() {
    const url = '';

    const client = new MongoClient(url);
    try {
    await client.connect();
    await listDatabases(client);
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export default dbops;
