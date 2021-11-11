import React from "react";
import "./panelNavbar.css";
import background from "../../../assets/img/background.png";
import userImage from "../../../assets/img/img4.png";
import logOut from "../../../assets/img/logout(2).png";
import BookmarkTwoToneIcon from "@mui/icons-material/BookmarkTwoTone";
import LocalLibraryTwoToneIcon from "@mui/icons-material/LocalLibraryTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import LocalOfferTwoToneIcon from "@mui/icons-material/LocalOfferTwoTone";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import EvStationTwoToneIcon from "@mui/icons-material/EvStationTwoTone";
import ModeCommentTwoToneIcon from "@mui/icons-material/ModeCommentTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import AnalyticsTwoToneIcon from "@mui/icons-material/AnalyticsTwoTone";
import { BootstrapTooltip } from "../../tooltip/bootstrapTooltip";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link } from "react-router-dom";
import { clearStorage } from "../../../core/services/storage/storage";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const PanelNavbar = (props) => {
  const history = useHistory();
  return (
    <>
      <div className={"navbar-panel-width position-fixed"}>
        <div className="card">
          <img
            height={135}
            src={background}
            className="card-img-top panel-background"
            alt="..."
          />

          <section className={"top-data"}>
            <div className={"d-flex justify-content-center"}>
              <img src={userImage} className={"panel-user-image"} />
            </div>
            <BootstrapTooltip
              onClick={() => {
                setTimeout(() => {
                  clearStorage();
                  toast.success("خروج با موفقیت انجام شد")
                  history.push("/");
                }, 2000);
              }}
              placeMent={"left"}
              title="خروج"
            >
              <img src={logOut} className={"logOut-img"} />
            </BootstrapTooltip>
            <div className={"d-flex justify-content-center"}>
              <span className={"panel-user-name"}>مسعود حسامی</span>
            </div>
          </section>

          <div className="card-body panel-navbar-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item panel-list-item">
                <Link className={"link-link"} to={"/dashboard/panel"}>
                  <AnalyticsTwoToneIcon
                    className={"panel-navList-icons"}
                    fontSize={"small"}
                  />
                  داشبرد
                </Link>
              </li>

              <li className="list-group-item panel-list-item">
                <Link className={"link-link"}>
                  <ShoppingCartTwoToneIcon
                    className={"panel-navList-icons"}
                    fontSize={"small"}
                  />
                  سبد خرید
                </Link>
              </li>
              <li className="list-group-item panel-list-item">
                <Link className={"link-link"}>
                  <BookmarkTwoToneIcon
                    className={"panel-navList-icons"}
                    fontSize={"small"}
                  />
                  دوره های خریداری شده
                </Link>
              </li>
              <li className="list-group-item panel-list-item">
                <Link className={"link-link"} to={"/dashboard/edit"}>
                  <EditTwoToneIcon
                    className={"panel-navList-icons"}
                    fontSize={"small"}
                  />
                  ویرایش پروفایل
                </Link>
              </li>
              <li className="list-group-item panel-list-item">
                <Link className={"link-link"}>
                  <EvStationTwoToneIcon
                    className={"panel-navList-icons"}
                    fontSize={"small"}
                  />
                  شارژ کردن کیف پول
                </Link>
              </li>
              <li className="list-group-item panel-list-item">
                <Link className={"link-link"}>
                  <CategoryTwoToneIcon
                    className={"panel-navList-icons"}
                    fontSize={"small"}
                  />
                  دسته بندی دوره ها
                </Link>
              </li>
              <li className="list-group-item panel-list-item">
                <Link className={"link-link"}>
                  <LocalLibraryTwoToneIcon
                    className={"panel-navList-icons"}
                    fontSize={"small"}
                  />
                  دوره های رایگان
                </Link>
              </li>
              <li className="list-group-item panel-list-item">
                <Link className={"link-link"}>
                  <LocalOfferTwoToneIcon
                    className={"panel-navList-icons"}
                    fontSize={"small"}
                  />
                  تخفیفات روزانه
                </Link>
              </li>
              <li className="list-group-item panel-list-item">
                <Link className={"link-link"}>
                  <ModeCommentTwoToneIcon
                    className={"panel-navList-icons"}
                    fontSize={"small"}
                  />
                  ثبت نظرات
                </Link>
              </li>
              <li className="list-group-item panel-list-item">
                <Link className={"link-link"} to={"/"}>
                  <HomeTwoToneIcon
                    className={"panel-navList-icons"}
                    fontSize={"small"}
                  />
                  بازگشت به خانه
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelNavbar;
