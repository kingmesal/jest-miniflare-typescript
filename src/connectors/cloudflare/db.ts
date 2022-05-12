export class Database {

    private ns: KVNamespace;

    public constructor(env: any) {
        this.ns = env.MYSTORE;
    }

    public async get(key: string): Promise<string> {
        let value = await this.ns.get(key, "text");
        if (value === null) {
            value = "";
        }

        return value;
    }

    public async put(key: string, value: string): Promise<void> {
        await this.ns.put(key, value);
    }
}