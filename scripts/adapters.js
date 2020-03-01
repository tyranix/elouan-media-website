function Adapters() {
    this.youtubeVideo = function(container, data) {
        if (!data || !data.id) return;
        return container.addElement("iframe", {
            class: "videoFrame",
            src: `https://www.youtube.com/embed/${data.id}`,
            allowfullscreen: true,
            frameborder: 0,
        });
    };

    //adapter for when there is no data to display.
    this.noData = function(container, data) {
        var box = container.addElement("div", { class: "noDataContainer" });
        var text = box.addElement("p");
        text.innerText = config.messageNoData;
        return box;
    };
}
