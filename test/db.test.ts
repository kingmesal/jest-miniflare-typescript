import { Database } from '../src/connectors/cloudflare/db';
import { v4 as uuidv4 } from 'uuid';

const env = getMiniflareBindings();
let db = new Database(env);

let value = {
    userId: uuidv4(),
    user: "jest",
    appVersion: "0.0.1",
    assetType: "IMAGE",
    altText: "a stupid picture to make a point",
    name: "test-assets.jpg",
};

describe('Validate KV', () => {
    test('Namespace exists', () => {
        let isStoreDefined = env.MYSTORE !== undefined;
        expect(isStoreDefined).toBeTruthy();
    });

    test('Put a key and get a different key, which does not exist', async () => {
        let key = `test:${uuidv4()}:${uuidv4()}`
        let original = JSON.stringify(value);
        await db.put(key, original);
        let record = await db.get("test:");
        expect(record).toBe("");
    });

    test('Put a key and get the same key, which better exist', async () => {
        let key = `test:${uuidv4()}:${uuidv4()}`
        let original = JSON.stringify(value);
        await db.put(key, original);
        let record = await db.get(key);
        expect(record).toBe(original);
    });
});