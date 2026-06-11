(function () {
    function addEmotePanel() {

        if (document.getElementById("emote-panel")) return;

        const btn = document.createElement("button");
        btn.innerText = "text emotes";
        btn.style.position = "fixed";
        btn.style.bottom = "10px";
        btn.style.right = "10px";
        btn.style.zIndex = 9999;
        btn.style.padding = "8px";
        btn.style.cursor = "pointer";

        const panel = document.createElement("div");
        panel.id = "emote-panel";
        panel.style.position = "fixed";
        panel.style.bottom = "50px";
        panel.style.right = "10px";
        panel.style.background = "#222";
        panel.style.color = "white";
        panel.style.padding = "10px";
        panel.style.display = "none";
        panel.style.zIndex = 9999;
        panel.style.borderRadius = "6px";

        const emotes = [":)", ":(", ";-;", ":/", ":D", "D:", ":P", ":3", ":O", ":]", ":[", ":<", ":>", ":V"];

        function getChatInput() {
            return document.getElementById("chatline") || document.querySelector("#chatline");
        }

        emotes.forEach(e => {
            const ebtn = document.createElement("button");
            ebtn.innerText = e;
            ebtn.style.margin = "4px";
            ebtn.style.cursor = "pointer";

            ebtn.onclick = function () {
                const chatInput = getChatInput();
                if (chatInput) {
                    chatInput.value += e;
                    chatInput.focus();
                }
            };

            panel.appendChild(ebtn);
        });

        btn.onclick = function () {
            panel.style.display = (panel.style.display === "none") ? "block" : "none";
        };

        document.body.appendChild(btn);
        document.body.appendChild(panel);
    }

    window.addEventListener("load", addEmotePanel);
    console.log("JS is working!");
})();
