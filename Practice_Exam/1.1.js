function createDiv() {
    let div = document.createElement('div');
    div.className = "post-wrap";

    let h1 = document.createElement('h1');
    h1.className = "post-content";
    h1.innerHTML = "Hello World";

    document.getElementById("main").appendChild(div);
    document.getElementsByClassName("post-wrap")[0].appendChild(h1);
}