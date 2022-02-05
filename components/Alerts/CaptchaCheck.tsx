import React, { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import styles from "../../styles/Alert.module.scss";
import CheckIcon from "@mui/icons-material/Check";

const CaptchaCheck = ({ setState }: { setState: any }) => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [madeMistake, setMadeMistake] = useState(false);

  const checkAnswer = () => {
    if (!isActive1 && !isActive2 && !isActive3 && !isActive4) {
      setState(false);
      return;
    }
    setMadeMistake(true);
    // alert(
    //   "Вы шпион, потому что не справились с заданием. Покиньте сайт сию секунду!"
    // );
  };
  return (
    <div className="tasks">
      <div className="task flex flex-col">
        {!madeMistake && (
          <>
            <div className="question text-xl pb-4">
              Найдите все фотографии, где изображено здание университета на
              Комсомольской
            </div>
            <div className="mb-6 answer grid gap-4 grid-cols-2 md:grid-cols-4 w-full h-full">
              <Button
                onClick={() => setIsActive1((state) => !state)}
                className={`${isActive1 && styles.active}`}
              >
                {isActive1 && (
                  <CheckIcon
                    style={iconStyle}
                    className="absolute top-0 left-0 z-20 p-7"
                  />
                )}
                <Image
                  src="/images/schools/mgu.jpg"
                  alt="classic img"
                  layout="fill"
                  objectFit="cover"
                />
              </Button>
              <Button
                onClick={() => setIsActive2((state) => !state)}
                className={`${isActive2 && styles.active}`}
              >
                {isActive2 && (
                  <CheckIcon
                    style={iconStyle}
                    className="absolute top-0 left-0 z-20  p-7"
                  />
                )}
                <Image
                  src="/images/schools/sgu.jpg"
                  alt="classic img"
                  layout="fill"
                  objectFit="cover"
                />
              </Button>
              <Button
                onClick={() => setIsActive3((state) => !state)}
                className={`${isActive3 && styles.active}`}
              >
                {isActive3 && (
                  <CheckIcon
                    style={iconStyle}
                    className="absolute top-0 left-0 z-20  p-7"
                  />
                )}
                <Image
                  src="/images/schools/random.jpg"
                  alt="classic img"
                  layout="fill"
                  objectFit="cover"
                />
              </Button>
              <Button
                onClick={() => setIsActive4((state) => !state)}
                className={`${isActive4 && styles.active}`}
              >
                {isActive4 && (
                  <CheckIcon
                    style={iconStyle}
                    className="absolute top-0 left-0 z-20 p-7"
                  />
                )}
                <Image
                  src="/images/schools/hse.jpg"
                  alt="classic img"
                  layout="fill"
                  objectFit="cover"
                />
              </Button>
            </div>
            <button
              onClick={checkAnswer}
              //   className="text-xl py-2 rounded bg-lime-300 px-4 w-min self-center mt-4"
              className={styles.button}
            >
              Готово
            </button>
          </>
        )}
        {madeMistake && (
          <>
            <div
              style={{
                fontSize: "26px",
                color: "#d74c4c",
                fontWeight: 800,
                marginBottom: "20px",
              }}
            >
              Вы иностранный агент, так как не справились с заданием. Покиньте
              сайт сию секунду!
            </div>
            <button
              style={{ color: "#2d767a", textAlign: "left" }}
              onClick={() => setMadeMistake(false)}
            >
              попробовать еще раз
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const Button = styled.button`
  width: 100%;
  height: 150px;
  border: 6px solid #2d767a;
  position: relative;
  transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 150ms;
  &:hover {
    transform: scale(1.05);
    border: 8px solid #f8bf2d;
  }
`;

const iconStyle: React.CSSProperties = {
  backgroundColor: "rgba(243, 243, 243, 0.385)",
  width: "100%",
  height: "100%",
};

export default CaptchaCheck;
