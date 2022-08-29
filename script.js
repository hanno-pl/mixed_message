components = {
    signs   : ["sun", "moon", "aries"],
    lucks   : ["excellent", "good", "horrible"],
    advices : ["trust no one", "keep your promises", "stop procrastinating"],
}

createMessage = () => {

    for(attr in components) {
        switch (attr) {
            case "signs":
                console.log(`Your sign is ${components.signs[Math.floor(Math.random() * 3)]}.`)
                break;
            case "lucks": 
                console.log(`You are having ${components.lucks[Math.floor(Math.random() * 3)]} luck.`);
                break;
            case "advices":
                console.log(`You should ${components.advices[Math.floor(Math.random() * 3)]}.`)
                break;
        }
    }
    
;
}

createMessage();