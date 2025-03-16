import React from "react";
import "../style/SubMenu.css";

const SubMenu = () => {
  const SubMenuList = [
    "슈퍼적립",
    "N배송",
    "쇼핑라이브",
    "패션타운",
    "장보기",
    "원쁠딜",
    "선물샵",
    "쿠폰/혜택",
    "오늘행사",
    "푸드윈도"
  ];

  const SubMenuList_src = [
    "https://shop-phinf.pstatic.net/20241011_273/1728640344619f140C_PNG/EC8A88ED8DBCECA081EBA6BD%2BEC82ACEC9DB4ECA688%2BECA1B0ECA0.png?type=f156_png",
    "https://shop-phinf.pstatic.net/20250312_212/1741730872151Ijh1r_PNG/E18492E185A9E186B7.png?type=f156_png",
    "https://shop-phinf.pstatic.net/20241011_12/1728613232571qFu4t_PNG/02_EC87BCED9591EB9DBCEC9DB4EBB88C.png?type=f156_png",
    "https://shop-phinf.pstatic.net/20241011_269/1728613249032bQreA_PNG/04_ED8CA8EC8598ED8380EC9AB4.png?type=f156_png",
    "https://shop-phinf.pstatic.net/20241011_274/1728613256486qBEnb_PNG/05_EC9EA5EBB3B4EAB8B0.png?type=f156_png",
    "https://shop-phinf.pstatic.net/20241121_33/17321692143253abQd_PNG/fav_theme_E1848BE185AFE186ABE18488E185B3E186AFE18483E185.png?type=f156_png",
    "https://shop-phinf.pstatic.net/20241011_199/1728613265096bbipp_PNG/06_EC84A0EBACBCEC83B5.png?type=f156_png",
    "https://shop-phinf.pstatic.net/20241011_90/1728640354641Dp1eY_PNG/ECBFA0ED8FB0ED989CED839D%2BEC82ACEC9DB4ECA688%2BECA1B0ECA0.png?type=f156_png",
    "https://shop-phinf.pstatic.net/20241011_19/17286133498059amqN_PNG/16_EC98A4EB8A98ED9689EC82AC.png?type=f156_png",
    "https://shop-phinf.pstatic.net/20241011_42/1728613296678jPGKX_PNG/10_ED91B8EB939C.png?type=f156_png"
  ];

  return (
    <div className="sub_menu">
      {SubMenuList.map((menu, index) => (
        <div key={index} className="sub_menu_item">
          <div className="sub_menu_icon">
            <img
              src={SubMenuList_src[index]}
              alt={menu}
              style={{ width: "90px",height:"90px", borderRadius: "12px" }}
            />
          </div>
          <div className="sub_menu_text">{menu}</div>
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
