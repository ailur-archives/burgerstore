let appGrid = document.getElementById("appGrid")
let AppInfo = document.getElementById("AppInfo")
let iOSAppInfo = document.getElementById("iOSAppInfo")
let unknownAppInfo = document.getElementById("unknownAppInfo")

async function getStore(link) {
    const response = await fetch(link);
    const data = await response.json();
    return data
}

// check if on iOS or iPadOS
if (navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad")) {

    // get iOS version
    if (navigator.userAgent.split(" ")[5] == "like") {
        let iOSVersion = navigator.userAgent.split(" ")[4].replaceAll("_", ".")
    } else {
        let iOSVersion = navigator.userAgent.split(" ")[5].replaceAll("_", ".")
    }

    // show iOS app info
    AppInfo.classList.remove("hidden")
    iOSAppInfo.classList.remove("hidden")

    // Load AltStore repository
    getStore("repo/store.json").then((data) => {
        console.log(data["title"])
        console.log(data["apps"])
        for (index in data["apps"]) {
            let application = data["apps"][index]

            // UI stuff
            let appDiv = document.createElement("div")
            appDiv.classList.add("app")
            appGrid.append(appDiv)

            let appImage = document.createElement("img")
            appImage.src = application["iconURL"]
            appDiv.append(appImage)

            let appTitle = document.createElement("p")
            appTitle.classList.add("title")
            appTitle.innerText = application["name"]
            appDiv.append(appTitle)

            let appInfo = document.createElement("p")
            appInfo.classList.add("w300")
            appInfo.innerText = application["developerName"] + " | " + application["subtitle"]
            appDiv.append(appInfo)

            let appButton = document.createElement("button")
            appButton.innerText = "Get"
            appDiv.append(appButton)
        }
    });
}
// Check for Linux
if (navigator.userAgent.includes("Linux")) {

    // show app info
    AppInfo.classList.remove("hidden")

    // Load BurgerStore repository
    getStore("repo/store.json").then((data) => {
        console.log(data["title"])
        console.log(data["apps"])
        for (index in data["linuxapps"]) {
            let application = data["linuxapps"][index]

            // UI stuff
            let appDiv = document.createElement("div")
            appDiv.classList.add("app")
            appGrid.append(appDiv)

            let appImage = document.createElement("img")
            appImage.src = application["iconURL"]
            appDiv.append(appImage)

            let appTitle = document.createElement("p")
            appTitle.classList.add("title")
            appTitle.innerText = application["name"]
            appDiv.append(appTitle)

            let appInfo = document.createElement("p")
            appInfo.classList.add("w300")
            appInfo.innerText = application["developerName"] + " | " + application["subtitle"]
            appDiv.append(appInfo)

            let appButton = document.createElement("button")
            appButton.innerText = "Get"
            appDiv.append(appButton)
        }
    });
}
// Unknown device
else {
    unknownAppInfo.classList.remove("hidden")
}
