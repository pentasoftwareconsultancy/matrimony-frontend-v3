import React, { useState, useRef, useEffect } from "react";
import styles from "./HeroSection.module.css";
import BGImage from "../../../../assets/home_bg1.png";

const ageOptions = Array.from({ length: 43 }, (_, i) => 18 + i);

const HeroSection = () => {
  const [showLookingFor, setShowLookingFor] = useState(false);
  const [lookingFor, setLookingFor] = useState("Bride/Groom");
  const [showAgeFrom, setShowAgeFrom] = useState(false);
  const [ageFrom, setAgeFrom] = useState(26);
  const [showAgeTo, setShowAgeTo] = useState(false);
  const [ageTo, setAgeTo] = useState(28);

  // Close dropdowns on outside click
  const lookingForRef = useRef();
  const ageFromRef = useRef();
  const ageToRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        lookingForRef.current &&
        !lookingForRef.current.contains(event.target)
      ) {
        setShowLookingFor(false);
      }
      if (ageFromRef.current && !ageFromRef.current.contains(event.target)) {
        setShowAgeFrom(false);
      }
      if (ageToRef.current && !ageToRef.current.contains(event.target)) {
        setShowAgeTo(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
<<<<<<< HEAD
    <div>HeroSection</div>
  )
}   
=======
    <section className={styles.heroSection}>
      <div className={styles.heroSectionDiv}>
        <div className={styles.overlay}>
          <form className={styles.filterBar} autoComplete="off">
            <div className={styles.filterGroup}>
              <div className={styles.formlabel}>
                <label>Looking for</label>
              </div>
              <div ref={lookingForRef} style={{ position: "relative" }}>
                <button
                  type="button"
                  className={styles.formInput}
                  onClick={() => setShowLookingFor((v) => !v)}
                >
                  {lookingFor} <span>&gt;</span>
                </button>
                {showLookingFor && (
                  <div className={styles.dropdownMenu}>
                    <div
                      className={styles.dropdownItem}
                      onClick={() => {
                        setLookingFor("Bride");
                        setShowLookingFor(false);
                      }}
                    >
                      Bride
                    </div>
                    <div
                      className={styles.dropdownItem}
                      onClick={() => {
                        setLookingFor("Groom");
                        setShowLookingFor(false);
                      }}
                    >
                      Groom
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.filterGroup}>
              <div className={styles.formlabel}>
                <label>Aged from</label>
              </div>
              <div ref={ageFromRef} style={{ position: "relative" }}>
                <button
                  type="button"
                  className={styles.formInput}
                  onClick={() => setShowAgeFrom((v) => !v)}
                >
                  {ageFrom} <span>&gt;</span>
                </button>
                {showAgeFrom && (
                  <div className={styles.dropdownMenuScrollable}>
                    {ageOptions.map((age) => (
                      <div
                        key={age}
                        className={styles.dropdownItem}
                        onClick={() => {
                          setAgeFrom(age);
                          setShowAgeFrom(false);
                        }}
                      >
                        {age}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.filterGroup}>
              <div className={styles.formlabel}>
                <label>Aged to</label>
              </div>
              <div ref={ageToRef} style={{ position: "relative" }}>
                <button
                  type="button"
                  className={styles.formInput}
                  onClick={() => setShowAgeTo((v) => !v)}
                >
                  {ageTo} <span>&gt;</span>
                </button>
                {showAgeTo && (
                  <div className={styles.dropdownMenuScrollable}>
                    {ageOptions.map((age) => (
                      <div
                        key={age}
                        className={styles.dropdownItem}
                        onClick={() => {
                          setAgeTo(age);
                          setShowAgeTo(false);
                        }}
                      >
                        {age}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.filterGroup}>
              <div className={styles.formlabel}>
                <label>City</label>
              </div>
              <button type="button" className={styles.formInput}>
                Select city <span>&gt;</span>
              </button>
            </div>
            <div className={styles.filterGroup}>
              <div className={styles.formlabel}>
                <label>State</label>
              </div>
              <button type="button" className={styles.formInput}>
                Select state <span>&gt;</span>
              </button>
            </div>
            <button type="submit" className={styles.nextBtn}>
              Next
            </button>
          </form>
          <div className={styles.headlineWrap}>
            <h1 className={styles.headline}>
              "Your Perfect Partner is Just a Click Away!"
            </h1>
          </div>
          {/* <div className={styles.iconbuttons}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37.5px"
                height="37.5px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  d="M9.92 7.408a53 53 0 0 1 .523 1.245l.003.008l.239.575l.022.052l.001.001c.1.2.202.523.022.892zm0 0c-.12-.268-.277-.48-.498-.608m.499.608L9.422 6.8m3.832 7.165a4 4 0 0 0-.185-.083l-.009-.004a6.1 6.1 0 0 1-1.769-1.114c-.647-.574-1.11-1.28-1.29-1.581c.086-.088.18-.201.255-.293l.01-.01q.073-.09.135-.162c.158-.18.23-.33.298-.473l.004-.008l.027-.056l-.776.93l-.028.016l-.402.233m3.73 2.605l-.01.018l.015-.016m-.005-.002l-.01.019l-.033.038c-.012.015-.012.011.002.002l.002-.001l.014-.008l-.008.016l-.19.382m.223-.448l.005.002m0 0a.4.4 0 0 0 .072.03s-.014-.003-.038 0a.2.2 0 0 0-.064.018l-.008.016l-.19.382m.228-.446c.189-.22.591-.693.732-.9m-.96 1.346c.258.128.41.108.56-.064c.148-.173.642-.749.816-1.005m-1.376 1.069q-.063-.031-.169-.076a6.6 6.6 0 0 1-1.903-1.2c-.767-.68-1.286-1.521-1.435-1.777m4.467 1.706l-.002.004l.418.274m-.416-.278l.002-.002l.414.28m-.416-.278c.138-.208.338-.378.62-.412c.227-.026.436.051.545.092l.004.002c.146.054.55.245.915.421c.38.183.763.371.894.436l.136.066l-.216.451m-2.482-.778c.168-.256.34-.216.578-.128c.238.089 1.504.71 1.761.837l.143.07M9.524 11.36l.401-.233l.03-.017l.069-.72l-.144.17c-.085.104-.17.206-.242.278c-.129.128-.262.266-.114.522Zm7.365 2.762l.216-.45l.012.005c.08.038.175.084.256.134a.86.86 0 0 1 .298.287m-.782.024c.179.086.3.145.352.232m.43-.256l-.578 1.477c.212-.601.212-1.113.148-1.221m.43-.256c.08.134.096.289.102.368q.013.16-.004.356a3.8 3.8 0 0 1-.205.92l-.001.003c-.167.46-.602.83-.974 1.07c-.377.242-.838.445-1.19.478m2.272-3.195l-.43.255m0 0l-1.843 2.94m0 0l-.122.014l-.06-.496l.06.496c-.24.03-.54.064-1.046-.02c-.487-.082-1.154-.273-2.154-.666c-2.57-1.011-4.241-3.482-4.575-3.975l-.006-.009l.415-.28l-.415.28l-.03-.045l-.009-.012v-.002l-.005-.005a7 7 0 0 1-.625-1.005c-.26-.513-.523-1.207-.523-1.941c0-1.385.697-2.125.99-2.436l.044-.046zM9.422 6.8c-.21-.122-.418-.127-.512-.13m.512.13l-.512-.13m0 0H8.9zM7.516 20.182a.5.5 0 0 0-.364-.044l-4.44 1.16l1.185-4.3a.5.5 0 0 0-.05-.384a9.4 9.4 0 0 1-1.263-4.703c0-5.186 4.246-9.411 9.458-9.411c2.534 0 4.906.982 6.692 2.76a9.33 9.33 0 0 1 2.766 6.656c0 5.187-4.246 9.412-9.458 9.412h-.005a9.5 9.5 0 0 1-4.52-1.146Z"
                  strokeWidth="1"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37.5px"
                height="37.5px"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M0 128c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm320 0v256h256V128zm-141.7 47.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1.1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4zM160 233.2l19 42.8h-38zM448 164c11 0 20 9 20 20v4h60c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9.6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9L467 333.8c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8L410 286.1c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6l.5.5c12.4-13.1 22.5-28.3 29.8-45l-35.2.1h-72c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};
>>>>>>> 66b1199773a413d8a7bc832889a018474894ba08

export default HeroSection;