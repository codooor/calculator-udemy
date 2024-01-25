import './UserInput.css';

export default function UserInput({ onChangeInvestment, userInput }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(e) => onChangeInvestment('initialInvestment', e.target.value)}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(e) => onChangeInvestment('annualInvestment', e.target.value)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Returns</label>
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(e) => onChangeInvestment('expectedReturn', e.target.value)}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(e) => onChangeInvestment('duration', e.target.value)}
            />
          </p>
        </div>
      </section>
    </>
  );
}
