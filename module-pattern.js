// module loader

function ModuleLoader() {
    
    //  store all the modules of the application
    var modules = {};
    
    //  get all the modules store an insance of the module
    
    function getModule(name) {
        if (modules[name]) {
            return modules[name];
        } else {
            throw new Error(`Undefined module: ${name}`);
        }
    }
        
    //  once you find your modules, register the instance of the module
    //  and add it to the stored list of modules
    
    function register(name, dependencies, module) {
        
        if (modules[name]) {
            throw new Error(`Module ${name} already defined`);
        } else {
            
            //  grab the instances of the modules and add them to the module list.
            //  apply adds the concrete modules using the apply to get "this"
            //  arry of implomentations of modules
            
            var depsModules = dependencies.map((dep) => {
                 return getModule(dep);
            });
            // pass the moduel and the implomentations 
            modules[name] = module.apply(module, depsModules);
        }
    }
     //  expose the two functions needed to use the Module Loader
    return {
        getModule: getModule,
        register: register
    };
}

// Example of using two modules
// Create an instance of ModuleLoader

var loader = ModuleLoader();

loader.register("HttpClient", [], function HttpClient() {
    
    // Using fetch API as an example
    
    function get(url) {
        return fetch(url).then((response) => response.json());
    }
    
    // Must return public API from all modules registers
    
    return {
        get: get     
    };
    
});

// Second example PostManager depends on the HttpClient defined above, and it is added othe [ ] array

loader.register("PostManager", ["HttpClient"], function PostManager(httpClient) {

      // GetPosts used the httpClient's get function to pull the posts
      function getPosts() {
          httpClient.get("https://jsonplaceholder.typicode.com/posts").then((posts) => {
              console.log("Posts ", posts);
          });
      }
    
    // Expose API of the most manager getPosts 
    return {
        getPosts: getPosts
    };
    
});

let postManager = loader.getModule("PostManager");
postManager.getPosts();