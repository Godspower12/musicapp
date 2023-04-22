
function chillHop() {
    return [
        {
            name: "Vitamin D",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg" ,
            artist: "fantompower" ,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=22933",
            Color: ["#D9B3DA", "#FEFEFB"],
            id:  Math.random() * 100,
            active: true ,
        },
        {
            name: "Clarity",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/23e723de689a7b1253f600fc21de954300043ce3-300x300.jpg",
            artist: "Fantompower" ,
            audio:  "https://mp3.chillhop.com/serve.php/?mp3=22793",
            Color: ["#FFA25F", "#8FAAB5"] ,
            id: Math.random() * 100,
            active: false,
        },
        {
            name: "Memories part 2",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
            artist: "Ruck p" ,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=21660"  ,
            Color: ["#DD8A8E", "#7D7188"] ,
            id:    Math.random() * 100 ,
            active:  false,
        },
        {
            name: "Little Bird",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/23e723de689a7b1253f600fc21de954300043ce3-300x300.jpg",
            artist: "Liphe",
            audio:  "https://mp3.chillhop.com/serve.php/?mp3=21735"  ,
            Color:  ["#FE8169", "#45193B"],
            id:    Math.random() * 100 ,
            active:  false,
        },
        {
            name: "Viatecture",
            cover: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg" ,
            artist: "Leavy, Makzo",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20119",
            Color: ["#224E75", "#F1DFC9"] ,
            id:   Math.random() * 100  ,
            active: false ,
        },
    ]
}
export default chillHop;