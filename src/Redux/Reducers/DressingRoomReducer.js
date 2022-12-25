import Data from "../../Data/Data.json";
const DressingRoomState = {
   activeButton: ["active", "", "", "", "", "", ""],
   danhSachTab: Data.navPills,
   danhSachSanPhamRender: [
      {
         id: "topcloth_1",
         type: "topclothes",
         name: "Top Cloth 1",
         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
         imgSrc_jpg: "./images/clothes/topcloth1_show.jpg",
         imgSrc_png: "./images/clothes/topcloth1.png",
      },
      {
         id: "topcloth_2",
         type: "topclothes",
         name: "Top Cloth 2",
         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
         imgSrc_jpg: "./images/clothes/topcloth2_show.jpg",
         imgSrc_png: "./images/clothes/topcloth2.png",
      },
      {
         id: "topcloth_3",
         type: "topclothes",
         name: "Top Cloth 3",
         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
         imgSrc_jpg: "./images/clothes/topcloth3_show.jpg",
         imgSrc_png: "./images/clothes/topcloth3.png",
      },
      {
         id: "topcloth_4",
         type: "topclothes",
         name: "Top Cloth 4",
         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
         imgSrc_jpg: "./images/clothes/topcloth4_show.jpg",
         imgSrc_png: "./images/clothes/topcloth4.png",
      },
      {
         id: "topcloth_5",
         type: "topclothes",
         name: "Top Cloth 5",
         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
         imgSrc_jpg: "./images/clothes/topcloth5_show.jpg",
         imgSrc_png: "./images/clothes/topcloth5.png",
      },
      {
         id: "topcloth_6",
         type: "topclothes",
         name: "Top Cloth ",
         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
         imgSrc_jpg: "./images/clothes/topcloth6_show.jpg",
         imgSrc_png: "./images/clothes/topcloth6.png",
      },
   ],
   danhSachSanPhamDuocChon: [
      // {
      //    id: "topcloth_1",
      //    type: "topclothes",
      //    name: "Top Cloth 1",
      //    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      //    imgSrc_jpg: "./images/clothes/topcloth1_show.jpg",
      //    imgSrc_png: "./images/clothes/topcloth1.png",
      // },
      // {
      //    id: "botcloth_1",
      //    type: "botclothes",
      //    name: "Bot Cloth 1",
      //    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      //    imgSrc_jpg: "./images/clothes/botcloth1_show.jpg",
      //    imgSrc_png: "./images/clothes/botcloth1.png",
      // },
      // {
      //    id: "shoes_1",
      //    type: "shoes",
      //    name: "Shoes 1",
      //    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      //    imgSrc_jpg: "./images/shoes/shoes1_show.jpg",
      //    imgSrc_png: "./images/shoes/shoes1.png",
      // },
      // {
      //    id: "handbag_1",
      //    type: "handbags",
      //    name: "Handbag 1",
      //    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      //    imgSrc_jpg: "./images/handbags/handbag1_show.jpg",
      //    imgSrc_png: "./images/handbags/handbag1.png",
      // },
      // {
      //    id: "necklace_1",
      //    type: "necklaces",
      //    name: "Necklace 1",
      //    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      //    imgSrc_jpg: "./images/necklaces/necklace1_show.jpg",
      //    imgSrc_png: "./images/necklaces/necklace1.png",
      // },
      // {
      //    id: "hairstyle_2",
      //    type: "hairstyle",
      //    name: "Hairstyle 2",
      //    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      //    imgSrc_jpg: "./images/hairstyle/hairstyle2_show.jpg",
      //    imgSrc_png: "./images/hairstyle/hairstyle2.png",
      // },
      // {
      //    id: "background_1",
      //    type: "background",
      //    name: "Background 1",
      //    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      //    imgSrc_jpg: "./images/background/background1_show.jpg",
      //    imgSrc_png: "./images/background/background1.jpg",
      // },
   ],
};
export const DressingRoomReducer = (state = DressingRoomState, action) => {
   switch (action.type) {
      case "CHUYEN_TAB": {
         // Gắn class active cho Navpills được click
         let activeButtonUpdate = [...state.activeButton];
         for (let index in activeButtonUpdate) {
            if (Number(index) === action.index) {
               activeButtonUpdate[index] = "active";
            } else {
               activeButtonUpdate[index] = "";
            }
         }
         // Cập nhật loại sản phẩm được click
         let danhSachSanPhamRenderUpdate = Data.tabPanes.filter(
            (sanPham) => sanPham.type === action.tabType
         );
         return {
            ...state,
            activeButton: activeButtonUpdate,
            danhSachSanPhamRender: danhSachSanPhamRenderUpdate,
         };
      }
      case "CHON_SAN_PHAM": {
         let danhSachSanPhamDuocChonUpdate = [...state.danhSachSanPhamDuocChon];
         let indexSanPham = danhSachSanPhamDuocChonUpdate.findIndex(
            (sanPham) => sanPham.type === action.thongTinSanPham.type
         );
         if (indexSanPham !== -1) {
            danhSachSanPhamDuocChonUpdate.splice(indexSanPham, 1);
         }
         danhSachSanPhamDuocChonUpdate.push(action.thongTinSanPham);
         return {
            ...state,
            danhSachSanPhamDuocChon: danhSachSanPhamDuocChonUpdate,
         };
      }
      default:
         return { ...state };
   }
};
