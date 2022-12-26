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
   danhSachSanPhamDuocChon: [],
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
