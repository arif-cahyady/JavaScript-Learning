// Object Composition

class Developer {
    constructor(name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`${this.name} commit changes...`)
    }
}


// Object Composition mengelompokan berdasarkan kemampuan suatu fungsi
function canBuildUI(developer) { // berperan layaknya SubClass
    return {
            buildUI: () => { // Berperan layaknya method didalm SubClass
            console.log(`${developer.name} is building UI....`);
        }
    }
}

function canBuildAPI(developer) {
    // console.log(developer)
    return {
            buildAPI: () => {
            console.log(`${developer.name} is building API...`)
        }
    } 
}

function canDeployApp(developer) {
    return {
            deployApp: () => {
            console.log(`${developer.name} is deploying App...`)
        }
    }
}

function createFrontEndDeveloper(name) {
    const developer = new Developer(name); // memanggil superclass beserta parameter constructornya
    return Object.assign(developer, canBuildUI(developer)) // mengembalikan object developer dan kemampuan yang dapat dilakukan
} 

function createBackendDeveloper(name) {
    const developer = new Developer(name)
    return Object.assign(developer, canBuildAPI(developer))
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer))
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer), canBuildUI(developer), canDeployApp(developer), )
}


const fullStackDeveloper = createFullStackDeveloper('Arif');
fullStackDeveloper.commitChanges()
fullStackDeveloper.buildAPI();


