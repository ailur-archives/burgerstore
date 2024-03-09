let appGrid = document.getElementById("appGrid")

async function getStore(link) {
    const response = await fetch(link);
    const data = await response.json();
    return data
}

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
        appInfo.innerText = application["developerName"] + " | " + application["subtitle"] + " | " + application["avaliblePlatforms"]
        appDiv.append(appInfo)

        let appButton = document.createElement("button")
        appButton.innerText = "Get"
        appDiv.append(appButton)
    }
    //console.log(data)
});
