import img1 from "/recycle2.png";
import img2 from "/plastic.jpeg";
import img3 from "/cleanearth.jpg";

interface IProcessItem {
  img: string;
  title: string;
  text: string;
}

export const processItems: IProcessItem[]= [
  {
    img: img1,
    title: "Հավաքում",
    text: "Պլաստիկի հավաքագրում համայնքներից և աղբամաններից։",
  },
  {
    img: img2,
    title: "Տեսակավորում",
    text: "Պլաստիկը բաժանվում է ըստ տեսակի և գույնի։",
  },
  {
    img: img3,
    title: "Վերամշակում",
    text: "Նյութը հալվում և վերածվում է նոր արտադրանքի։",
  },
];
