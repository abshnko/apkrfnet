import React, { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import styles from "../../styles/Home.module.scss";
import CheckIcon from "@mui/icons-material/Check";

const CaptchaCheck = ({ setState }: { setState: any }) => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const checkAnswer = () => {
    if (!isActive1 && !isActive2 && !isActive3 && !isActive4) {
      setState(false);
      return;
    }
    alert(
      "Вы шпион, потому что не справились с заданием. Покиньте сайт сию сукунду!"
    );
  };
  return (
    <div className="tasks">
      <div className="task flex flex-col">
        <div className="question text-xl text-center pb-4">
          Найдите все фотографии, где изображен Университет на Комсомольской
        </div>
        <div className="answer grid gap-4 grid-cols-4 w-full h-full">
          <Button
            onClick={() => setIsActive1((state) => !state)}
            className={`${isActive1 && styles.active}`}
          >
            {isActive1 && (
              <CheckIcon
                style={iconStyle}
                className="absolute top-0 left-0 z-20 w-full h-full p-7"
              />
            )}
            <Image
              src="/images/schools/mgu.jpg"
              alt="classic img"
              layout="fill"
              objectFit="cover"
              className="rounded z-10 "
            />
          </Button>
          <Button
            onClick={() => setIsActive2((state) => !state)}
            className={`${isActive2 && styles.active}`}
          >
            {isActive2 && (
              <CheckIcon
                style={iconStyle}
                className="absolute top-0 left-0 z-20 w-full h-full p-7"
              />
            )}
            <Image
              src="/images/schools/sgu.jpg"
              alt="classic img"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </Button>
          <Button
            onClick={() => setIsActive3((state) => !state)}
            className={`${isActive3 && styles.active}`}
          >
            {isActive3 && (
              <CheckIcon
                style={iconStyle}
                className="absolute top-0 left-0 z-20 w-full h-full p-7"
              />
            )}
            <Image
              src="/images/schools/random.jpg"
              alt="classic img"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </Button>
          <Button
            onClick={() => setIsActive4((state) => !state)}
            className={`${isActive4 && styles.active}`}
          >
            {isActive4 && (
              <CheckIcon
                style={iconStyle}
                className="absolute top-0 left-0 z-20 w-full h-full p-7"
              />
            )}
            <Image
              src="/images/schools/hse.jfif"
              alt="classic img"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </Button>
        </div>
        <button
          onClick={checkAnswer}
          className="text-xl py-2 rounded bg-lime-300 px-4 w-min self-center mt-4"
        >
          Готово
        </button>
      </div>
    </div>
  );
};

const Button = styled.button`
  width: 100%;
  border-radius: 4px;
  height: 150px;
  position: relative;
  transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 150ms;
  &:hover {
    transform: scale(1.05);
  }
`;

const iconStyle: React.CSSProperties = {
  backgroundColor: "rgba(243, 243, 243, 0.385)",
};

export default CaptchaCheck;
