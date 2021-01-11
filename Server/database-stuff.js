import { MongoClient } from 'mongodb';

async function dbops() {
    const url = 'mongodb+srv://Bilal:<admin>@cluster0.qzp1c.mongodb.net/<Simple checklist>?retryWrites=true&w=majority';

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