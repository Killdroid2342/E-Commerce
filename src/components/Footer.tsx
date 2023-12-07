const Footer = () => {
  return (
    <>
      <footer className='bg-neutral-800 flex flex-col justify-center'>
        <div className='outerAlignFooter'>
          <div className='footerMainContent'>
            <h2 className='footerHeader'>StockX. Access the Now.</h2>
            <ul className='flex flex-row'>
              <li className='navli'>Shoes</li>
              <li className='navli'>Accessories</li>
              <li className='navli'>Electronics</li>
            </ul>
            <p className='footerDisclaimer'>
              This is not the real StockX. This is just a project for my GitHub.
              DO NOT ENTER ANY DETAILS ON THE SITE
            </p>
            <p className='languagefooter'>United Kingdom | English | £GBP</p>
          </div>
        </div>
        <div className='aboveText'></div>
        <div className='mainFooterText'>
          This GitHub repository, authored by Killdroid2342, is intended as a
          non-functional practice project, distinct from the actual StockX
          platform, and should not be mistaken for the genuine service. Serving
          as a learning exercise, this dummy project potentially allows
          Killdroid2342 to develop skills in web development, UI/UX design, and
          collaboration using Git and GitHub workflows. By clearly stating its
          purpose as a learning tool, this repository might offer a space for
          experimentation, skill showcase, and collaboration, while also serving
          as a portfolio piece to demonstrate growth and proficiency over time.
          It provides a valuable resource for learning and development,
          featuring a disclaimer to emphasize its non-official status compared
          to StockX.
        </div>
      </footer>
    </>
  );
};

export default Footer;
