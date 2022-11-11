import { FC } from 'react';
import { Button, Navbar } from 'flowbite-react';

interface HeaderProps { }

const AppHeader: FC<HeaderProps> = () => {
  return (
    <Navbar fluid className="bg-gray-600">
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Codeslator Veterinary
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="mx-2 md:mx-0">
          Get started
        </Button>
      </div>
    </Navbar>
  );
};

export default AppHeader;