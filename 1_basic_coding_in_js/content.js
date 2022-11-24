let willsSmiteImages = [
  "https://thumbs.gfycat.com/AjarCorruptAfricancivet-size_restricted.gif",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/God-of-War-PC-mods-twist-Kratos-anatomy.png?q=50&fit=contain&w=1140&h=&dpr=1.5",
  "https://thumbs.gfycat.com/HighlevelBlackAlligatorgar-size_restricted.gif",
  "https://thumbs.gfycat.com/DarkPointlessCricket-size_restricted.gif",
  "https://cdn.appuals.com/wp-content/uploads/2022/03/gow-crasg.png.webp",
  "https://gamersrd.com/wp-content/uploads/2022/08/FZ4pXLNUUAINBMR.jpg.webp",
  "https://i.kym-cdn.com/photos/images/newsfeed/002/024/535/c4a.jpg",
  "https://cdn.vox-cdn.com/thumbor/ILeDwsID9CXR-afOQt9SvREFRCE=/0x0:2400x1600/1820x1213/filters:focal(950x310:1334x694):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67022743/bforboycrop.0.jpg",
];

const imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++) {
  const randomImg = Math.floor(Math.random() * willsSmiteImages.length);
  imgs[i].src = willsSmiteImages[randomImg];
}

const h1s = document.getElementsByTagName("h1");
for (let i = 0; i < h1s.length; i++) {
  h1s[i].innerText = "Kratos!!";
}

const h2s = document.getElementsByTagName("h2");
for (let i = 0; i < h2s.length; i++) {
  h2s[i].innerText = "Boy!!";
}

const h3s = document.getElementsByTagName("h3");
for (let i = 0; i < h3s.length; i++) {
  h3s[i].innerText = "Watch Your Tone..!";
}
