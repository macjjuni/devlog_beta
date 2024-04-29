import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__text">{`${new Date().getFullYear()} kkussaeng.`}</span>
    </footer>
  );
}
