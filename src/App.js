import { useState } from 'react';
import './App.css';

const App = () => {
  const [donationsSum, setDonationsSum] = useState(0);
  const [targetAmount] = useState(1000);
  const [donation, setDonation] = useState(0);

  const progressPerc = (100 * donationsSum) / targetAmount;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSum = +donationsSum + +donation;

    setDonationsSum(newSum);
    if (donationsSum > newSum) {
      alert(
        `You have raised ${
          +donationsSum + +donation
        } which is more than the target amount. Congratulations!`
      );
    }

    setDonation(0);
  };

  return (
    <div>
      <section className="progress">
        <h1>Please Help us Raise Money for Our FundRaiser</h1>
        <h3>
          Raised <span className="secondary">${donationsSum}</span> of{' '}
          <span className="secondary">$1000</span>
        </h3>
        <p>
          {donationsSum < targetAmount
            ? `${progressPerc}% ...help us out!`
            : `Thank You! We raised a total of $${donationsSum}`}
        </p>
        <div className="progressBarContainer">
          <div
            style={{
              animationDuration: '6s',
              marginRight:
                donationsSum <= targetAmount
                  ? (targetAmount - donationsSum) / 2
                  : 0
            }}
            className="progressBar"
          ></div>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="donate">
          <input
            type="text"
            id="donate"
            value={donation}
            onChange={(e) => setDonation(+e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
