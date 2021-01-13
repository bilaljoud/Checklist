import uri from './mongodb-uri'
import mongodb from 'mongodb';
const { MongoClient } = mongodb;

async function dbops(data, operation) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        if (operation === 'create') {
            if (data.length > 1) {
                await createMultipleTasks(client, data);
            } else {
                await createTask(client, data);
            }
        } else if (operation === 'read') {

        } else if (operation === 'update') {

        } else if (operation === 'delete') {

        } else {
            
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name }`));
}

async function createTask(client, newTasks) {
    const result = await client.db("Tasks").collection("My-Tasks").insertOne(newTasks);
    console.log(result.insertedCount);
}

async function createMultipleTasks() {
    const result = await client.db("Tasks").collection("My-Tasks").insertMany(newTask);
    console.log(result);
}

dbops().catch(console.err)
// export default dbops;