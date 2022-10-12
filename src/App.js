import { useState } from 'react';
import './App.css';

const App = () => {
  const [donationsSum, setDonationsSum] = useState(0);
  const [targetAmount] = useState(1000);
  const [donation, setDonation] = useState(0);

  const progressPerc = (100 * donationsSum) / targetAmount;
  const barCalculation = (targetAmount - donationsSum) / 2;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!donation) return alert('You must make a donation before submitting!');

    const newSum = Number(donationsSum) + Number(donation);

    setDonationsSum(newSum);

    setDonation(0);
  };

  return (
    <div className="container">
      <section className="progress">
        <h1>Please Help us Raise Money for Our KickStarter</h1>
        <h3>
          Raised <span className="secondary">${donationsSum}</span> of{' '}
          <span className="secondary">$1000</span>
        </h3>
        <p>
          {donationsSum < targetAmount
            ? `${progressPerc}% ...help us out!`
            : `Thank You! We've reached our goal. We raised a total of $${donationsSum}`}
        </p>
        <div className="progressBarContainer">
          <div
            style={{
              animationDuration: '6s',
              marginRight: donationsSum <= targetAmount ? barCalculation : 0
            }}
            className="progressBar"
          ></div>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="donate">
          Donation Amount:{' '}
          <input
            type="text"
            id="donate"
            value={donation}
            onChange={(e) => setDonation(Number(e.target.value))}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
