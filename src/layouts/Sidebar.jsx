import React, { useRef } from "react";
import styles from "./Sidebar.module.scss";
import settingIcon from "../assets/settings.svg";

function Sidebar() {
  
  const defaultActivedLi = useRef();

  const hoverHandlerOne = () => {
    defaultActivedLi.current.style.top = "29.5%"
  };
  const hoverHandlerTwo = () => {
    defaultActivedLi.current.style.top = "39%"
  };
  const hoverHandlerThree = () => {
    defaultActivedLi.current.style.top = "48.3%"
  };
  const hoverHandlerFour = () => {
    defaultActivedLi.current.style.top = "58%"
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.navigationContainer}>
        <ul className={styles.sidebarNavigation}>
          <div className={styles.purpleLine} style={{transition: "all 0.2s ease-in-out"}} ref={defaultActivedLi}></div>
          <li onMouseOver={hoverHandlerOne}>
            <svg
              className={styles.sidebarIcons}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="home-2" transform="translate(-620 -188)">
                <path
                  id="Vector"
                  d="M18.05,4.818,12.29.788A4.853,4.853,0,0,0,6.8.918L1.79,4.828A5.153,5.153,0,0,0,0,8.468v6.9A4.631,4.631,0,0,0,4.62,20H15.4a4.622,4.622,0,0,0,4.62-4.62V8.6A5.1,5.1,0,0,0,18.05,4.818ZM10.76,16a.75.75,0,0,1-1.5,0V13a.75.75,0,0,1,1.5,0Z"
                  transform="translate(621.99 190.002)"
                  fill="#1e1e1e"
                />
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M0,0H24V24H0Z"
                  transform="translate(644 212) rotate(180)"
                  fill="none"
                  opacity="0"
                />
              </g>
            </svg>
          </li>
          <li onMouseOver={hoverHandlerTwo}>
            <svg
              className={styles.sidebarIcons}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                id="vuesax_outline_chart-2"
                data-name="vuesax/outline/chart-2"
                transform="translate(-236 -188)"
              >
                <g id="chart-2">
                  <path
                    id="Vector"
                    d="M13.75,21.5h-6C2.32,21.5,0,19.18,0,13.75v-6C0,2.32,2.32,0,7.75,0h6c5.43,0,7.75,2.32,7.75,7.75v6C21.5,19.18,19.18,21.5,13.75,21.5Zm-6-20C3.14,1.5,1.5,3.14,1.5,7.75v6C1.5,18.36,3.14,20,7.75,20h6C18.36,20,20,18.36,20,13.75v-6c0-4.61-1.64-6.25-6.25-6.25Z"
                    transform="translate(237.25 189.25)"
                    fill="#1e1e1e"
                  />
                  <path
                    id="Vector-2"
                    data-name="Vector"
                    d="M2.75,14.5A2.748,2.748,0,0,1,0,11.75v-9a2.75,2.75,0,0,1,5.5,0v9A2.748,2.748,0,0,1,2.75,14.5Zm0-13A1.25,1.25,0,0,0,1.5,2.75v9a1.25,1.25,0,0,0,2.5,0v-9A1.25,1.25,0,0,0,2.75,1.5Z"
                    transform="translate(248.75 192.75)"
                    fill="#1e1e1e"
                  />
                  <path
                    id="Vector-3"
                    data-name="Vector"
                    d="M2.75,9A2.748,2.748,0,0,1,0,6.25V2.75a2.75,2.75,0,0,1,5.5,0v3.5A2.748,2.748,0,0,1,2.75,9Zm0-7.5A1.25,1.25,0,0,0,1.5,2.75v3.5a1.25,1.25,0,0,0,2.5,0V2.75A1.25,1.25,0,0,0,2.75,1.5Z"
                    transform="translate(241.75 198.25)"
                    fill="#1e1e1e"
                  />
                  <path
                    id="Vector-4"
                    data-name="Vector"
                    d="M0,0H24V24H0Z"
                    transform="translate(236 188)"
                    fill="none"
                    opacity="0"
                  />
                </g>
              </g>
            </svg>
          </li>
          <li onMouseOver={hoverHandlerThree}>
            <svg
              className={styles.sidebarIcons}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                id="vuesax_outline_call"
                data-name="vuesax/outline/call"
                transform="translate(-108 -188)"
              >
                <g id="call">
                  <path
                    id="Vector"
                    d="M16.2,21.5a9.149,9.149,0,0,1-3.55-.79,18.775,18.775,0,0,1-3.59-2.06,31.215,31.215,0,0,1-3.37-2.87,29.876,29.876,0,0,1-2.87-3.36A18.662,18.662,0,0,1,.78,8.86,9.259,9.259,0,0,1,0,5.29,6.026,6.026,0,0,1,.41,3.08,5.341,5.341,0,0,1,1.75,1.14,3.632,3.632,0,0,1,4.34,0,2.7,2.7,0,0,1,5.47.25a2.288,2.288,0,0,1,.96.81L8.75,4.33a3.874,3.874,0,0,1,.48.85,2.246,2.246,0,0,1,.2.89,2.122,2.122,0,0,1-.32,1.1,4,4,0,0,1-.67.85l-.68.71a.488.488,0,0,0,.03.07,7.69,7.69,0,0,0,.82,1.11c.49.56.95,1.07,1.41,1.54.59.58,1.08,1.04,1.54,1.42a6.513,6.513,0,0,0,1.16.83l-.02.05.73-.72a3.735,3.735,0,0,1,.9-.69,2.111,2.111,0,0,1,1.95-.11,4.553,4.553,0,0,1,.84.47l3.32,2.36a2.149,2.149,0,0,1,.8.95,2.894,2.894,0,0,1,.22,1.08,3.335,3.335,0,0,1-.32,1.41,4.657,4.657,0,0,1-.8,1.2,5.129,5.129,0,0,1-1.91,1.37A5.9,5.9,0,0,1,16.2,21.5ZM4.34,1.5a2.192,2.192,0,0,0-1.55.72,3.836,3.836,0,0,0-.98,1.41A4.375,4.375,0,0,0,1.5,5.29a7.71,7.71,0,0,0,.66,2.98,16.693,16.693,0,0,0,1.88,3.26,27.666,27.666,0,0,0,2.71,3.18,28.156,28.156,0,0,0,3.19,2.72,16.248,16.248,0,0,0,3.29,1.89,5.964,5.964,0,0,0,4.63.35,3.692,3.692,0,0,0,1.37-.99,3.243,3.243,0,0,0,.56-.84,1.772,1.772,0,0,0,.18-.77,1.194,1.194,0,0,0-.11-.5.757.757,0,0,0-.28-.3l-3.32-2.36a2.867,2.867,0,0,0-.55-.31.526.526,0,0,0-.65.03,2.28,2.28,0,0,0-.58.45l-.76.75a1.425,1.425,0,0,1-1.45.3L12,15.01A8.525,8.525,0,0,1,10.58,14c-.48-.41-1-.89-1.63-1.51-.49-.5-.98-1.03-1.49-1.62A8.532,8.532,0,0,1,6.44,9.46l-.12-.3a1.867,1.867,0,0,1-.08-.5,1.283,1.283,0,0,1,.38-.93l.75-.78a2.9,2.9,0,0,0,.45-.56.641.641,0,0,0,.11-.34.93.93,0,0,0-.08-.32,2.869,2.869,0,0,0-.32-.53L5.21,1.92a.922.922,0,0,0-.37-.31A1.252,1.252,0,0,0,4.34,1.5ZM12.7,13.76l-.16.68.27-.7A.123.123,0,0,0,12.7,13.76Z"
                    transform="translate(109.25 189.25)"
                    fill="#5dbe77"
                  />
                  <path
                    id="Vector-2"
                    data-name="Vector"
                    d="M0,0H24V24H0Z"
                    transform="translate(108 188)"
                    fill="none"
                    opacity="0"
                  />
                </g>
              </g>
            </svg>
          </li>
          <li onMouseOver={hoverHandlerFour}>
            <svg
              className={styles.sidebarIcons}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                id="vuesax_outline_bag-2"
                data-name="vuesax/outline/bag-2"
                transform="translate(-556 -188)"
              >
                <g id="bag-2">
                  <path
                    id="Vector"
                    d="M9.75,7.384A.755.755,0,0,1,9,6.634V5.254a3.78,3.78,0,0,0-1.23-2.78,3.711,3.711,0,0,0-2.89-.95A4.043,4.043,0,0,0,1.5,5.454v.97a.755.755,0,0,1-.75.75A.755.755,0,0,1,0,6.424v-.98A5.544,5.544,0,0,1,4.74.024a5.189,5.189,0,0,1,4.04,1.34,5.27,5.27,0,0,1,1.72,3.89v1.38A.755.755,0,0,1,9.75,7.384Z"
                    transform="translate(562.75 189.246)"
                    fill="#eee34e"
                  />
                  <path
                    id="Vector-2"
                    data-name="Vector"
                    d="M12.5,15.5h-6c-4.62,0-5.48-2.15-5.7-4.24L.054,5.27a4.746,4.746,0,0,1,.9-3.79C1.854.48,3.344,0,5.5,0h8c2.17,0,3.66.49,4.55,1.48a4.756,4.756,0,0,1,.9,3.77l-.75,6.01C17.984,13.35,17.124,15.5,12.5,15.5Zm-7-14c-1.69,0-2.85.33-3.44.99a3.236,3.236,0,0,0-.52,2.61l.75,5.99c.17,1.6.61,2.92,4.21,2.92h6c3.6,0,4.04-1.31,4.21-2.9l.75-6.01a3.242,3.242,0,0,0-.52-2.6c-.59-.67-1.75-1-3.44-1Z"
                    transform="translate(558.496 195.25)"
                    fill="#eee34e"
                  />
                  <path
                    id="Vector-3"
                    data-name="Vector"
                    d="M1.01,2A1,1,0,1,1,2,1,.994.994,0,0,1,1.01,2Z"
                    transform="translate(570.41 199.15)"
                    fill="#eee34e"
                  />
                  <path
                    id="Vector-4"
                    data-name="Vector"
                    d="M1.01,2A1,1,0,1,1,2,1,.994.994,0,0,1,1.01,2Z"
                    transform="translate(563.41 199.15)"
                    fill="#eee34e"
                  />
                  <path
                    id="Vector-5"
                    data-name="Vector"
                    d="M0,0H24V24H0Z"
                    transform="translate(556 188)"
                    fill="none"
                    opacity="0"
                  />
                </g>
              </g>
            </svg>
          </li>
        </ul>
      </div>

      <div className={styles.settingContainer}>
        <button type="button" className={styles.settingBtn}>
          <img src={settingIcon} alt="Setting Icon" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
