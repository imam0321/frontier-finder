import Media from '../../assets/Icons/Group 9969.png'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-20 px-24'>
      <div className='grid grid-cols-12 gap-32'>
        <div className="col-span-2">
          <h1 className='text-lg font-semibold mb-2'>Frontier Finder</h1>
          <p className='text-xs mb-4'>
            There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
          </p>
          <img className='w-36' src={Media} alt="" />
        </div>
        <div className="col-span-2 space-y-3">
          <h1 className='text-lg'>Company</h1>
          <ul className='space-y-2 font-light'>
            <li>About Us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="col-span-2 space-y-3">
          <h1 className='text-lg'>Product</h1>
          <ul className='space-y-2 font-light'>
            <li>Prototype</li>
            <li>Plans & Pricing</li>
            <li>Customers</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="col-span-2 space-y-3">
          <h1 className='text-lg'>Support</h1>
          <ul className='space-y-2 font-light'>
            <li>Help Desk</li>
            <li>Sales</li>
            <li>Become a Partner</li>
            <li>Developers</li>
          </ul>
        </div>
        <div className="col-span-2 space-y-3">
          <h1 className='text-lg'>Contact</h1>
          <ul className='space-y-2 font-light'>
            <li>524 Broadway , NYC</li>
            <li>+1777-978-5570</li>
          </ul>
        </div>
      </div>
      <hr className='my-10' />
      <div className="flex justify-between items-center">
        <p>@2023 Frontier Finder. All Rights Reserved</p>
        <p>Powered by Frontier Finder</p>
      </div>
    </footer>
  );
};

export default Footer;<p>this is a footer</p>