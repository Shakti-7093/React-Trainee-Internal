function logClass(target: any) {
    const original = target;

    function constructor(...args: any[]) {
        console.log(
            `Instantiating ${original.name} with arguments: ${JSON.stringify(args)}`
        );

        const instance = new original(...args);

        return instance;
    }

    constructor.prototype = original.prototype;

    return constructor;
}

// @logClass
class NameClass {
    constructor(public name: string) {
        console.log(`ExampleClass instantiated with name: ${name}`);
    }
}

const exampleInstance = new NameClass("Sample");  