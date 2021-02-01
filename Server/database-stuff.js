import uri from './mongodb-uri'
import mongodb from 'mongodb';
const { MongoClient } = mongodb;

async function dbops(data, operation) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        if (operation === 'create') {
            // if (data.length > 1) {
            //     await createMultipleTasks(client, data);
            // } else {
            //     await createTask(client, data);
            // }
           await createTasks(client, data);
        } else if (operation === 'read') {
            await getTodaysTasks(client, data);
        } else if (operation === 'update') {
            await updateTask(client, data);
        } else if (operation === 'delete') {
            await deleteTasks(client, data);
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

async function createTask(client, newTask) {
    const result = await client.db("Tasks").collection("My-Tasks").insertOne(newTask);
    console.log(result.insertedCount);
}

async function createTasks(client, newTasks) {
    const result = await client.db("Tasks").collection("My-Tasks").insertMany(newTasks);
    console.log(result);
}

async function getTodaysTasks(client, { date }) {
    const result = await client.db("Tasks").collection("My-Tasks").find({ date: date });
    
    console.log(result);

    return result;
}

async function updateTask(client, task) {
    const result = await client.db("Tasks").collection("My-Tasks").updateOne()
    
}

dbops().catch(console.err)
// export default dbops;