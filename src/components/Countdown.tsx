import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";
import CalendarIcon from "tsx:svgs/icons/calendar.svg";
import DecorativeLine from "tsx:svgs/icons/decorative-line.svg";

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4%;
  align-items: center;
  overflow-x: hidden;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.darkPurple};
  ${smallScreenStyle(css`
    gap: 16px;
    justify-content: center;
  `)};
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 24px;
    line-height: 32px;
    margin-left: 10%;
  }
  ${smallScreenStyle(css`
    text-align: center;
  `)};
`;

const CountdownContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  ${smallScreenStyle(css`
    justify-content: center;
  `)};
`;

const DateContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  small {
    font-size: 32px;
    font-weight: 600;
    line-height: 43.58px;
    color: ${({ theme }) => theme.color.white};
  }
`;

const StyledCalendar = styled(CalendarIcon)`
  fill: ${({ theme }) => theme.color.pink};
  width: 21px;
  height: 24px;
`;

const CountdownItem = styled.div<{ name: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  ${(props) =>
    smallScreenStyle(
      props.name === "seconds"
        ? css`
            display: none;
          `
        : css``
    )}
`;

const CountdownValue = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 48px;
  font-weight: 600;
  line-height: 65px;
`;

const CountdownLabel = styled.span`
  color: ${({ theme }) => theme.color.lightBlue};
  font-size: 16px;
  font-weight: 600;
  line-height: 21.79px;
`;

const StyledDecorativeLine = styled(DecorativeLine)`
  width: 100vw;
`;

const Seperator = styled.small<{ name: string }>`
  color: ${({ theme }) => theme.color.darkLilac};
  font-size: 48px;
  font-weight: 600;
  line-height: 65px;
  ${(props) =>
    smallScreenStyle(
      props.name === "minutes"
        ? css`
            display: none;
            visibility: hidden;
          `
        : css``
    )}
`;

const calculateTimeLeft = () => {
  const countdownDate = new Date("November 9, 2023 09:00:00").getTime();
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const timeLeft = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };

  return timeLeft;
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container>
        <EventContainer>
          <DateContainer>
            <StyledCalendar />
            <small>November 9, 2023</small>
          </DateContainer>
          <p>Lisbon, Portugal</p>
        </EventContainer>
        <CountdownContainer>
          {Object.keys(timeLeft).map((unit, index) => (
            <React.Fragment key={unit}>
              <CountdownItem name={unit}>
                <CountdownValue>{timeLeft[unit]}</CountdownValue>
                <CountdownLabel>{unit}</CountdownLabel>
              </CountdownItem>
              {index < Object.keys(timeLeft).length - 1 && (
                <Seperator name={unit}>:</Seperator>
              )}
            </React.Fragment>
          ))}
        </CountdownContainer>
      </Container>
      <StyledDecorativeLine />
    </>
  );
};

export default Countdown;
