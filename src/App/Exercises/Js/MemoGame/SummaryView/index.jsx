export const SummaryView = ({ score, time }) => {
  return (
    <div>
      {score > 0 &&
        `Gratulację! Twój wynik to ${score} pary w czasie ${time} sekund.`}
      {score === 0 && `Spróbuj jeszcze raz! Nie udało Ci się znaleźć pary :<`}
    </div>
  );
};
