import './Header.css';
import moneyBagLogo from '../../assets/investment-calculator-logo.png';

export default function Header({ title }) {
  return (
    <>
      <header id="header">
        <img src={moneyBagLogo} alt="Investment calculator logo for our website" />
        <h1>{title}</h1>
      </header>
    </>
  );
}
