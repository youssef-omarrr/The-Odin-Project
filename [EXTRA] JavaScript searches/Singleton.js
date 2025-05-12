const SingletonFunction = (function () {
    let instance;

    function createInstance() {
        return new Object('Instance of SingletonFunction');
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function TestSingletonFunction() {
    const instance1 = SingletonFunction.getInstance();
    const instance2 = SingletonFunction.getInstance();
    console.log('Both instances are the same? ' + (instance1 === instance2));
}
TestSingletonFunction()