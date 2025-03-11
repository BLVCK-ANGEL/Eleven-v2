const { ButtonStyle } = require("discord.js");
module.exports = {
    Token: "",
    Prefix: ".",
    Client: {
        ID: "",
        Secret: "",
    },
    button: {
        grey: ButtonStyle.Secondary,
        blue: ButtonStyle.Primary,
        link: ButtonStyle.Link,
        red: ButtonStyle.Danger,
        green: ButtonStyle.Success,
    },
    spotify: {
        ID: "731ac5bf0603411f80ac446f5c02e290",
        Secret: "cd16a34c385b4fa5915abd596fd4e480",
    },
    Api: {
        Topgg: "",
    },
    MongoData: "mongodb+srv://PHV-CLUSTER:PHV04@phv-cloud.1bg1tl8.mongodb.net/?retryWrites=true&w=majority",
    EmbedColor: "#ff0000",
    Owners: ["818920751444393994"],
    Nodes: [
        {
            name: "Main",
            url: "lava.horizxon.tech:80",
            auth: "horizxon.tec",
            secure: false,
        },
        {
            name: "Main",
            url: "lavalink.oddcoder.xyz:443",
            auth: "oddcoder",
            secure: true,
        },
        {
            name: "Main",
            url: "lavalink.ddns.net:2433",
            auth: "discord.gg/FqEQtEtUc9",
            secure: false,
        },
    ],
    hooks: {
        guildAdd: "https://discord.com/api/webhooks/1348556613862293574/R3c53V4Qd6V7e9Jl2jVqXrUiy4paTXFnNzK9223scHU113gg071tE85lIdjU7_NLsNvI",
        guildRemove: "https://discord.com/api/webhooks/1348556613862293574/R3c53V4Qd6V7e9Jl2jVqXrUiy4paTXFnNzK9223scHU113gg071tE85lIdjU7_NLsNvI",
        Error: "https://discord.com/api/webhooks/1348556613862293574/R3c53V4Qd6V7e9Jl2jVqXrUiy4paTXFnNzK9223scHU113gg071tE85lIdjU7_NLsNvI",
    },
    links: {
        invite: "",
        bg: "",
        support: "",
        vote: "",
        banner: "",
        spotify: "",
        soundcloud: "",
    },
};
